#!/usr/bin/env python3
"""
Turns the signature PNG into what the "signing" animation needs:

  public/images/signature/vikrant-neb-signature.png   the ink, cropped, as a white alpha mask
  components/signature/strokes.ts                     pen strokes in writing order

The strokes are the ink's centreline (Zhang-Suen thinning, then a walk of the skeleton graph).
They are never shown: they animate as a thick mask over the real ink, so the visitor sees the
exact signature revealed along the path a pen would take.

    npm run signature
    npm run signature -- path/to/signature.png

Needs only numpy and Pillow.
"""
from __future__ import annotations

import json
import math
import sys
from pathlib import Path

import numpy as np
from PIL import Image, ImageDraw

ROOT = Path(__file__).resolve().parent.parent
SRC = Path(sys.argv[1]) if len(sys.argv) > 1 else ROOT / "assets/source/vikrant-neb-signature.png"
OUT_IMG = ROOT / "public/images/signature/vikrant-neb-signature.png"
OUT_TS = ROOT / "components/signature/strokes.ts"
# White: the SVG uses the ink as a luminance mask and fills it with currentColor, so the colour
# comes from CSS and follows the theme.
INK_RGB = (0xFF, 0xFF, 0xFF)
PAD = 16


# --------------------------------------------------------------------------------------------- ink
def load_ink(path: Path) -> np.ndarray:
    """Ink coverage in [0, 1]. Works for transparent PNGs and for dark ink on white."""
    rgba = np.asarray(Image.open(path).convert("RGBA")).astype(np.float32) / 255
    alpha = rgba[..., 3]
    if alpha.min() < 0.99:
        darkness = 1 - rgba[..., :3].mean(-1)
        return np.clip(alpha * np.maximum(darkness, 0.6), 0, 1)
    return np.clip((1 - rgba[..., :3].mean(-1) - 0.1) / 0.8, 0, 1)


# -------------------------------------------------------------------------------------- thinning
def neighbours(img: np.ndarray):
    """P2..P9 clockwise from north, as in Zhang & Suen (1984)."""
    p = np.pad(img, 1)
    return [
        p[:-2, 1:-1], p[:-2, 2:], p[1:-1, 2:], p[2:, 2:],
        p[2:, 1:-1], p[2:, :-2], p[1:-1, :-2], p[:-2, :-2],
    ]


def zhang_suen(mask: np.ndarray) -> np.ndarray:
    img = mask.astype(np.uint8).copy()
    while True:
        changed = False
        for step in (0, 1):
            P = neighbours(img)
            b = sum(P)
            seq = P + [P[0]]
            a = sum(((seq[i] == 0) & (seq[i + 1] == 1)).astype(np.uint8) for i in range(8))
            p2, p3, p4, p5, p6, p7, p8, p9 = P
            if step == 0:
                c1, c2 = p2 * p4 * p6, p4 * p6 * p8
            else:
                c1, c2 = p2 * p4 * p8, p2 * p6 * p8
            kill = (img == 1) & (b >= 2) & (b <= 6) & (a == 1) & (c1 == 0) & (c2 == 0)
            if kill.any():
                img[kill] = 0
                changed = True
        if not changed:
            return img.astype(bool)


# ------------------------------------------------------------------------------------ graph walk
OFFSETS = [(-1, 0), (-1, 1), (0, 1), (1, 1), (1, 0), (1, -1), (0, -1), (-1, -1)]


def trace_edges(skel: np.ndarray) -> list[list[tuple[int, int]]]:
    """
    Splits the skeleton into edges between end points and junctions.

    Nodes are found by crossing number (0→1 transitions around a pixel), not neighbour count:
    diagonal staircases give a plain line pixel three neighbours, which would shatter every curve
    into one-pixel "junctions". Walks prefer orthogonal steps so staircase corners are not skipped.
    """
    pts = set(zip(*np.nonzero(skel)))

    def ring(p):
        return [((p[0] + dy, p[1] + dx) in pts) for dy, dx in OFFSETS]

    def crossing(p):
        r = ring(p)
        return sum(1 for i in range(8) if not r[i] and r[(i + 1) % 8])

    nodes = {p for p in pts if crossing(p) != 2}
    visited: set[tuple[int, int]] = set()
    edges: list[list[tuple[int, int]]] = []

    def unvisited_nbrs(p):
        orth = [(p[0] + dy, p[1] + dx) for dy, dx in OFFSETS[0::2]]
        diag = [(p[0] + dy, p[1] + dx) for dy, dx in OFFSETS[1::2]]
        return [n for n in orth + diag if n in pts and n not in visited]

    def walk(start):
        path = [start]
        visited.add(start)
        cur = start
        while True:
            nxt = unvisited_nbrs(cur)
            if not nxt:
                break
            cur = nxt[0]
            path.append(cur)
            if cur in nodes:
                break
            visited.add(cur)
        return path

    for node in sorted(nodes):
        visited.add(node)
        for n in unvisited_nbrs(node):
            if n in visited:
                continue
            path = [node] + walk(n)
            edges.append(path)

    # Whatever is left is closed loops, which have no nodes.
    for p in sorted(pts - visited):
        if p not in visited:
            edges.append(walk(p))
    return [e for e in edges if len(e) > 1]


def length(path) -> float:
    return sum(math.dist(a, b) for a, b in zip(path, path[1:]))


def rdp(points, eps):
    if len(points) < 3:
        return points
    (y1, x1), (y2, x2) = points[0], points[-1]
    dx, dy = x2 - x1, y2 - y1
    norm = math.hypot(dx, dy) or 1.0
    dists = [abs(dy * (x - x1) - dx * (y - y1)) / norm for y, x in points[1:-1]]
    i = max(range(len(dists)), key=dists.__getitem__)
    if dists[i] > eps:
        return rdp(points[: i + 2], eps)[:-1] + rdp(points[i + 1 :], eps)
    return [points[0], points[-1]]


# ------------------------------------------------------------------------------------ ordering
def order_strokes(edges, width):
    """
    Chain skeleton edges into pen strokes in a plausible writing order: left to right, continuing
    through junctions in the straightest direction. The long underline is written last, then dots.
    """
    edges = [list(e) for e in edges if length(e) >= 3]
    underline = max(edges, key=lambda e: (max(p[1] for p in e) - min(p[1] for p in e)))
    if max(p[1] for p in underline) - min(p[1] for p in underline) < width * 0.5:
        underline = None
    rest = [e for e in edges if e is not underline]

    def direction(a, b):
        return math.atan2(b[0] - a[0], b[1] - a[1])

    strokes: list[list[tuple[int, int]]] = []
    remaining = rest[:]
    while remaining:
        # Start at the left-most unused end point.
        first = min(remaining, key=lambda e: min(e[0][1], e[-1][1]))
        remaining.remove(first)
        if first[-1][1] < first[0][1]:
            first.reverse()
        stroke = first[:]
        while True:
            tail = stroke[-1]
            heading = direction(stroke[max(0, len(stroke) - 6)], tail)
            best, best_turn = None, math.radians(100)
            for e in remaining:
                for cand in (e, e[::-1]):
                    if math.dist(cand[0], tail) <= 2.5:
                        turn = abs((direction(cand[0], cand[min(5, len(cand) - 1)]) - heading + math.pi) % (2 * math.pi) - math.pi)
                        if turn < best_turn:
                            best, best_turn = (e, cand), turn
            if not best:
                break
            remaining.remove(best[0])
            stroke.extend(best[1][1:])
        strokes.append(stroke)

    # Dots (tiny, isolated) go after the underline, the way people actually sign.
    dots = [s for s in strokes if length(s) < 18]
    body = [s for s in strokes if length(s) >= 18]
    if underline:
        if underline[-1][1] < underline[0][1]:
            underline.reverse()
        body.append(underline)
    return body + dots


def uncovered_dots(mask: np.ndarray, strokes, reach: float):
    """
    Dots too small to leave a skeleton (the two under "Neb") would never be revealed. Rasterise the
    strokes at mask width, find ink they miss, and add a pen tap at the centre of each blob.
    """
    h, w = mask.shape
    canvas = Image.new("L", (w, h), 0)
    draw = ImageDraw.Draw(canvas)
    for s in strokes:
        pts = [(x, y) for y, x in s]
        draw.line(pts, fill=255, width=int(reach))
        for x, y in pts[:: max(1, len(pts) // 8)] + [pts[-1]]:
            draw.ellipse([x - reach / 2, y - reach / 2, x + reach / 2, y + reach / 2], fill=255)
    missed = mask & (np.asarray(canvas) == 0)

    taps = []
    seen = np.zeros_like(missed)
    for y, x in zip(*np.nonzero(missed)):
        if seen[y, x]:
            continue
        stack, blob = [(y, x)], []
        seen[y, x] = True
        while stack:
            cy, cx = stack.pop()
            blob.append((cy, cx))
            for dy, dx in OFFSETS:
                ny, nx = cy + dy, cx + dx
                if 0 <= ny < h and 0 <= nx < w and missed[ny, nx] and not seen[ny, nx]:
                    seen[ny, nx] = True
                    stack.append((ny, nx))
        if len(blob) >= 12:
            cy = round(sum(p[0] for p in blob) / len(blob))
            cx = round(sum(p[1] for p in blob) / len(blob))
            taps.append([(cy, cx - 1), (cy, cx + 1)])
    return sorted(taps, key=lambda t: t[0][1])


# ----------------------------------------------------------------------------------------- main
def main():
    ink = load_ink(SRC)
    ys, xs = np.nonzero(ink > 0.25)
    y0, y1 = max(ys.min() - PAD, 0), min(ys.max() + PAD + 1, ink.shape[0])
    x0, x1 = max(xs.min() - PAD, 0), min(xs.max() + PAD + 1, ink.shape[1])
    ink = ink[y0:y1, x0:x1]
    h, w = ink.shape

    # White ink, alpha = coverage.
    rgba = np.zeros((h, w, 4), np.uint8)
    rgba[..., :3] = INK_RGB
    rgba[..., 3] = (ink * 255).round().astype(np.uint8)
    OUT_IMG.parent.mkdir(parents=True, exist_ok=True)
    Image.fromarray(rgba, "RGBA").save(OUT_IMG, optimize=True)

    # Stroke width estimate: ink area / skeleton length.
    mask = ink > 0.35
    skel = zhang_suen(mask)
    stroke_width = float(mask.sum() / max(skel.sum(), 1))

    strokes = order_strokes(trace_edges(skel), w)
    strokes += uncovered_dots(mask, strokes, stroke_width * 2.5)
    out = []
    for s in strokes:
        pts = rdp(s, 0.9)
        d = "M" + " L".join(f"{x:.0f} {y:.0f}" for y, x in pts)
        out.append({"d": d, "length": round(length(s), 1)})

    total = sum(o["length"] for o in out)
    OUT_TS.parent.mkdir(parents=True, exist_ok=True)
    OUT_TS.write_text(
        "// Generated by scripts/trace-signature.py — do not edit by hand.\n"
        "// Pen strokes along the signature's centreline, in writing order.\n\n"
        f"export const signatureViewBox = {{ width: {w}, height: {h} }} as const;\n\n"
        f"/** Mean ink width in viewBox units; the reveal mask is drawn wider than this. */\n"
        f"export const signatureInkWidth = {stroke_width:.1f};\n\n"
        f"export const signatureStrokes: ReadonlyArray<{{ d: string; length: number }}> = {json.dumps(out, indent=2)};\n"
    )
    print(f"ink {w}x{h}, ink width ~{stroke_width:.1f}px, {len(out)} strokes, total length {total:.0f}px")
    for o in out:
        print(f"  {o['length']:7.1f}  {o['d'][:60]}")


if __name__ == "__main__":
    main()

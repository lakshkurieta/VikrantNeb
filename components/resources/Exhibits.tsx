"use client";

import { useState, type ReactNode } from "react";
import "./exhibits.css";

/**
 * The live exhibits in the two web papers (content/papers.ts places one with { t: "exhibit", id }),
 * rebuilt from the papers' own scripts with the same figures: sliders, toggles and charts that
 * recount as you move them. Every number is illustrative, as the papers say.
 */

const money = (v: number, digits = 2) => `$${v.toFixed(digits)}`;
const commas = (text: string) => text.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
const trim = (v: number) => v.toFixed(1).replace(/\.0$/, "");

function Exhibit({
  kicker,
  title,
  cap,
  children,
}: {
  kicker: string;
  title: string;
  cap: string;
  children: ReactNode;
}) {
  return (
    <figure className="exhibit">
      <p className="text-label text-signal">{kicker}</p>
      <p className="exhibit__title">{title}</p>
      {children}
      <figcaption className="exhibit__cap">{cap}</figcaption>
    </figure>
  );
}

function Slider({
  label,
  show,
  set,
  ...range
}: {
  label: string;
  show: string;
  set: (v: number) => void;
  value: number;
  min: number;
  max: number;
  step: number;
}) {
  return (
    <label className="exhibit-slider">
      <span>{label}</span>
      <output>{show}</output>
      <input type="range" {...range} onChange={(e) => set(+e.target.value)} />
    </label>
  );
}

function Check({ label, on, set }: { label: string; on: boolean; set: (on: boolean) => void }) {
  return (
    <label className="exhibit-check">
      <input type="checkbox" checked={on} onChange={(e) => set(e.target.checked)} />
      {label}
    </label>
  );
}

/** The two views the floor paper's exhibits switch between. */
function Views({ byClient, set }: { byClient: boolean; set: (byClient: boolean) => void }) {
  return (
    <div className="exhibit-views" role="group" aria-label="View">
      {["Building view", "By client"].map((label, i) => (
        <button key={label} type="button" aria-pressed={byClient === (i === 1)} onClick={() => set(i === 1)}>
          {label}
        </button>
      ))}
    </div>
  );
}

type Stat = [label: string, value: ReactNode, tone?: "bad" | "good"];

function Readout({ stats }: { stats: Stat[] }) {
  return (
    <dl className="exhibit-readout">
      {stats.map(([label, value, tone]) => (
        <div key={label}>
          <dt>{label}</dt>
          <dd data-tone={tone}>{value}</dd>
        </div>
      ))}
    </dl>
  );
}

/** A table whose last row is its total (unless `total` is false). */
function Table({ head, rows, total = true }: { head: string[]; rows: ReactNode[][]; total?: boolean }) {
  return (
    <div className="paper-table exhibit-table">
      <table>
        <thead>
          <tr>
            {head.map((cell, i) => (
              <th key={i}>{cell}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, r) => (
            <tr key={r} data-total={(total && r === rows.length - 1) || undefined}>
              {row.map((cell, c) => (
                <td key={c}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/** Colour swatches: `c` is a data-c key in exhibits.css. */
function Legend({ items }: { items: [c: string, label: string][] }) {
  return (
    <p className="exhibit-legend">
      {items.map(([c, label]) => (
        <span key={label}>
          <i data-c={c} />
          {label}
        </span>
      ))}
    </p>
  );
}

/** Horizontal gridlines, labelled on the left. */
function Grid({
  ticks,
  y,
  from,
  to,
  label,
}: {
  ticks: number[];
  y: (v: number) => number;
  from: number;
  to: number;
  label: (v: number) => string;
}) {
  return ticks.map((v) => (
    <g key={v}>
      <line className="grid" x1={from} x2={to} y1={y(v)} y2={y(v)} />
      <text x={from - 8} y={y(v) + 4} textAnchor="end">
        {label(v)}
      </text>
    </g>
  ));
}

/* ---- Every Line on the Invoice ------------------------------------------------------------- */

function Utilization() {
  const [used, setUsed] = useState(80);
  const cost = 7.5 / (used / 100);
  return (
    <Exhibit
      kicker="Exhibit A · Illustrative"
      title="Same pallet, emptier building"
      cap="$900,000 a year ÷ 10,000 positions ÷ 12 months, divided by the share of positions actually filled."
    >
      <Slider label="Building utilization" show={`${used}%`} value={used} min={50} max={100} step={1} set={setUsed} />
      <Readout
        stats={[
          ["Cost per position, full", "$7.50"],
          ["Cost per position, now", money(cost)],
          ["Extra rent per pallet", `+${Math.round((cost / 7.5 - 1) * 100)}%`, "bad"],
        ]}
      />
    </Exhibit>
  );
}

const months = Array.from({ length: 12 }, (_, i) => `M${i + 1}`);
const fixedCost = [60, 60, 60, 60, 78, 78, 78, 78, 110, 110, 110, 110];
const orders = [8000, 9500, 11000, 12500, 14000, 15500, 17000, 18500, 20000, 22000, 24000, 26000];

/** A month axis along the bottom of a 12-month chart, with the two step months marked. */
function MonthAxis({
  from,
  width,
  bottom,
  top,
  step,
}: {
  from: number;
  width: number;
  bottom: number;
  top: number;
  step?: boolean;
}) {
  return (
    <>
      {[4, 8].map((i) => (
        <g key={i}>
          <line className="stepline" x1={from + i * width} x2={from + i * width} y1={top} y2={bottom} />
          {step && (
            <text className="step" x={from + i * width + 4} y={top + 10}>
              step
            </text>
          )}
        </g>
      ))}
      <line className="axis" x1={from} x2={from + 12 * width} y1={bottom} y2={bottom} />
      {[0, 4, 8, 11].map((i) => (
        <text key={i} x={from + i * width + width / 2} y={bottom + 16} textAnchor="middle">
          {months[i]}
        </text>
      ))}
    </>
  );
}

const path = (points: [number, number][]) => points.map(([x, y], i) => `${i ? "L" : "M"}${x} ${y}`).join("");

function Steps() {
  const [L, T, B] = [46, 16, 220];
  const H = B - T;
  const bw = (380 - L) / 12;
  const bw2 = (400 - L) / 12;
  const yOrders = (v: number) => B - (v / 30000) * H;
  const yCost = (v: number) => B - ((v - 3.5) / 4.5) * H;
  const perOrder = fixedCost.map((f, i) => (f * 1000) / orders[i]);
  const ordersAt = orders.map((v, i) => [L + i * bw + bw / 2, yOrders(v)] as [number, number]);
  const perOrderAt = perOrder.map((v, i) => [L + i * bw2 + bw2 / 2, yCost(v)] as [number, number]);
  return (
    <Exhibit
      kicker="Exhibit B · Illustrative"
      title="Fixed cost steps, volume climbs"
      cap="Month 5: second shift and a supervisor. Month 9: new WMS and automation. Illustrative figures, not from any operator."
    >
      <div className="exhibit-split exhibit-split--even">
        <div>
          <svg
            className="chart"
            viewBox="0 0 420 260"
            role="img"
            aria-label="Monthly fixed cost as stepped bars from 60 thousand to 110 thousand dollars, with orders rising from 8,000 to 26,000 over twelve months"
          >
            <Grid ticks={[0, 40, 80, 120]} y={(v) => B - (v / 120) * H} from={L} to={380} label={(v) => `$${v}k`} />
            {[0, 10, 20, 30].map((v) => (
              <text key={v} x={388} y={yOrders(v * 1000) + 4}>
                {v}k
              </text>
            ))}
            {fixedCost.map((v, i) => (
              <rect
                key={i}
                data-c="soft"
                x={L + i * bw + 3}
                y={B - (v / 120) * H}
                width={bw - 6}
                height={(v / 120) * H}
              />
            ))}
            <path className="line" d={path(ordersAt)} />
            {ordersAt.map(([x, y], i) => (
              <circle key={i} className="dot" cx={x} cy={y} r={3} />
            ))}
            <MonthAxis from={L} width={bw} bottom={B} top={T} step />
            <text x={L} y={B + 36}>
              Orders on right axis
            </text>
          </svg>
          <Legend
            items={[
              ["soft", "Fixed cost / month"],
              ["line", "Orders / month"],
            ]}
          />
        </div>
        <div>
          <svg
            className="chart"
            viewBox="0 0 420 260"
            role="img"
            aria-label="Fixed cost per order falling from 7.50 to 4.80, jumping to 5.57, falling to 4.22, jumping to 5.50, then falling to 4.23"
          >
            <Grid ticks={[4, 5, 6, 7, 8]} y={yCost} from={L} to={400} label={(v) => `$${v.toFixed(2)}`} />
            <path className="line" d={path(perOrderAt)} />
            {perOrderAt.map(([x, y], i) => (
              <g key={i}>
                <circle className="dot" cx={x} cy={y} r={3.2} />
                {[0, 3, 4, 7, 8, 11].includes(i) && (
                  <text className="lbl" x={x} y={y - 9} textAnchor="middle">
                    ${perOrder[i].toFixed(2)}
                  </text>
                )}
              </g>
            ))}
            <MonthAxis from={L} width={bw2} bottom={B} top={T} />
          </svg>
          <Legend items={[["line", "Fixed cost per order"]]} />
        </div>
      </div>
    </Exhibit>
  );
}

function PickCost() {
  const [picks, setPicks] = useState(60);
  const [wage, setWage] = useState(26);
  const cost = wage / picks;
  const [L, R, B] = [48, 410, 212];
  const y = (v: number) => B - (Math.min(v, 1) / 1) * (B - 14);
  const bw = (R - L) / 5;
  return (
    <Exhibit
      kicker="Exhibit C · Illustrative"
      title="Labor cost per pick, by productivity"
      cap="Shaded band: illustrative market range of $0.30 to $0.75 per unit picked. Not any operator’s rates."
    >
      <div className="exhibit-split">
        <div className="exhibit-stack">
          <Slider label="Picks per hour" show={`${picks}`} value={picks} min={20} max={140} step={5} set={setPicks} />
          <Slider
            label="Fully loaded labor, per hour"
            show={`$${wage}`}
            value={wage}
            min={18}
            max={40}
            step={1}
            set={setWage}
          />
          <Readout
            stats={[
              ["Labor cost per pick", money(cost)],
              cost > 0.75
                ? ["Against market range", "Above ceiling", "bad"]
                : cost < 0.3
                  ? ["Against market range", "Below floor", "good"]
                  : ["Against market range", "Inside"],
            ]}
          />
        </div>
        <svg
          className="chart"
          viewBox="0 0 420 250"
          role="img"
          aria-label="Labor cost per pick at 30, 45, 60, 90 and 120 picks per hour against an illustrative market range of 30 to 75 cents"
        >
          <rect className="band" x={L} y={y(0.75)} width={R - L} height={y(0.3) - y(0.75)} />
          <line className="bandedge" x1={L} x2={R} y1={y(0.75)} y2={y(0.75)} />
          <line className="bandedge" x1={L} x2={R} y1={y(0.3)} y2={y(0.3)} />
          <text className="band-t" x={R - 4} y={y(0.75) - 6} textAnchor="end">
            Market range
          </text>
          {[0, 0.25, 0.5, 0.75, 1].map((v) => (
            <text key={v} x={L - 8} y={y(v) + 4} textAnchor="end">
              ${v.toFixed(2)}
            </text>
          ))}
          {[30, 45, 60, 90, 120].map((rate, i) => {
            const at = wage / rate;
            const x = L + i * bw + 10;
            return (
              <g key={rate}>
                <rect
                  data-c={Math.abs(rate - picks) < 1 ? "bar" : "soft"}
                  x={x}
                  y={y(at)}
                  width={bw - 20}
                  height={B - y(at)}
                />
                <text className="lbl" x={x + (bw - 20) / 2} y={y(at) - 6} textAnchor="middle">
                  {money(at)}
                </text>
                <text x={x + (bw - 20) / 2} y={B + 16} textAnchor="middle">
                  {rate}/hr
                </text>
              </g>
            );
          })}
          <line className="you" x1={L} x2={R} y1={y(cost)} y2={y(cost)} />
          <text className="step" x={L + 4} y={y(cost) - 6}>
            You: {money(cost)} at {picks}/hr
          </text>
          <line className="axis" x1={L} x2={R} y1={B} y2={B} />
        </svg>
      </div>
    </Exhibit>
  );
}

function OneOrder() {
  const [units, setUnits] = useState(3);
  const [allIn, setAllIn] = useState(3.5);
  const [insert, setInsert] = useState(true);
  const lines: [string, number, number][] = [
    ["Order fee", 1, 2.75],
    ["Additional units picked", units - 1, 0.5],
    ["Mailer", 1, 0.6],
    ...(insert ? [["Insert", 1, 0.15] as [string, number, number]] : []),
  ];
  const total = lines.reduce((sum, [, qty, rate]) => sum + qty * rate, 0);
  const diff = allIn - total;
  return (
    <Exhibit
      kicker="Exhibit D · Illustrative"
      title="A la carte versus all-inclusive, one order"
      cap="Illustrative rates: $2.75 per order, $0.50 per additional unit, $0.60 per mailer, $0.15 per insert. Not any operator’s rates."
    >
      <div className="exhibit-split">
        <div className="exhibit-stack">
          <Slider label="Units in the order" show={`${units}`} value={units} min={1} max={8} step={1} set={setUnits} />
          <Slider
            label="All-inclusive rate per order"
            show={money(allIn)}
            value={allIn}
            min={2.5}
            max={6}
            step={0.25}
            set={setAllIn}
          />
          <Check label="Marketing insert" on={insert} set={setInsert} />
        </div>
        <Table
          head={["Line", "Qty", "Rate", "Amount"]}
          rows={[
            ...lines.map(([line, qty, rate]) => [line, qty, money(rate), money(qty * rate)]),
            ["Fulfillment before postage", "", "", money(total)],
          ]}
        />
      </div>
      <p className="exhibit-verdict">
        At <strong>{money(allIn)}</strong> all-inclusive,{" "}
        {Math.abs(diff) < 0.005 ? (
          "this order breaks exactly even with a la carte."
        ) : (
          <>
            the operator collects{" "}
            <strong>
              {money(Math.abs(diff))} {diff < 0 ? "less" : "more"}
            </strong>{" "}
            for this order than a la carte.
          </>
        )}
      </p>
    </Exhibit>
  );
}

function Snapshot() {
  const counts: [string, number][] = [
    ["Counted on the 1st", 1000],
    ["Counted on the 15th", 1500],
    ["Counted on the last day", 875],
  ];
  return (
    <Exhibit
      kicker="Exhibit E · Published example"
      title="One month, one rate, three snapshot dates"
      cap="$25 per pallet per month. 40 pallets on the 1st, 20 received on the 15th, 25 shipped on the 25th."
    >
      <svg
        className="chart"
        viewBox="0 0 640 170"
        role="img"
        aria-label="Storage bill of 1,000 dollars counted on the 1st, 1,500 dollars counted on the 15th, and 875 dollars counted on the last day"
      >
        {counts.map(([label, bill], i) => {
          const y = 10 + i * 52;
          const w = (bill / 1600) * 410;
          return (
            <g key={label}>
              <text className="lbl" x={170} y={y + 24} textAnchor="end">
                {label}
              </text>
              <rect data-c={i === 1 ? "bar" : "soft"} x={180} y={y} width={w} height={40} />
              <text className="lbl" x={188 + w} y={y + 24}>
                ${commas(`${bill}`)}
              </text>
            </g>
          );
        })}
      </svg>
    </Exhibit>
  );
}

/* ---- Every Minute on the Floor ------------------------------------------------------------- */

/** Labor for a second of standard: $26 a paid hour, 85% of paid hours on measured work. */
const labor = (seconds: number) => (seconds / 3600 / 0.85) * 26;
/** The beauty order's task seconds for a profile; the quote assumed 2 lines and 3 units. */
const beautyTask = (lines: number, units: number) => 6 + 15 * lines + 6 * units + 30 + 3 * units;
const QUOTED = beautyTask(2, 3) * 1.15;
/** Month three: 2.6 lines and 4.4 units, an 18% allowance, and a 3-second sachet nobody priced. */
const MONTH_THREE = (beautyTask(2.6, 4.4) + 3) * 1.18;

function BeautyOrder() {
  const [lines, setLines] = useState(2);
  const [units, setUnits] = useState(3);
  const [allowance, setAllowance] = useState(15);
  const steps: [string, number, number][] = [
    ["Pick · scan order, set tote", 6, 1],
    ["Pick · travel to location", 12, lines],
    ["Pick · scan location", 3, lines],
    ["Pick · pick and scan unit", 4, units],
    ["Pick · place in tote", 2, units],
    ["Pack · scan tote, build mailer", 10, 1],
    ["Pack · place units", 3, units],
    ["Pack · slip and insert", 3, 1],
    ["Pack · seal, label, set out", 17, 1],
  ];
  const task = steps.reduce((sum, [, sec, per]) => sum + sec * per, 0);
  const standard = task * (1 + allowance / 100);
  const change = standard / QUOTED - 1;
  return (
    <Exhibit
      kicker="Exhibit A · Illustrative"
      title="The minutes inside one beauty order"
      cap="Pick: scan order 6 s per order, travel 12 s and scan location 3 s per line, pick and scan 4 s and place 2 s per unit. Pack: 30 s per order plus 3 s per unit. Labor at $26 an hour fully loaded, 85% of paid hours on measured work. Not any operator’s standards."
    >
      <div className="exhibit-split">
        <div className="exhibit-stack">
          <Slider label="Lines per order" show={trim(lines)} value={lines} min={1} max={5} step={0.2} set={setLines} />
          <Slider label="Units per order" show={trim(units)} value={units} min={1} max={8} step={0.2} set={setUnits} />
          <Slider
            label="Allowance"
            show={`${allowance}%`}
            value={allowance}
            min={10}
            max={25}
            step={1}
            set={setAllowance}
          />
          <Readout
            stats={[
              ["Seconds per order", standard.toFixed(0)],
              ["Orders per productive hour", (3600 / standard).toFixed(1)],
              ["Labor per order", money(labor(standard))],
            ]}
          />
          <p className="exhibit-verdict">
            {Math.abs(change) < 0.005 ? (
              <>
                This is the order the quote described: about <strong>{money(labor(standard))}</strong> of labor.
              </>
            ) : (
              <>
                Same rate card,{" "}
                <strong>
                  {Math.round(Math.abs(change) * 100)}% {change > 0 ? "more" : "less"} labor
                </strong>{" "}
                per order than the quote assumed.
              </>
            )}
          </p>
        </div>
        <Table
          head={["Step", "Sec", "Per order"]}
          rows={[
            ...steps.map(([step, sec, per]) => [step, sec, trim(sec * per)]),
            [`Allowance, ${allowance}%`, "", (standard - task).toFixed(1)],
            ["Standard per order", "", standard.toFixed(1)],
          ]}
        />
      </div>
    </Exhibit>
  );
}

function CandyOrder() {
  const [frozen, setFrozen] = useState(false);
  const allowance = frozen ? 0.3 : 0.18;
  const perCase = (978 * (1 + allowance)) / 40;
  return (
    <Exhibit
      kicker="Exhibit B · Illustrative"
      title="One candy order, forty cases, one pallet"
      cap="Frozen version adds an illustrative allowance for warm-up breaks, gloves and slower handling. Labor at $26 an hour fully loaded, 85% of paid hours on measured work. Not any operator’s standards."
    >
      <Table
        head={["Step", "Sec", "Per", "Per order"]}
        rows={[
          ["Get order, pallet jack, empty pallet", 120, "order", 120],
          ["Travel to location", 25, "line", 200],
          ["Scan location, check best-before date", 6, "line", 48],
          ["Pick and stack case", 10, "case", 400],
          ["Wrap pallet, apply retail label, stage", 210, "order", 210],
          ["Task time, before allowance", "", "", 978],
        ]}
      />
      <Check label="If this were frozen candy, picked from a freezer" on={frozen} set={setFrozen} />
      <Readout
        stats={[
          ["Allowance", `${Math.round(allowance * 100)}%`],
          ["Seconds per case", perCase.toFixed(1)],
          ["Cases per productive hour", Math.round(3600 / perCase)],
        ]}
      />
      <p className="exhibit-verdict">
        {frozen ? (
          <>
            Same steps, colder room: about <strong>{money(labor(perCase), 3)}</strong> of labor per case, against{" "}
            <strong>{money(labor((978 * 1.18) / 40), 3)}</strong> ambient. The allowance alone moves the rate.
          </>
        ) : (
          <>
            About <strong>{money(labor(perCase), 3)}</strong> of labor per case. The unit of work is the case, not the
            order.
          </>
        )}
      </p>
    </Exhibit>
  );
}

type Who = "Beauty" | "Candy" | "Shared" | "Filler";
const whoName: Record<Who, string> = {
  Beauty: "Beauty brand",
  Candy: "Candy brand",
  Shared: "Shared indirect",
  Filler: "Unexplained",
};
const morning: [minutes: number, who: Who, task: string][] = [
  [12, "Shared", "Start-up meeting"],
  [7, "Beauty", "Build cart, 6 totes"],
  [22, "Beauty", "Pick 6 orders"],
  [4, "Beauty", "Drop totes at pack"],
  [8, "Filler", "No scan recorded"],
  [4, "Candy", "Pallet jack and pallet"],
  [19, "Candy", "Pick 40 cases"],
  [5, "Candy", "Wrap, label, stage"],
  [9, "Shared", "Clean spill"],
  [6, "Beauty", "Build cart, 8 totes"],
  [28, "Beauty", "Pick 8 orders"],
  [4, "Beauty", "Drop totes at pack"],
  [7, "Candy", "Replenish pick face"],
  [15, "Shared", "Break"],
];
const morningStarts = morning.map((_, i) => morning.slice(0, i).reduce((sum, [m]) => sum + m, 0));
const morningTotals = (["Beauty", "Candy", "Shared", "Filler"] as Who[]).map(
  (who) => [who, morning.reduce((sum, [m, w]) => sum + (w === who ? m : 0), 0)] as const,
);

function Morning() {
  const [byClient, setByClient] = useState(false);
  const x = (minute: number) => 10 + (minute / 150) * 580;
  return (
    <Exhibit
      kicker="Exhibit C · Illustrative"
      title="One picker’s morning, two ways"
      cap="07:00 to 09:30, 150 paid minutes, 14 beauty orders and 1 candy order. Illustrative, not any operator’s data."
    >
      <Views byClient={byClient} set={setByClient} />
      <svg
        className="chart"
        viewBox="0 0 600 120"
        role="img"
        aria-label="Timeline of a picker’s morning from 07:00 to 09:30"
      >
        {morning.map(([minutes, who, task], i) => (
          <rect
            key={i}
            data-c={byClient ? who : "paid"}
            x={x(morningStarts[i]) + 0.5}
            y={20}
            width={Math.max(x(minutes) - 10 - 1, 1)}
            height={56}
            rx={3}
          >
            <title>{`${task} · ${minutes} min · ${whoName[who]}`}</title>
          </rect>
        ))}
        {[0, 30, 60, 90, 120, 150].map((m) => (
          <g key={m}>
            <line className="axis" x1={x(m)} x2={x(m)} y1={78} y2={84} />
            <text x={x(m)} y={98} textAnchor={m === 0 ? "start" : m === 150 ? "end" : "middle"}>
              {`0${7 + Math.floor(m / 60)}:${`0${m % 60}`.slice(-2)}`}
            </text>
          </g>
        ))}
      </svg>
      {byClient ? (
        <>
          <Legend items={morningTotals.map(([who]): [string, string] => [who, whoName[who]])} />
          <Readout
            stats={morningTotals.map(([who, minutes]): Stat => [
              whoName[who],
              `${minutes} min`,
              who === "Filler" ? "bad" : undefined,
            ])}
          />
          <p className="exhibit-verdict">
            Setup goes to the next client, wrap-up to the last one. Now there is{" "}
            <strong>something to compare with each quote</strong>, and eight minutes to go and ask about.
          </p>
        </>
      ) : (
        <>
          <Legend items={[["paid", "Paid labor"]]} />
          <Readout
            stats={[
              ["Paid minutes", "150"],
              ["Orders shipped", "15"],
              ["Minutes per order", "10.0"],
              ["Unexplained", "?"],
            ]}
          />
          <p className="exhibit-verdict">
            One number for two very different kinds of work. <strong>Ten minutes an order</strong> is true and tells you
            nothing: one of those orders was forty cases.
          </p>
        </>
      )}
    </Exhibit>
  );
}

function Gap() {
  const task = beautyTask(2.6, 4.4);
  const steps: [label: string, from: number, to: number, total: boolean][] = [
    ["Quoted", 0, QUOTED, true],
    ["Mix", QUOTED, task * 1.15, false],
    ["Allowance", task * 1.15, task * 1.18, false],
    ["Unbilled sachet", task * 1.18, MONTH_THREE, false],
    ["Actual", 0, MONTH_THREE, true],
  ];
  const [L, B] = [48, 210];
  const bw = (590 - L) / steps.length;
  const y = (v: number) => B - (v / 150) * (B - 18);
  return (
    <Exhibit
      kicker="Exhibit D · Illustrative"
      title="The beauty brand: from 107 seconds an order to 139"
      cap="Mix: orders moved from 2 lines and 3 units to 2.6 lines and 4.4 units. Allowance: measured at 18% against 15% quoted. Unbilled: a sample sachet added at pack, 3 seconds an order. Not any operator’s data."
    >
      <svg
        className="chart"
        viewBox="0 0 600 260"
        role="img"
        aria-label="Waterfall from quoted to actual seconds per order: mix adds 24.8, allowance adds 3.4, unbilled sachet adds 3.5"
      >
        <Grid ticks={[0, 50, 100, 150]} y={y} from={L} to={590} label={(v) => `${v}s`} />
        {steps.map(([label, from, to, total], i) => {
          const x = L + i * bw + 14;
          const top = y(Math.max(from, to));
          return (
            <g key={label}>
              <rect
                data-c={total ? "bar" : "up"}
                x={x}
                y={top}
                width={bw - 28}
                height={Math.max(y(Math.min(from, to)) - top, 2)}
                rx={3}
              />
              <text className="lbl" x={x + (bw - 28) / 2} y={top - 7} textAnchor="middle">
                {total ? `${Math.round(to)} s` : `+${(to - from).toFixed(1)}`}
              </text>
              <text x={x + (bw - 28) / 2} y={B + 18} textAnchor="middle">
                {label}
              </text>
              {i < steps.length - 1 && <line className="stepline" x1={x + bw - 28} x2={x + bw} y1={y(to)} y2={y(to)} />}
            </g>
          );
        })}
        <line className="axis" x1={L} x2={590} y1={B} y2={B} />
        <text x={L} y={B + 42}>
          Seconds of pick and pack labor per order
        </text>
      </svg>
      <Readout
        stats={[
          ["Quoted labor per order", "$0.91"],
          ["Actual labor per order", "$1.18", "bad"],
          ["Of the gap, caused by mix", "78%"],
        ]}
      />
    </Exhibit>
  );
}

function MonthThree() {
  const [byClient, setByClient] = useState(false);
  const [beautyQuoted, beautyActual] = [labor(QUOTED), labor(MONTH_THREE)];
  const [candyQuoted, candyActual] = [labor((978 * 1.18) / 40), labor(26.5)];
  const budget = 12000 * beautyQuoted + 30000 * candyQuoted;
  const actual = 11400 * beautyActual + 21000 * candyActual;
  return (
    <Exhibit
      kicker="Exhibit E · Illustrative"
      title="Month three, two ways"
      cap="Labor at $26 an hour fully loaded, 85% of paid hours on measured work, each client’s share of indirect time included. Not any operator’s data."
    >
      <Views byClient={byClient} set={setByClient} />
      {byClient ? (
        <>
          <Table
            total={false}
            head={["Client", "Volume quoted", "Actual", "Labor quoted", "Actual"]}
            rows={[
              [
                <>
                  Beauty
                  <br />
                  <small>per order</small>
                </>,
                "12,000",
                "11,400",
                money(beautyQuoted),
                money(beautyActual),
              ],
              [
                <>
                  Candy
                  <br />
                  <small>per case</small>
                </>,
                "30,000",
                "21,000",
                money(candyQuoted, 3),
                money(candyActual, 3),
              ],
            ]}
          />
          <p className="exhibit-verdict">
            The beauty brand costs{" "}
            <strong>{Math.round((beautyActual / beautyQuoted - 1) * 100)}% more labor per order</strong>, about{" "}
            {commas(money(11400 * (beautyActual - beautyQuoted), 0))} a month. The candy brand ships{" "}
            <strong>30% fewer cases</strong> than it described. Two different problems, cancelling out on the payroll
            report.
          </p>
        </>
      ) : (
        <>
          <Table
            total={false}
            head={["Building", "Budget", "Actual", "Variance"]}
            rows={[
              [
                "Handling labor, both clients",
                commas(money(budget, 0)),
                commas(money(actual, 0)),
                `${((actual / budget - 1) * 100).toFixed(1)}%`,
              ],
            ]}
          />
          <p className="exhibit-verdict">
            Payroll landed <strong>within one percent of budget</strong>. On this report, month three looks like a good
            month.
          </p>
        </>
      )}
    </Exhibit>
  );
}

const exhibits = {
  "invoice-a": Utilization,
  "invoice-b": Steps,
  "invoice-c": PickCost,
  "invoice-d": OneOrder,
  "invoice-e": Snapshot,
  "floor-a": BeautyOrder,
  "floor-b": CandyOrder,
  "floor-c": Morning,
  "floor-d": Gap,
  "floor-e": MonthThree,
};

export type ExhibitId = keyof typeof exhibits;

/** One exhibit, by its id in content/papers.ts. */
export function PaperExhibit({ id }: { id: ExhibitId }) {
  const Live = exhibits[id];
  return <Live />;
}

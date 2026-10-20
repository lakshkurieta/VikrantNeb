"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState, type CSSProperties } from "react";
import { connect, contact, footer, nav } from "@/content/site";
import { delay } from "@/lib/theme";
import { pad } from "@/lib/format";
import { onConnect } from "@/lib/connect";
import { useActiveSection } from "@/lib/hooks/useActiveSection";
import { lockScroll, unlockScroll } from "@/lib/scroll";
import { Signature } from "@/components/signature/Signature";
import { signatureTimeline } from "@/components/signature/timeline";
import { ConnectButton } from "@/components/connect/ConnectButton";
import { ArrowRight } from "@/components/ui/icons";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { SectionLink } from "./SectionLink";

const SECTIONS = nav.map((item) => item.section);

/**
 * Hands the menu panel the Menu button's place and size, so it unfolds out of the button. Measured
 * against <header>, which rests at the top of the viewport, so a bar still sliding back in can't
 * throw the panel off.
 */
function anchorMenu(button: HTMLElement, panel: HTMLElement) {
  const bar = button.closest("header")!.getBoundingClientRect();
  const { top, right } = button.getBoundingClientRect();
  panel.style.setProperty("--menu-top", `${top - bar.top}px`);
  panel.style.setProperty("--menu-right", `${bar.right - right}px`);
  panel.style.setProperty("--menu-w", `${button.offsetWidth}px`);
  panel.style.setProperty("--menu-h", `${button.offsetHeight}px`);
}

/**
 * Navigation: the signature, then the theme switch, Connect and a Menu button. The menu is a
 * signal-blue sheet across the top of the screen that unfolds out of the Menu button itself, its
 * Close landing where Menu was and its links rising in one by one. Each link opens its page; on the
 * home page the one for the section you're in is marked, elsewhere the one the page belongs to.
 *
 * The bar condenses once the page moves, slides away while scrolling down and returns on the way
 * up. Scroll state lives in data attributes on <header>, so scrolling never re-renders.
 * Styles: `.nav-*` in globals.css.
 */
export function Navbar() {
  const headerRef = useRef<HTMLElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [signKey, setSignKey] = useState(0);
  const signing = useRef(false);
  const pathname = usePathname();
  const onHome = useActiveSection(SECTIONS);
  // Off the home page, the item whose page this is (an article belongs to Writing, and so on).
  const away = nav.find((item) => pathname.startsWith(item.href))?.section ?? null;
  const active = pathname === "/" ? onHome : away;

  // Header: condensed once scrolled; hidden while scrolling down, back on the way up.
  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;
    let lastY = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      header.dataset.scrolled = String(y > 24);
      if (Math.abs(y - lastY) < 8) return;
      header.dataset.hidden = String(y > lastY && y > window.innerHeight * 0.4);
      lastY = y;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // The panel's folded shape is the button's, from the start (it is measured again on each open).
  useEffect(() => {
    if (menuButtonRef.current && panelRef.current) anchorMenu(menuButtonRef.current, panelRef.current);
  }, []);

  // While the menu is open: the page holds still, Escape closes it, focus moves in and back out.
  useEffect(() => {
    if (!menuOpen) return;
    const button = menuButtonRef.current;
    lockScroll();
    panelRef.current?.querySelector<HTMLElement>("a")?.focus({ preventScroll: true });
    const onKey = (event: KeyboardEvent) => event.key === "Escape" && setMenuOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      unlockScroll();
      window.removeEventListener("keydown", onKey);
      button?.focus({ preventScroll: true });
    };
  }, [menuOpen]);

  // Connect, from the menu or anywhere: the form takes over, so the menu steps aside.
  useEffect(() => onConnect(() => setMenuOpen(false)), []);

  const closeMenu = () => setMenuOpen(false);

  // Re-sign on hover, at most once per signature.
  const resign = () => {
    if (signing.current) return;
    signing.current = true;
    setSignKey((key) => key + 1);
    window.setTimeout(() => (signing.current = false), (signatureTimeline.total + 0.4) * 1000);
  };

  return (
    <>
      <header ref={headerRef} data-menu-open={menuOpen} className="nav-header">
        <nav aria-label="Primary" className="nav-bar">
          <SectionLink
            href="#top"
            aria-label={pathname === "/" ? "Vikrant Neb, back to top" : "Vikrant Neb, home"}
            className="nav-brand"
            onPointerEnter={resign}
            // The loader's signature flies here; until it lands, this one stays hidden (globals.css).
            data-signature-target
          >
            <Signature key={signKey} id={`nav-signature-${signKey}`} draw={signKey > 0} />
          </SectionLink>

          <div className="nav-actions intro-fade" style={delay(60)}>
            <ThemeToggle />
            <ConnectButton className="btn btn-ink btn-sm nav-connect">{connect.label}</ConnectButton>
            <button
              ref={menuButtonRef}
              type="button"
              className="btn btn-sm nav-menu-button"
              aria-expanded={menuOpen}
              aria-controls="site-menu"
              onClick={(event) => {
                if (panelRef.current) anchorMenu(event.currentTarget, panelRef.current);
                setMenuOpen((open) => !open);
              }}
            >
              Menu
              <span className="nav-menu-button__lines" aria-hidden />
            </button>
          </div>
        </nav>
      </header>

      {/* Outside <header>: its slide transform would otherwise trap this fixed panel. */}
      <div className="nav-scrim" data-open={menuOpen || undefined} onClick={closeMenu} aria-hidden />
      <div
        ref={panelRef}
        id="site-menu"
        className="nav-panel"
        data-open={menuOpen || undefined}
        inert={!menuOpen}
        role="dialog"
        aria-label="Menu"
      >
        <div className="nav-panel__top">
          <p className="text-label">Menu</p>
          <button type="button" className="btn btn-ink btn-sm" onClick={closeMenu}>
            Close
          </button>
        </div>

        <ul className="nav-panel__links">
          {nav.map((item, i) => (
            <li key={item.href} style={{ "--i": i } as CSSProperties}>
              <Link
                href={item.href}
                className="nav-panel__link"
                aria-current={active === item.section ? "location" : undefined}
                onClick={closeMenu}
              >
                <span className="nav-panel__index">{pad(i + 1)}</span>
                {item.label}
                <ArrowRight className="nav-panel__arrow" />
              </Link>
            </li>
          ))}
        </ul>

        <div className="nav-panel__foot">
          <ul>
            {footer.socials.map((social) => (
              <li key={social.href}>
                <a href={social.href} target="_blank" rel="noreferrer">
                  {social.label}
                </a>
              </li>
            ))}
          </ul>
          <ul>
            <li>
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
            </li>
            <li>
              <ConnectButton className="nav-panel__connect">{connect.label} →</ConnectButton>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { flushSync } from "react-dom";
import { contact, footer } from "@/content/site";
import { onConnect } from "@/lib/connect";
import { centreOf, circleReveal } from "@/lib/reveal";
import { lockScroll, unlockScroll } from "@/lib/scroll";
import { ArrowRight, LinkedInMark, YouTubeMark } from "@/components/ui/icons";
import "./connect.css";

const ICONS = { youtube: YouTubeMark, linkedin: LinkedInMark } as const;

/**
 * The query form behind every Connect button. It opens and closes with the theme switch's circle
 * reveal (lib/reveal.ts), grown from the button that was pressed.
 *
 * Sending posts the form to Formspree (`contact.form`), which delivers it to Vikrant's inbox with the
 * visitor's email as the reply-to. While it sends the button says so; if it fails the form stays as
 * typed, with his address beside the error. `_gotcha` is Formspree's honeypot: hidden from people,
 * filled in only by bots.
 */
export function ConnectForm() {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "failed">("idle");
  const dialogRef = useRef<HTMLDivElement>(null);
  const returnTo = useRef<Element | null>(null);

  const close = (origin?: { x: number; y: number }) => circleReveal(() => flushSync(() => setOpen(false)), origin);

  useEffect(
    () =>
      onConnect((origin) => {
        returnTo.current = document.activeElement;
        setStatus("idle");
        circleReveal(() => flushSync(() => setOpen(true)), origin);
      }),
    [],
  );

  useEffect(() => {
    if (!open) return;
    lockScroll();
    dialogRef.current?.querySelector<HTMLInputElement>("input")?.focus({ preventScroll: true });
    const onKey = (event: KeyboardEvent) =>
      event.key === "Escape" && circleReveal(() => flushSync(() => setOpen(false)));
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      unlockScroll();
      (returnTo.current as HTMLElement | null)?.focus?.({ preventScroll: true });
    };
  }, [open]);

  const send = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    data.set("_subject", `${data.get("topic") || "Hello"} · ${data.get("name")}`);
    setStatus("sending");
    try {
      const response = await fetch(contact.form, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      setStatus(response.ok ? "sent" : "failed");
    } catch {
      setStatus("failed");
    }
  };

  if (!open) return null;
  const { title } = contact;

  return (
    <div
      ref={dialogRef}
      className="connect"
      role="dialog"
      aria-modal
      aria-labelledby="connect-title"
      data-lenis-prevent
    >
      <button
        type="button"
        className="btn btn-sm connect__close"
        onClick={(event) => close(centreOf(event.currentTarget))}
      >
        Close
        <span aria-hidden>✕</span>
      </button>

      <div className="connect__inner">
        <div className="connect__intro">
          <p className="text-label text-signal">{contact.eyebrow}</p>
          <h2 id="connect-title" className="connect__title">
            <span>{title.top}</span>
            <span>
              <em>{title.joiner}</em> {title.bottom}
            </span>
          </h2>
          <p className="connect__lead">{contact.intro}</p>
          <a className="connect__email" href={`mailto:${contact.email}`}>
            {contact.email}
          </a>
          <ul className="connect__socials">
            {footer.socials.map((social) => {
              const Icon = ICONS[social.icon];
              return (
                <li key={social.href}>
                  <a href={social.href} target="_blank" rel="noreferrer" aria-label={social.label}>
                    <Icon />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        {status === "sent" ? (
          <div className="connect__sent" role="status">
            <p className="connect__sent-title">{contact.sent.title}</p>
            <p>
              {contact.sent.body} <a href={`mailto:${contact.email}`}>{contact.email}</a>.
            </p>
            <button type="button" className="btn btn-ink" onClick={(event) => close(centreOf(event.currentTarget))}>
              Back to the site
              <ArrowRight />
            </button>
          </div>
        ) : (
          <form className="connect__form" onSubmit={send}>
            <label className="connect__field">
              <span>Name</span>
              <input name="name" autoComplete="name" required />
            </label>
            <label className="connect__field">
              <span>Email</span>
              <input name="email" type="email" autoComplete="email" required />
            </label>
            <label className="connect__field connect__field--wide">
              <span>
                Company <i>(optional)</i>
              </span>
              <input name="company" autoComplete="organization" />
            </label>
            <fieldset className="connect__field connect__field--wide">
              <legend>What’s it about?</legend>
              <div className="connect__topics">
                {contact.topics.map((topic, i) => (
                  <label key={topic} className="connect__topic">
                    <input type="radio" name="topic" value={topic} defaultChecked={i === 0} />
                    <span>{topic}</span>
                  </label>
                ))}
              </div>
            </fieldset>
            <label className="connect__field connect__field--wide">
              <span>Message</span>
              <textarea name="message" rows={5} required />
            </label>
            <input className="connect__trap" type="text" name="_gotcha" tabIndex={-1} autoComplete="off" aria-hidden />
            {status === "failed" && (
              <p className="connect__failed" role="alert">
                {contact.failed} <a href={`mailto:${contact.email}`}>{contact.email}</a>.
              </p>
            )}
            <button type="submit" className="btn btn-solid connect__send" disabled={status === "sending"}>
              {status === "sending" ? contact.sending : contact.send}
              <ArrowRight />
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

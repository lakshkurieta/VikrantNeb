"use client";

import { useEffect, useRef, useState } from "react";
import { Signature } from "@/components/signature/Signature";

/**
 * Vikrant's signature beside the footer's sign-off line, written out stroke by stroke the first time the
 * footer scrolls into view. Until then it's hidden (shown plainly without JavaScript).
 */
export function FooterSignature() {
  const ref = useRef<HTMLDivElement>(null);
  const [signed, setSigned] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setSigned(true);
        observer.disconnect();
      },
      { rootMargin: "0px 0px -15% 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="footer-sign" data-signed={signed || undefined}>
      <Signature key={String(signed)} id={`footer-signature-${signed ? "drawn" : "idle"}`} draw={signed} />
    </div>
  );
}

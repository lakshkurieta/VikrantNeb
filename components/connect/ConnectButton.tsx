"use client";

import type { ReactNode } from "react";
import { openConnect } from "@/lib/connect";
import { centreOf } from "@/lib/reveal";

/** Any "Connect" or "Get in touch": opens the query form, revealed from this button. */
export function ConnectButton({ className, children }: { className?: string; children: ReactNode }) {
  return (
    <button type="button" className={className} onClick={(event) => openConnect(centreOf(event.currentTarget))}>
      {children}
    </button>
  );
}

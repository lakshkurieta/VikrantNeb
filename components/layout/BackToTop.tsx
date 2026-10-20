"use client";

import { scrollToTop } from "@/lib/scroll";
import { ArrowUp } from "@/components/ui/icons";

export function BackToTop() {
  return (
    <button type="button" className="btn btn-sm" onClick={scrollToTop}>
      Back to top
      <ArrowUp />
    </button>
  );
}

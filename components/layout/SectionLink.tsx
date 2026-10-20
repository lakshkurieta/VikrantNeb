"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ComponentProps } from "react";

/**
 * A link to one of the home page's sections (`#id`). On the home page it's a plain anchor, which
 * Lenis turns into a smooth scroll; elsewhere (an article, a white paper) it navigates back to the
 * home page at that section, client-side, so the loader doesn't replay.
 */
export function SectionLink({ href, ...props }: { href: string } & Omit<ComponentProps<"a">, "href">) {
  const home = usePathname() === "/";
  return home ? <a href={href} {...props} /> : <Link href={`/${href}`} {...props} />;
}

import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

export function ArrowUpRight(props: IconProps) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden width={14} height={14} {...props}>
      <path d="M4.5 11.5 11.5 4.5M5.5 4.5h6v6" stroke="currentColor" strokeWidth={1.5} strokeLinecap="square" />
    </svg>
  );
}

export function Play(props: IconProps) {
  return (
    <svg viewBox="0 0 16 16" aria-hidden width={12} height={12} {...props}>
      <path d="M5 3.2v9.6L12.6 8 5 3.2Z" fill="currentColor" />
    </svg>
  );
}

export function Stop(props: IconProps) {
  return (
    <svg viewBox="0 0 16 16" aria-hidden width={12} height={12} {...props}>
      <rect x="4" y="4" width="8" height="8" rx="1" fill="currentColor" />
    </svg>
  );
}

/** YouTube's play-button mark: a rounded screen with the triangle cut out, in `currentColor`. */
export function YouTubeMark(props: IconProps) {
  return (
    <svg viewBox="0 0 28 20" aria-hidden width={28} height={20} {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M27.4 3.1A3.5 3.5 0 0 0 24.9.6C22.7 0 14 0 14 0S5.3 0 3.1.6A3.5 3.5 0 0 0 .6 3.1C0 5.3 0 10 0 10s0 4.7.6 6.9a3.5 3.5 0 0 0 2.5 2.5C5.3 20 14 20 14 20s8.7 0 10.9-.6a3.5 3.5 0 0 0 2.5-2.5C28 14.7 28 10 28 10s0-4.7-.6-6.9ZM11.2 14.3V5.7l7.3 4.3-7.3 4.3Z"
      />
    </svg>
  );
}

/** LinkedIn's "in" mark: a rounded square with the letters cut out, in `currentColor`. */
export function LinkedInMark(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden width={24} height={24} {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M6 2h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4ZM7.6 5.95a1.45 1.45 0 1 0 0 2.9 1.45 1.45 0 0 0 0-2.9ZM6.35 9.6h2.5v8h-2.5v-8ZM10.6 9.6h2.35v1.1c.45-.75 1.4-1.3 2.65-1.3 2.1 0 3.05 1.3 3.05 3.6v4.6h-2.45v-4.1c0-1.15-.4-1.85-1.4-1.85-1.05 0-1.75.75-1.75 2v3.95H10.6V9.6Z"
      />
    </svg>
  );
}

/** An envelope, in `currentColor`. */
export function MailMark(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden width={22} height={22} {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth={1.8} />
      <path d="m4 7 8 6 8-6" stroke="currentColor" strokeWidth={1.8} strokeLinejoin="round" />
    </svg>
  );
}

export function ArrowUp(props: IconProps) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden width={14} height={14} {...props}>
      <path d="M8 13V3M3.5 7.5 8 3l4.5 4.5" stroke="currentColor" strokeWidth={1.5} strokeLinecap="square" />
    </svg>
  );
}

export function ArrowRight(props: IconProps) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden width={14} height={14} {...props}>
      <path d="M2 8h11.5M9 3.5 13.5 8 9 12.5" stroke="currentColor" strokeWidth={1.5} strokeLinecap="square" />
    </svg>
  );
}

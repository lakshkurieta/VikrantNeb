const EVENT = "vn:connect";

/** Opens the Connect form (ConnectForm, in the root layout), revealed from `origin`. */
export const openConnect = (origin: { x: number; y: number }) =>
  window.dispatchEvent(new CustomEvent(EVENT, { detail: origin }));

export function onConnect(callback: (origin: { x: number; y: number }) => void) {
  const handler = (event: Event) => callback((event as CustomEvent<{ x: number; y: number }>).detail);
  window.addEventListener(EVENT, handler);
  return () => window.removeEventListener(EVENT, handler);
}

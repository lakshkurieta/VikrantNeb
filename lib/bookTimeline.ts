/**
 * The book's scroll timeline (BookScene's choreography), kept apart from the scene so the page can
 * read it without loading three.js.
 */

/** The turn's stretch of the timeline. */
const TURN_FROM = 0.04;
const TURN_SPAN = 0.42;

/**
 * Scroll down the pinned section (0 → 1) onto BookScene's timeline. The full turn gets twice its
 * share of scroll, so it turns at the pace a half-turn used to (book-section.css makes the section
 * that much longer), and everything else keeps its timing around it. `turn` is the turn's own
 * progress, 0 → 1.
 */
export function bookTimeline(scroll: number) {
  const x = scroll * (1 + TURN_SPAN);
  if (x <= TURN_FROM) return { progress: x, turn: 0 };
  const turn = (x - TURN_FROM) / (2 * TURN_SPAN);
  if (turn <= 1) return { progress: TURN_FROM + TURN_SPAN * turn, turn };
  return { progress: x - TURN_SPAN, turn: 1 };
}

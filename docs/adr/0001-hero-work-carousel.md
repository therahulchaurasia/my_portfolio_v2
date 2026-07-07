# ADR 0001 — Hero work carousel

Status: accepted · 2026-07-07

## Context
The hero needs a "card wall" showcasing past work (dummy for now), modelled on
the Drapz hero. The alternative previously considered — tilted/scattered cards —
was rejected as too playful; the site's target vibe is **professional**.

## Decision
A two-column **infinite vertical marquee** of image-only cards.

- **Motion:** continuous auto-scroll, implemented in pure CSS keyframes
  (`marquee-up` / `marquee-down`). No JS — the component is a server component.
  Each column's track holds two copies of its cards; translating the track by
  `-50%` swaps copy 1 for copy 2 with no visible seam, then loops.
- **Direction:** left column drifts up, right column drifts down (opposite) for a
  dynamic, premium feel.
- **Edges:** top and bottom dissolved with the existing `ProgressiveBlur` so cards
  fade into the background instead of hard-cutting at the loop boundary.
- **Interaction:** marquee pauses on hover (`group-hover` →
  `animation-play-state: paused`); each card reveals its label on hover.
- **Cards:** image-only. For now, CSS gradient placeholders + a hover label;
  real project images swap in later with no structural change.
- **Mobile:** the same two columns, wrapped lower (hero grid collapses to one
  column), shorter viewport, same blur masking. No separate mobile layout.

## Consequences
- Zero JS animation cost; respects `prefers-reduced-motion` (`motion-reduce`
  disables the marquee).
- Loop seamlessness depends on the two-copy trick — the card list must not change
  length at runtime, and each column must overflow its viewport.
- Duration is tunable per instance via the `--marquee-duration` CSS var
  (default 40s).
- Swapping placeholders for real assets is a data-only change in
  `work-carousel.tsx` (`columnA` / `columnB`).

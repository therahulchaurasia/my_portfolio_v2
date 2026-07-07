# Glossary

Shared vocabulary for the portfolio. Keep terms here so copy, components, and
discussion stay consistent.

- **Work carousel / card wall** — the hero's two-column vertical marquee of
  project cards. See [ADR 0001](adr/0001-hero-work-carousel.md).
- **Marquee** — a continuously scrolling track that loops seamlessly. Ours is
  vertical and CSS-only (`marquee-up` / `marquee-down` keyframes).
- **Track** — the inner scrolling element of one marquee column. Holds two copies
  of the column's cards so a `-50%` shift loops without a seam.
- **Column A / Column B** — the left (drifts up) and right (drifts down) marquee
  columns; also the two dummy-project data arrays in `work-carousel.tsx`.
- **Progressive blur** — the layered backdrop-blur + tint used to dissolve content
  into the background at an edge (`ProgressiveBlur`). Used top & bottom of the
  card wall to hide the loop boundary.
- **Card (project card)** — one image-only tile; gradient placeholder for now,
  reveals its project label on hover.
- **Surface** — a background context that a section sits on: **light**
  (`#f5f5f5`, default) or **dark** (`#121212`, e.g. footer). Text/line tokens flip
  by surface via CSS custom properties.
- **Section heading** — the reusable title + muted subtext block at the top of
  each content section (`SectionHeading`); excludes hero, nav, footer.

# Anatomy — design commentary mode

Global toggle lives in the navbar (`useAnatomy` from `anatomy-provider`,
mounted in `layout.tsx`). Hero is the reference implementation.

## Wiring a new section (4 steps)

1. **Section must be `relative` and render a real `<section>`** (the
   `Section` component does). The spotlight fade walks up to
   `closest("section")`.
2. **Tag targets**: put `data-anatomy-id="<section>-<thing>"` directly on the
   element a note talks about. Attribute only — never add wrapper elements,
   they disturb flex/grid layouts. Ids must be unique page-wide.
3. **Notes array** in the section file:

   ```tsx
   const ANATOMY: AnatomyNote[] = [
     { id: "work-hover", title: "...", body: "..." },
   ];
   ```

   First note auto-activates on open, so lead with the strongest one.

   If the copy describes desktop-only layout (columns that stack on mobile,
   hover effects), add `bodyMobile` with copy that's true on small screens;
   `switchAt: "md" | "lg"` (default `"lg"`) must match the breakpoint where
   that section's layout actually collapses.

4. **Drop in dot + panel** as the section's last children:
   ```tsx
   <AnatomyDot section="work" className="absolute ..." />
   <AnatomyPanel
     section="work"
     notes={ANATOMY}
     className="fixed inset-x-0 bottom-0 pb-4 md:absolute md:inset-x-auto md:top-1/2 md:right-0 md:bottom-auto md:pb-0 md:-translate-y-1/2"
   />
   ```
   The panel className owns ALL positioning including `fixed` (mobile bottom
   sheet) vs `md:absolute` (in-section placement). Copy the hero pattern and
   adjust the md+ part per section. Dot placement is per-section judgment;
   aim for a spot that overlaps no text.

## Copy rules (from Rahul)

- Layman-level, short, authoritative but 1-to-1 ("I did X so you get Y"),
  never addressing a crowd. No em dashes. Max ~3 sentences.

## Constraints / gotchas

- Works in server components (dot/panel are client leaves).
- No scrim, no z-index tricks: highlighting fades every non-target sibling
  (`.anatomy-faded`, 15% opacity) and rings the target (`.anatomy-ring`,
  2px outline, offset 8px). Targets inside `overflow-hidden` parents are fine
  for the fade, but the ring outline may clip at the clip edge — pick targets
  with breathing room or accept the clip.
- One `AnatomyDot` per section, one open section at a time (provider enforces).
- Anatomy UI elements must carry `data-anatomy-ui` (dot/panel already do) so
  outside-click close and the fade walk skip them.
- SSR ships zero anatomy DOM (provider flips on post-hydration); never change
  that — the feature must not cost Lighthouse points.

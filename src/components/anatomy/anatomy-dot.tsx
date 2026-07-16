"use client";

import usePrefersReducedMotion from "@/hooks/use-prefers-reduced-motion";
import { useAnatomy } from "./anatomy-provider";

/**
 * Section entry point for anatomy mode: a small hollow ring wrapped by a
 * fainter outer ring, with a soft shadow and slow ping. Deliberately subtle;
 * it should read as an annotation marker, not a CTA. Open state fills the
 * inner ring solid (the "pressed in" close affordance).
 *
 * The button is a larger invisible hit area (size-9) around the small visual
 * so tap targets stay comfortable. Placement comes from the caller via
 * className; the parent section must be `relative`.
 */
export default function AnatomyDot({
  section,
  className,
}: {
  section: string;
  className?: string;
}) {
  const { on, openSection, setOpenSection } = useAnatomy();
  // The looping ping is decorative; reduced-motion users get the static
  // rings only, which still read as a marker.
  const reducedMotion = usePrefersReducedMotion();
  if (!on) return null;
  const open = openSection === section;

  return (
    <button
      type="button"
      data-anatomy-ui=""
      aria-expanded={open}
      aria-label={open ? "Close design notes" : "Open design notes"}
      onClick={() => setOpenSection(open ? null : section)}
      className={`z-45 flex size-9 cursor-pointer items-center justify-center transition-transform duration-200 ease-out hover:scale-110 active:scale-95 ${className ?? ""}`}
    >
      {!open && !reducedMotion && (
        <span
          aria-hidden
          className="absolute size-6 animate-anatomy-ping rounded-full border border-primary/50"
        />
      )}
      <span className="absolute size-6 rounded-full border border-foreground/15" />
      <span
        className={`size-3.5 rounded-full border-2 border-primary shadow-[0_2px_8px_rgba(18,18,18,0.25)] transition-colors duration-200 ${
          open ? "bg-primary" : "bg-background"
        }`}
      />
    </button>
  );
}

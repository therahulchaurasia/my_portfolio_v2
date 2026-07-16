"use client";

import { useSyncExternalStore } from "react";

const QUERY = "(prefers-reduced-motion: reduce)";

function subscribe(callback: () => void) {
  const mq = window.matchMedia(QUERY);
  mq.addEventListener("change", callback);
  return () => mq.removeEventListener("change", callback);
}

/**
 * Live prefers-reduced-motion flag. Motion's own useReducedMotion reads the
 * media query once at mount and never updates, so a toggle mid-session (or
 * DevTools emulation) goes unseen; this one subscribes to changes. SSR
 * renders as false and corrects on hydration.
 */
export default function usePrefersReducedMotion() {
  return useSyncExternalStore(
    subscribe,
    () => window.matchMedia(QUERY).matches,
    () => false,
  );
}

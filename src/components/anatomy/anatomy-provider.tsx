"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

/**
 * Anatomy = design-commentary mode. One dot per section; clicking it opens
 * that section's decision cards, hovering a card rings the element it talks
 * about. Global on/off lives in the navbar and persists in localStorage so
 * "refresh and watch the load" experiments don't reset the mode.
 */
type AnatomyContextValue = {
  on: boolean;
  toggle: () => void;
  /** Section whose cards are open. One at a time. */
  openSection: string | null;
  setOpenSection: (section: string | null) => void;
  /** Note id whose target is currently ringed. */
  activeNote: string | null;
  setActiveNote: (id: string | null) => void;
};

const AnatomyContext = createContext<AnatomyContextValue | null>(null);

export function useAnatomy() {
  const ctx = useContext(AnatomyContext);
  if (!ctx) throw new Error("useAnatomy must be used inside AnatomyProvider");
  return ctx;
}

export default function AnatomyProvider({ children }: { children: ReactNode }) {
  // Starts off and flips on after hydration: SSR markup carries zero anatomy
  // chrome, so the feature can't hurt the LCP score it brags about.
  const [on, setOn] = useState(false);
  const [openSection, setOpenSectionState] = useState<string | null>(null);
  const [activeNote, setActiveNote] = useState<string | null>(null);

  // localStorage access throws when the browser blocks site data (Chrome's
  // "block all cookies") — swallow it so the whole tree doesn't unmount;
  // the mode still works, it just forgets across reloads.
  useEffect(() => {
    // One-time post-hydration flip by design: SSR must ship anatomy-off markup.
    try {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setOn(localStorage.getItem("anatomy") !== "off");
    } catch {
      setOn(true);
    }
  }, []);

  const toggle = () => {
    setOn((v) => {
      const next = !v;
      try {
        localStorage.setItem("anatomy", next ? "on" : "off");
      } catch {}
      return next;
    });
    setOpenSectionState(null);
    setActiveNote(null);
  };

  const setOpenSection = (section: string | null) => {
    setOpenSectionState(section);
    setActiveNote(null);
  };

  // Spotlight lives on the page elements themselves (found by
  // data-anatomy-id), not on wrappers: wrappers would disturb the flex/grid
  // layouts they sit in, attributes can't. The active element gets a ring;
  // walking from it up to the section, every sibling on the way fades, so a
  // nested target (headline inside the text column) dims its aunts and
  // uncles too. Anatomy's own UI opts out via data-anatomy-ui.
  useEffect(() => {
    if (!activeNote) return;
    const target = document.querySelector(`[data-anatomy-id="${activeNote}"]`);
    if (!(target instanceof HTMLElement)) return;
    const section = target.closest("section");
    const faded: HTMLElement[] = [];
    let el: HTMLElement = target;
    while (section && el !== section && el.parentElement) {
      for (const sibling of el.parentElement.children) {
        if (sibling === el || !(sibling instanceof HTMLElement)) continue;
        if (sibling.hasAttribute("data-anatomy-ui")) continue;
        sibling.classList.add("anatomy-fade", "anatomy-faded");
        faded.push(sibling);
      }
      el = el.parentElement;
    }
    target.classList.add("anatomy-ring");
    return () => {
      target.classList.remove("anatomy-ring");
      // .anatomy-fade (the transition) stays on so the un-fade eases back.
      faded.forEach((f) => f.classList.remove("anatomy-faded"));
    };
  }, [activeNote]);

  useEffect(() => {
    if (!openSection) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenSection(null);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [openSection]);

  return (
    <AnatomyContext.Provider
      value={{
        on,
        toggle,
        openSection,
        setOpenSection,
        activeNote,
        setActiveNote,
      }}
    >
      {children}
    </AnatomyContext.Provider>
  );
}

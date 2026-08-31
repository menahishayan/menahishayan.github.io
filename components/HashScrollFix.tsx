"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

// When the browser lands already scrolled to a #section — via a hash link,
// including a "back" link that also changes the route (e.g. a talk detail
// page's "← All talks" going to "/#speaking") — framer-motion's whileInView
// sections can get stuck at their hidden (opacity: 0) state. Their
// IntersectionObserver doesn't always get a chance to fire immediately after
// this kind of instant, already-in-view mount; a real scroll is what
// normally unsticks it. This nudges the scroll position programmatically so
// users don't have to do that manually.
function nudge() {
  const y = window.scrollY;
  // The site sets `scroll-behavior: smooth` globally, which turns scrollTo
  // into an animation that a second scrollTo shortly after can cancel
  // outright — netting no actual movement. Force instant jumps here so the
  // nudge reliably changes scrollTop.
  window.scrollTo({ top: y + 4, behavior: "instant" });
  setTimeout(() => window.scrollTo({ top: y, behavior: "instant" }), 32);
}

// Last-resort failsafe: if a section's motion elements are still sitting at
// opacity: 0 well after landing on its hash, force them visible directly.
// This guarantees content can never stay permanently blank even if the
// IntersectionObserver-based reveal never fires for some reason the nudges
// above don't cover.
function forceReveal(id: string) {
  const section = document.getElementById(id);
  if (!section) return;
  const all = section.querySelectorAll<HTMLElement>("*");
  for (const el of all) {
    if (parseFloat(getComputedStyle(el).opacity) < 0.5) {
      el.style.setProperty("opacity", "1", "important");
      el.style.setProperty("transform", "none", "important");
    }
  }
}

function scheduleNudges() {
  const hash = window.location.hash;
  if (!hash) return () => {};
  // Next.js's own scroll-into-view for the hash target, and the browser's
  // own scheduling of the observer callback, can land at an unpredictable
  // time after mount — nudge repeatedly to reliably land after both rather
  // than race a single guessed delay.
  const delays = [50, 150, 300, 600, 1000, 1600];
  const timers = delays.map((d) => setTimeout(nudge, d));
  const failsafe = setTimeout(() => forceReveal(hash.slice(1)), 2200);
  return () => {
    timers.forEach(clearTimeout);
    clearTimeout(failsafe);
  };
}

export function HashScrollFix() {
  const pathname = usePathname();

  // Covers navigations where the pathname changes and lands on a hash
  // (e.g. /speaking/foo -> /#speaking) — Next.js doesn't dispatch a native
  // `hashchange` event for these since the whole route changes at once.
  useEffect(() => scheduleNudges(), [pathname]);

  // Covers hash-only changes on the same pathname (e.g. clicking a nav link
  // while already on "/"), which do dispatch a native event.
  useEffect(() => {
    const handler = () => scheduleNudges();
    window.addEventListener("hashchange", handler);
    return () => window.removeEventListener("hashchange", handler);
  }, []);

  // Safety net: a backgrounded/throttled tab can delay the observer
  // callback well past our scheduled nudges. Re-nudge once the tab is
  // actually visible again.
  useEffect(() => {
    const retry = () => {
      if (document.visibilityState === "visible" && window.location.hash) {
        nudge();
      }
    };
    document.addEventListener("visibilitychange", retry);
    return () => document.removeEventListener("visibilitychange", retry);
  }, [pathname]);

  return null;
}

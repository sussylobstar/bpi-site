import Lenis from "lenis";

/* Module-level Lenis instance so route changes can reset scroll through it. */
let lenis: Lenis | null = null;
let rafId = 0;

const prefersReduced = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export function startLenis() {
  if (typeof window === "undefined" || lenis || prefersReduced()) return;

  lenis = new Lenis({
    duration: 1.1,
    easing: (t: number) => 1 - Math.pow(1 - t, 4), // easeOutQuart — no bounce
    smoothWheel: true,
    touchMultiplier: 1.5,
  });

  const raf = (time: number) => {
    lenis?.raf(time);
    rafId = requestAnimationFrame(raf);
  };
  rafId = requestAnimationFrame(raf);
}

export function stopLenis() {
  if (rafId) cancelAnimationFrame(rafId);
  rafId = 0;
  lenis?.destroy();
  lenis = null;
}

/* Instant jump used on route change */
export function scrollTopInstant() {
  if (lenis) lenis.scrollTo(0, { immediate: true });
  else window.scrollTo(0, 0);
}

/* Smooth scroll to an anchor/selector (used by the hero scroll cue) */
export function scrollToTarget(target: string) {
  if (lenis) lenis.scrollTo(target, { offset: 0 });
  else document.querySelector(target)?.scrollIntoView({ behavior: "smooth" });
}

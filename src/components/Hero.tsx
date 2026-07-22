import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { SLIDES, VENDORS } from "../data";

const AUTO_MS = 6000;
const prefersReduced = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export default function Hero() {
  const [active, setActive] = useState(0);
  const layerA = useRef<HTMLDivElement>(null);
  const layerB = useRef<HTMLDivElement>(null);
  const front = useRef<HTMLDivElement | null>(null);
  const back = useRef<HTMLDivElement | null>(null);
  const idx = useRef(0);
  const timer = useRef<number | null>(null);
  const paused = useRef(false);

  // Preload every slide image so crossfades never flash.
  useEffect(() => {
    SLIDES.forEach((s) => {
      const img = new Image();
      img.src = s.img;
    });
  }, []);

  useEffect(() => {
    front.current = layerA.current;
    back.current = layerB.current;
    if (front.current) {
      front.current.style.backgroundImage = `url(${SLIDES[0].img})`;
      front.current.style.opacity = "1";
    }

    const go = (n: number) => {
      const next = (n + SLIDES.length) % SLIDES.length;
      if (next === idx.current || !front.current || !back.current) return;
      idx.current = next;
      setActive(next);

      const incoming = back.current;
      const outgoing = front.current;
      incoming.style.backgroundImage = `url(${SLIDES[next].img})`;

      if (prefersReduced()) {
        incoming.style.opacity = "1";
        outgoing.style.opacity = "0";
      } else {
        gsap.to(incoming, { opacity: 1, duration: 1.25, ease: "power2.inOut" });
        gsap.to(outgoing, { opacity: 0, duration: 1.25, ease: "power2.inOut" });
      }
      // swap roles
      front.current = incoming;
      back.current = outgoing;
    };

    // expose advance to click handlers via a ref-bound function
    advance.current = (n: number) => {
      go(n);
      restart();
    };

    const tick = () => {
      if (!paused.current) go(idx.current + 1);
    };
    const start = () => {
      if (prefersReduced()) return;
      stop();
      timer.current = window.setInterval(tick, AUTO_MS);
    };
    const stop = () => {
      if (timer.current) window.clearInterval(timer.current);
    };
    const restart = () => {
      stop();
      start();
    };
    restartRef.current = restart;

    start();
    return stop;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const advance = useRef<(n: number) => void>(() => {});
  const restartRef = useRef<() => void>(() => {});

  const slide = SLIDES[active];

  return (
    <section
      className="relative h-[100svh] min-h-[620px] overflow-hidden isolate"
      onMouseEnter={() => (paused.current = true)}
      onMouseLeave={() => (paused.current = false)}
      aria-roledescription="carousel"
      aria-label="Product categories"
    >
      {/* dual-layer crossfade background */}
      <div
        ref={layerA}
        className="absolute inset-0 bg-cover bg-center will-change-[opacity]"
        style={{ opacity: 0 }}
        aria-hidden
      />
      <div
        ref={layerB}
        className="absolute inset-0 bg-cover bg-center will-change-[opacity]"
        style={{ opacity: 0 }}
        aria-hidden
      />

      {/* legibility scrim */}
      <div
        className="absolute inset-0 z-[2]"
        style={{
          background:
            "linear-gradient(90deg, rgba(12,10,10,.72) 0%, rgba(12,10,10,.34) 46%, rgba(12,10,10,.12) 100%), linear-gradient(0deg, rgba(12,10,10,.55) 0%, rgba(12,10,10,0) 30%)",
        }}
        aria-hidden
      />

      {/* content */}
      <div className="absolute inset-0 z-[4] flex flex-col justify-center gutter">
        <p className="flex items-center gap-4 text-[clamp(13px,1.05vw,16px)] tracking-[0.02em] font-normal text-white/90 mb-[clamp(18px,3vh,34px)]">
          <span className="h-px w-9 bg-red flex-none" aria-hidden />
          Wholesale surfacing · employee-owned since 1963
        </p>

        <ul className="flex flex-col gap-[clamp(2px,0.5vh,10px)]">
          {SLIDES.map((s, i) => (
            <li key={s.key}>
              <a
                href={s.href}
                onClick={(e) => {
                  e.preventDefault();
                  advance.current(i);
                }}
                aria-current={i === active ? "true" : undefined}
                className="group relative inline-flex w-max items-center display text-[clamp(42px,8.2vw,116px)] text-white transition-[opacity,transform] duration-500 ease-[var(--ease-out-expo)]"
                style={{ opacity: i === active ? 1 : 0.42 }}
              >
                <span
                  className="absolute -left-[0.6em] top-1/2 h-[2px] w-[0.34em] -translate-y-1/2 origin-left bg-red transition-transform duration-500 ease-[var(--ease-out-expo)]"
                  style={{
                    transform: `translateY(-50%) scaleX(${
                      i === active ? 1 : 0
                    })`,
                  }}
                  aria-hidden
                />
                {s.word}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* legend, bottom-right */}
      <div className="absolute right-[var(--pad)] bottom-[clamp(88px,11vh,120px)] z-[4] text-right max-w-[min(40vw,340px)] hidden sm:block">
        <p className="text-[12px] tracking-[0.22em] uppercase text-red font-semibold mb-1.5">
          {slide.category}
        </p>
        <p className="text-[clamp(12px,1.1vw,14px)] leading-relaxed text-white/80 font-light">
          {slide.desc}
        </p>
      </div>

      {/* scroll cue */}
      <a
        href="#mission"
        aria-label="Scroll to content"
        className="absolute left-1/2 bottom-[72px] z-[6] -translate-x-1/2"
      >
        <span className="block h-[38px] w-[24px] rounded-[14px] border-[1.5px] border-white/70 relative">
          <span className="scroll-wheel absolute left-1/2 top-[7px] h-[6px] w-[2px] -translate-x-1/2 rounded bg-white" />
        </span>
      </a>

      {/* vendor marquee */}
      <div
        className="marquee-bar absolute inset-x-0 bottom-0 z-[4] h-[52px] flex items-center overflow-hidden border-t border-white/10"
        style={{
          background:
            "linear-gradient(0deg, rgba(12,10,10,.6), rgba(12,10,10,0))",
          WebkitMaskImage:
            "linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)",
          maskImage:
            "linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)",
        }}
      >
        <span className="absolute left-0 top-0 bottom-0 z-[3] hidden sm:flex items-center pl-[var(--pad)] pr-8 text-[10px] tracking-[0.24em] uppercase text-white/55 font-semibold bg-ink pointer-events-none">
          Our Vendors
        </span>
        <div className="marquee-track flex shrink-0 items-center gap-[clamp(30px,4vw,60px)] pl-[clamp(30px,4vw,60px)]">
          {[...VENDORS, ...VENDORS].map((v, i) => (
            <span
              key={i}
              className="text-[13px] tracking-[0.14em] uppercase text-white/60 font-medium whitespace-nowrap"
            >
              {v}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

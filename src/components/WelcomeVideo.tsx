import { useState } from "react";
import { Section } from "./ui";
import { WELCOME_VIDEO } from "../data";

export default function WelcomeVideo() {
  const [playing, setPlaying] = useState(false);

  return (
    <Section tone="ink-2" id="welcome">
      <div className="grid gap-x-16 gap-y-10 lg:grid-cols-[1fr_1.4fr] items-center">
        <div>
          <p className="flex items-center gap-4 text-[13px] tracking-[0.02em] text-ink/70 mb-5">
            <span className="h-px w-9 bg-red flex-none" aria-hidden />
            Welcome
          </p>
          <h2 className="font-extrabold text-[clamp(28px,3.6vw,52px)] leading-[1.08] tracking-[-0.01em] text-balance">
            {WELCOME_VIDEO.title}
          </h2>
          <p className="mt-5 text-[clamp(15px,1.15vw,17px)] leading-[1.7] text-ink/65 font-normal max-w-[46ch]">
            {WELCOME_VIDEO.blurb}
          </p>
        </div>

        <div className="relative aspect-video overflow-hidden bg-light border border-ink/10">
          {playing ? (
            <iframe
              className="absolute inset-0 h-full w-full"
              src={`https://www.youtube.com/embed/${WELCOME_VIDEO.youtubeId}?autoplay=1&rel=0`}
              title={WELCOME_VIDEO.title}
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <button
              type="button"
              onClick={() => setPlaying(true)}
              className="group absolute inset-0 h-full w-full"
              aria-label={`Play: ${WELCOME_VIDEO.title}`}
            >
              <img
                src="/img/slide-hardwood.jpg"
                alt=""
                className="absolute inset-0 h-full w-full object-cover opacity-60 transition-opacity group-hover:opacity-70"
              />
              <span className="absolute inset-0 bg-light/30" aria-hidden />
              <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center h-[74px] w-[74px] rounded-full bg-red text-white transition-transform duration-300 group-hover:scale-110">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
              <span className="absolute bottom-4 left-5 text-[12px] tracking-[0.16em] uppercase text-ink/65">
                Play welcome video
              </span>
            </button>
          )}
        </div>
      </div>
    </Section>
  );
}

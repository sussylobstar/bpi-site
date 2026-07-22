import { Link } from "react-router-dom";
import { Section } from "./ui";
import { NEXT_STEPS } from "../data";

export default function NextSteps() {
  return (
    <Section tone="ink-2" id="next-steps">
      <div className="mb-[clamp(32px,4vw,56px)]">
        <h2 className="font-extralight text-[clamp(26px,3.4vw,48px)] leading-[1.06] tracking-[-0.01em] text-balance max-w-[16ch]">
          Where to next?
        </h2>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {NEXT_STEPS.map((s) => (
          <Link
            key={s.title}
            to={s.href}
            className="group relative flex flex-col justify-end min-h-[300px] overflow-hidden bg-ink p-[clamp(20px,2vw,28px)]"
          >
            {s.img && (
              <img
                src={s.img}
                alt=""
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover opacity-35 transition-[opacity,transform] duration-[800ms] ease-[var(--ease-out-expo)] group-hover:opacity-45 group-hover:scale-105"
              />
            )}
            <span
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(0deg, rgba(13,11,11,.9) 0%, rgba(13,11,11,.35) 60%, rgba(13,11,11,.2) 100%)",
              }}
              aria-hidden
            />
            <div className="relative">
              <h3 className="display text-white text-[clamp(19px,2vw,26px)] leading-tight">
                {s.title}
              </h3>
              <p className="mt-2.5 text-[13.5px] leading-relaxed text-white/70 font-light">
                {s.desc}
              </p>
              <span className="mt-4 inline-flex items-center gap-2 text-[12px] tracking-[0.16em] uppercase text-red">
                {s.cta}
                <span className="transition-transform group-hover:translate-x-1" aria-hidden>
                  →
                </span>
              </span>
            </div>
          </Link>
        ))}
      </div>
    </Section>
  );
}

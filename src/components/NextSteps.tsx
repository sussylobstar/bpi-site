import { Link } from "react-router-dom";
import { Section } from "./ui";
import { NEXT_STEPS } from "../data";

export default function NextSteps() {
  return (
    <Section tone="ink-2" id="next-steps">
      <div className="mb-[clamp(32px,4vw,56px)]">
        <h2 className="font-extrabold text-[clamp(26px,3.4vw,48px)] leading-[1.06] tracking-[-0.01em] text-balance max-w-[16ch]">
          Where to next?
        </h2>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {NEXT_STEPS.map((s) => (
          <Link
            key={s.title}
            to={s.href}
            className="group relative flex flex-col justify-end min-h-[300px] overflow-hidden bg-light-2 border border-ink/10 p-[clamp(20px,2vw,28px)] transition-colors hover:border-ink/20"
          >
            {s.img && (
              <img
                src={s.img}
                alt=""
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover opacity-[0.12] transition-[opacity,transform] duration-[800ms] ease-[var(--ease-out-expo)] group-hover:opacity-20 group-hover:scale-105"
              />
            )}
            <span
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(0deg, rgba(255,255,255,.85) 0%, rgba(255,255,255,.55) 60%, rgba(255,255,255,.35) 100%)",
              }}
              aria-hidden
            />
            <div className="relative">
              <h3 className="display text-ink text-[clamp(19px,2vw,26px)] leading-tight">
                {s.title}
              </h3>
              <p className="mt-2.5 text-[13.5px] leading-relaxed text-ink/65 font-normal">
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

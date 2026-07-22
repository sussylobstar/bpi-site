import { Section } from "./ui";
import { AWARDS } from "../data";

export default function Awards() {
  return (
    <Section tone="ink" id="awards">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-[clamp(32px,4vw,56px)]">
        <h2 className="font-extralight text-[clamp(26px,3.4vw,48px)] leading-[1.06] tracking-[-0.01em] text-balance max-w-[16ch]">
          Recognized by the industry we serve.
        </h2>
        <p className="text-[15px] leading-[1.7] text-white/60 font-light max-w-[38ch]">
          Six decades of dealer relationships, vendor partnerships and a
          workplace people stay with.
        </p>
      </div>
      <ul className="grid grid-cols-2 lg:grid-cols-4 border-t border-l border-white/10">
        {AWARDS.map((a) => (
          <li
            key={a.title}
            className="border-b border-r border-white/10 p-[clamp(20px,2.4vw,34px)] flex flex-col gap-3"
          >
            <span className="display text-red text-[clamp(15px,1.3vw,18px)]">
              {a.year}
            </span>
            <span className="font-light text-[clamp(16px,1.5vw,21px)] leading-snug tracking-[-0.01em] text-white">
              {a.title}
            </span>
            <span className="mt-auto text-[12.5px] tracking-[0.04em] uppercase text-white/45">
              {a.org}
            </span>
          </li>
        ))}
      </ul>
    </Section>
  );
}

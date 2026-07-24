import { useState } from "react";
import { Section } from "./ui";
import { PARTNERS } from "../data";
import type { Partner } from "../data";

function PartnerMark({ partner }: { partner: Partner }) {
  const [hasLogo, setHasLogo] = useState(true);
  return (
    <a
      href={partner.url}
      target="_blank"
      rel="noopener noreferrer"
      title={partner.full}
      aria-label={partner.full}
      className="flex h-[68px] items-center justify-center"
    >
      {partner.logo && hasLogo ? (
        <img
          src={`/img/partners/${partner.logo}`}
          alt={`${partner.name} — ${partner.full}`}
          loading="lazy"
          onError={() => setHasLogo(false)}
          className="partner-logo max-h-14 w-auto object-contain"
        />
      ) : (
        <span className="display text-[clamp(22px,2.4vw,34px)] text-ink/70 transition-colors hover:text-ink">
          {partner.name}
        </span>
      )}
    </a>
  );
}

export default function IndustryPartners() {
  return (
    <Section tone="light" id="partners">
      <div className="text-center mb-[clamp(28px,4vw,52px)]">
        <p className="text-[12px] tracking-[0.22em] uppercase text-red font-semibold">
          Industry Partners
        </p>
        <h2 className="mt-4 font-extrabold text-[clamp(24px,3vw,42px)] leading-[1.08] tracking-[-0.01em] text-balance max-w-[20ch] mx-auto text-ink">
          Active in the associations that set the standard.
        </h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-light/10 border border-ink/10">
        {PARTNERS.map((p) => (
          <div
            key={p.name}
            className="bg-light py-[clamp(28px,4vw,52px)] px-6 flex items-center justify-center"
          >
            <PartnerMark partner={p} />
          </div>
        ))}
      </div>
    </Section>
  );
}

import { useState } from "react";
import { Section } from "./ui";
import { VENDOR_BRANDS } from "../data";
import type { Brand } from "../data";

/* Renders the official logo if a file exists at /img/vendors/<slug>.svg,
   otherwise falls back to a clean wordmark — never a broken image. */
function VendorLogo({ brand }: { brand: Brand }) {
  const [hasLogo, setHasLogo] = useState(true);
  const external = brand.url.startsWith("http");
  return (
    <a
      href={brand.url}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      aria-label={brand.name}
      className="mx-3 flex h-[76px] w-[190px] flex-none items-center justify-center border border-ink/12 px-6"
    >
      {brand.logo && hasLogo ? (
        <img
          src={`/img/vendors/${brand.logo}`}
          alt={`${brand.name} logo`}
          loading="lazy"
          onError={() => setHasLogo(false)}
          className="vendor-logo max-h-9 w-auto object-contain"
        />
      ) : (
        <span className="whitespace-nowrap text-[clamp(15px,1.6vw,20px)] tracking-[0.06em] uppercase text-ink/70 font-light">
          {brand.name}
        </span>
      )}
    </a>
  );
}

export default function Vendors() {
  const half = Math.ceil(VENDOR_BRANDS.length / 2);
  const rowA = VENDOR_BRANDS.slice(0, half);
  const rowB = VENDOR_BRANDS.slice(half).concat(rowA.slice(0, 2));

  return (
    <Section tone="light" id="vendors">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-[clamp(32px,4vw,56px)]">
        <h2 className="font-extralight text-[clamp(26px,3.4vw,48px)] leading-[1.06] tracking-[-0.01em] text-balance max-w-[15ch]">
          The brands your customers ask for.
        </h2>
        <p className="text-[15px] leading-[1.7] text-ink/65 font-light max-w-[40ch]">
          BPI stocks the vendors that move — so you can say yes to more of the
          floor, from one purchase order.
        </p>
      </div>

      <div className="space-y-4 overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_6%,#000_94%,transparent)]">
        {[rowA, rowB].map((row, i) => (
          <div
            key={i}
            className={`flex w-max ${i === 0 ? "vendor-row-a" : "vendor-row-b"}`}
          >
            {[...row, ...row, ...row].map((b, j) => (
              <VendorLogo key={`${b.slug}-${j}`} brand={b} />
            ))}
          </div>
        ))}
      </div>
    </Section>
  );
}

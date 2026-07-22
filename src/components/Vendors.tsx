import { Section } from "./ui";
import { VENDORS } from "../data";

/* A dedicated, prominent vendor carousel for the homepage body.
   Two duplicated rows scrolling in opposite directions. */
export default function Vendors() {
  const half = Math.ceil(VENDORS.length / 2);
  const rowA = VENDORS.slice(0, half);
  const rowB = VENDORS.slice(half).concat(rowA.slice(0, 2));

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
            {[...row, ...row, ...row].map((v, j) => (
              <span
                key={j}
                className="mx-3 inline-flex items-center justify-center whitespace-nowrap border border-ink/12 px-8 py-5 text-[clamp(15px,1.6vw,20px)] tracking-[0.06em] uppercase text-ink/70 font-light"
              >
                {v}
              </span>
            ))}
          </div>
        ))}
      </div>
    </Section>
  );
}

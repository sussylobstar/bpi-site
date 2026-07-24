import { Link } from "react-router-dom";
import { CATEGORIES } from "../data";

const withImg = CATEGORIES.filter((c) => c.img);
const textOnly = CATEGORIES.filter((c) => !c.img);

// deliberately varied spans — a mosaic, not a uniform card grid
const spans = [
  "md:col-span-7 md:row-span-2 min-h-[320px] md:min-h-[560px]",
  "md:col-span-5 min-h-[260px]",
  "md:col-span-5 min-h-[260px]",
  "md:col-span-7 min-h-[300px]",
];

function Tile({
  title,
  blurb,
  img,
  href,
  className,
}: {
  title: string;
  blurb: string;
  img?: string;
  href: string;
  className?: string;
}) {
  return (
    <Link
      to={href}
      className={`group relative block overflow-hidden bg-light-2 ${className ?? ""}`}
    >
      <img
        src={img}
        alt={`${title} — browse the ${title.toLowerCase()} catalog`}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-[900ms] ease-[var(--ease-out-expo)] group-hover:scale-[1.05]"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(0deg, rgba(12,10,10,.82) 0%, rgba(12,10,10,.15) 55%, rgba(12,10,10,.05) 100%)",
        }}
      />
      {/* red hover wash — nods to the BPI mark (per approved mockup) */}
      <div
        className="absolute inset-0 bg-red opacity-0 transition-opacity duration-300 ease-[var(--ease-out-expo)] group-hover:opacity-80 mix-blend-multiply"
        aria-hidden
      />
      <div className="relative h-full flex flex-col justify-end p-[clamp(20px,2.2vw,34px)]">
        <h3 className="display text-white text-[clamp(24px,3vw,44px)]">
          {title}
        </h3>
        <p className="mt-2 max-w-[38ch] text-[14px] leading-relaxed text-white/80 font-normal">
          {blurb}
        </p>
        <span className="mt-4 inline-flex items-center gap-2 text-[13px] tracking-[0.14em] uppercase text-white/0 group-hover:text-white transition-colors duration-300">
          Browse catalog <span aria-hidden>→</span>
        </span>
      </div>
    </Link>
  );
}

export default function Products() {
  return (
    <section
      id="products"
      className="gutter bg-light text-ink py-[clamp(72px,11vw,150px)]"
    >
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-[clamp(36px,5vw,64px)]">
          <h2 className="font-extrabold text-[clamp(30px,4.4vw,62px)] leading-[1.04] tracking-[-0.01em] text-balance max-w-[14ch]">
            The whole floor, from one source.
          </h2>
          <p className="text-[15px] leading-[1.7] text-ink/65 font-normal max-w-[42ch]">
            Seven categories, hundreds of lines, one purchase order. Every
            category below is a door into the full BPI catalog.
          </p>
        </div>

        <div className="grid md:grid-cols-12 gap-3 md:auto-rows-[1fr]">
          {withImg.map((c, i) => (
            <Tile key={c.title} {...c} className={spans[i]} />
          ))}
        </div>

        {/* supply categories — a ruled list, not more cards */}
        <ul className="mt-3 grid sm:grid-cols-3 border-t border-ink/15">
          {textOnly.map((c) => (
            <li key={c.title}>
              <Link
                to={c.href}
                className="group flex h-full flex-col justify-between gap-6 p-[clamp(22px,2.4vw,34px)] border-b sm:border-b-0 sm:border-r last:border-r-0 border-ink/15 hover:bg-light-2 transition-colors"
              >
                <div>
                  <h3 className="display text-[clamp(19px,1.9vw,28px)] text-ink">
                    {c.title}
                  </h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-ink/60 font-normal max-w-[34ch]">
                    {c.blurb}
                  </p>
                </div>
                <span className="inline-flex items-center gap-2 text-[12px] tracking-[0.16em] uppercase text-red">
                  Explore{" "}
                  <span className="transition-transform group-hover:translate-x-1" aria-hidden>
                    →
                  </span>
                </span>
              </Link>
            </li>
          ))}
        </ul>

        <p className="mt-8 text-[13px] text-ink/45 font-normal">
          Full line-item catalog is rolling out as our ERP integration comes
          online. In the meantime, your BPI rep can pull availability on any
          product.
        </p>
      </div>
    </section>
  );
}

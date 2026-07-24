import { Link } from "react-router-dom";
import { CONTACT } from "../data";

const COLUMNS: { title: string; links: [string, string][] }[] = [
  {
    title: "Products",
    links: [
      ["Tile", "/products/tile"],
      ["Hardwood", "/products/hardwood"],
      ["Resilient", "/products/resilient"],
      ["Carpet + Cushion", "/products/carpet-cushion"],
      ["Counter Surfacing", "/products/counter-surfacing"],
    ],
  },
  {
    title: "Company",
    links: [
      ["About BPI", "/about-bpi"],
      ["Dealers", "/dealers"],
      ["Careers", "/careers"],
      ["Events", "/events"],
      ["Blog", "/blog"],
    ],
  },
  {
    title: "Resources",
    links: [
      ["Become a Dealer", "/become-a-dealer"],
      ["Product Catalogs", "/resources"],
      ["Safety Data Sheets", "/sds"],
      ["Contact", "/contact"],
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-light border-t-2 border-red text-ink">
      <div className="gutter py-[clamp(56px,7vw,96px)] max-w-[1400px] mx-auto">
        <div className="grid gap-x-12 gap-y-12 lg:grid-cols-[1.4fr_2fr]">
          {/* brand + contact */}
          <div>
            <Link to="/" className="flex items-center gap-3 w-max">
              <img
                src="/img/bpi-logo.png"
                alt="Building Plastics Inc."
                className="h-11 w-11 rounded-[3px]"
                width={44}
                height={44}
              />
              <span className="text-[15px] font-normal tracking-wide text-ink/65">
                Building Plastics Inc.
              </span>
            </Link>
            <p className="mt-6 max-w-[36ch] text-[14px] leading-[1.7] text-ink/55 font-normal">
              Employee-owned wholesale surfacing and flooring distribution
              across the US Southeast since 1963.
            </p>
            <div className="mt-6 space-y-1.5 text-[14px] font-normal text-ink/65">
              <p>{CONTACT.address}</p>
              <p>
                <a
                  href={CONTACT.phoneHref}
                  className="hover:text-red transition-colors"
                >
                  {CONTACT.phone}
                </a>
                {"  ·  "}
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="hover:text-red transition-colors"
                >
                  {CONTACT.email}
                </a>
              </p>
            </div>
          </div>

          {/* link columns */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
            {COLUMNS.map((col) => (
              <nav key={col.title} aria-label={col.title}>
                <h3 className="text-[11px] tracking-[0.2em] uppercase text-ink/45 font-medium">
                  {col.title}
                </h3>
                <ul className="mt-4 space-y-2.5">
                  {col.links.map(([label, href]) => (
                    <li key={href}>
                      <Link
                        to={href}
                        className="text-[14px] font-normal text-ink/65 hover:text-ink transition-colors"
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>

        <div className="mt-[clamp(40px,5vw,64px)] pt-8 border-t border-ink/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
          <p className="text-[13px] text-ink/45 font-normal">
            © {2026} Building Plastics Inc. · Employee-owned since 1963.
          </p>
          <div className="flex items-center gap-5 text-[13px]">
            <a
              href={CONTACT.facebook}
              className="text-ink/55 hover:text-ink transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>
            <a
              href={CONTACT.instagram}
              className="text-ink/55 hover:text-ink transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
            <a
              href={CONTACT.linkedin}
              className="text-ink/55 hover:text-ink transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

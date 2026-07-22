import { LOCATIONS } from "../data";

const telHref = (p: string) => "tel:+1" + p.replace(/[^\d]/g, "");

export default function Locations() {
  return (
    <section
      id="locations"
      className="gutter bg-ink text-white py-[clamp(72px,11vw,150px)]"
    >
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-[clamp(36px,5vw,64px)]">
          <h2 className="font-extralight text-[clamp(30px,4.4vw,62px)] leading-[1.04] tracking-[-0.01em] text-balance max-w-[16ch]">
            Thirteen branches across the Southeast.
          </h2>
          <p className="text-[15px] leading-[1.7] text-white/65 font-light max-w-[40ch]">
            Distribution close to your jobsite in Tennessee, Alabama, Arkansas,
            Mississippi, Louisiana and Texas.
          </p>
        </div>

        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 border-t border-l border-white/10">
          {LOCATIONS.map((loc) => (
            <li
              key={loc.id}
              className="relative border-b border-r border-white/10 p-[clamp(20px,2.2vw,32px)]"
            >
              {loc.is_headquarters && (
                <span className="absolute right-5 top-6 h-2 w-2 rounded-full bg-red" aria-hidden />
              )}
              <p className="text-[11px] tracking-[0.2em] uppercase text-white/45 font-medium">
                {loc.label === loc.city
                  ? loc.state
                  : `${loc.label} · ${loc.state}`}
              </p>
              <h3 className="mt-2 display text-[clamp(20px,2vw,30px)]">
                {loc.city}
              </h3>
              <address className="mt-3 not-italic text-[14px] leading-relaxed text-white/60 font-light">
                {loc.address}
                <br />
                {loc.city}, {loc.state} {loc.zip_code}
              </address>
              <a
                href={telHref(loc.phone)}
                className="mt-3 inline-block text-[14px] text-white/85 hover:text-red transition-colors"
              >
                {loc.phone}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

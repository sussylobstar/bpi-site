import { useState, lazy, Suspense } from "react";
import { LOCATIONS } from "../data";

const LocationsMap = lazy(() => import("./LocationsMap"));

const telHref = (p: string) => "tel:+1" + p.replace(/[^\d]/g, "");

export default function Locations() {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  return (
    <section
      id="locations"
      className="gutter bg-light text-ink py-[clamp(72px,11vw,150px)]"
    >
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-[clamp(36px,5vw,64px)]">
          <h2 className="font-extrabold text-[clamp(30px,4.4vw,62px)] leading-[1.04] tracking-[-0.01em] text-balance max-w-[16ch]">
            Thirteen branches across the Southeast.
          </h2>
          <p className="text-[15px] leading-[1.7] text-ink/60 font-normal max-w-[40ch]">
            Distribution close to your jobsite in Tennessee, Alabama, Arkansas,
            Mississippi, Louisiana and Texas. Select a branch to locate it on
            the map.
          </p>
        </div>

        <div className="grid gap-4 lg:grid-cols-[1.35fr_1fr]">
          {/* interactive map */}
          <div
            data-lenis-prevent
            className="relative h-[360px] lg:h-[620px] border border-ink/10 overflow-hidden order-1 bg-light-2"
          >
            <Suspense
              fallback={
                <div className="absolute inset-0 grid place-items-center text-[13px] tracking-[0.14em] uppercase text-ink/45">
                  Loading map…
                </div>
              }
            >
              <LocationsMap selectedId={selectedId} onSelect={setSelectedId} />
            </Suspense>
          </div>

          {/* selectable branch list */}
          <ul className="order-2 lg:h-[620px] lg:overflow-y-auto grid sm:grid-cols-2 lg:grid-cols-1 gap-px bg-ink/10 border border-ink/10 [scrollbar-width:thin]">
            {LOCATIONS.map((loc) => {
              const active = loc.id === selectedId;
              return (
                <li key={loc.id}>
                  <button
                    type="button"
                    onClick={() => setSelectedId(loc.id)}
                    aria-pressed={active}
                    className={`group w-full text-left p-[clamp(16px,1.6vw,24px)] transition-colors ${
                      active ? "bg-red/15" : "bg-light hover:bg-light-2"
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <span
                        className={`h-1.5 w-1.5 rounded-full flex-none ${
                          loc.is_headquarters ? "bg-red" : "bg-ink/30"
                        }`}
                        aria-hidden
                      />
                      <span className="text-[11px] tracking-[0.18em] uppercase text-ink/45">
                        {loc.label === loc.city
                          ? loc.state
                          : `${loc.label} · ${loc.state}`}
                      </span>
                    </div>
                    <h3
                      className={`mt-1.5 display text-[clamp(18px,1.7vw,24px)] transition-colors ${
                        active ? "text-red" : "text-ink"
                      }`}
                    >
                      {loc.city}
                    </h3>
                    <p className="mt-1.5 text-[13px] leading-relaxed text-ink/55 font-normal">
                      {loc.address} · {loc.city}, {loc.state} {loc.zip_code}
                    </p>
                    <a
                      href={telHref(loc.phone)}
                      onClick={(e) => e.stopPropagation()}
                      className="mt-1.5 inline-block text-[13px] text-ink/70 hover:text-red transition-colors"
                    >
                      {loc.phone}
                    </a>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}

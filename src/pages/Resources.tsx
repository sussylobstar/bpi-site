import { PageHero, Section, Btn, Arrow } from "../components/ui";

type Resource = {
  title: string;
  desc: string;
  status: "live" | "soon";
  href?: string;
};

const RESOURCES: Resource[] = [
  {
    title: "Product Catalogs",
    desc: "Browse the full digital catalog library — flip through current collections by category and vendor.",
    status: "live",
    href: "https://www.flipsnack.com/bpiteam",
  },
  {
    title: "Promotions",
    desc: "Current program pricing and seasonal buying events for dealers.",
    status: "soon",
  },
  {
    title: "Forms & Documents",
    desc: "Credit application, tax certificates and account paperwork.",
    status: "soon",
  },
  {
    title: "Sales Tools",
    desc: "Sample ordering, display program details and merchandising assets.",
    status: "soon",
  },
  {
    title: "BPI Rep Portal",
    desc: "Account tools and order management for BPI field representatives.",
    status: "soon",
  },
];

export default function Resources() {
  return (
    <>
      <PageHero
        eyebrow="Resources"
        title={<>Tools for the trade.</>}
        intro="Catalogs, forms and sales support in one place. We're rolling these out — the digital catalog library is live now, with more on the way."
        img="/img/slide-hardwood.jpg"
      />
      <Section tone="ink">
        <ul className="grid sm:grid-cols-2 border-t border-l border-white/10">
          {RESOURCES.map((r) => (
            <li
              key={r.title}
              className="border-b border-r border-white/10 p-[clamp(24px,3vw,44px)] flex flex-col gap-5"
            >
              <div>
                <div className="flex items-center gap-3">
                  <h2 className="display text-[clamp(18px,1.9vw,26px)]">{r.title}</h2>
                  {r.status === "soon" && (
                    <span className="text-[10px] tracking-[0.18em] uppercase text-white/45 border border-white/20 px-2 py-1">
                      Coming soon
                    </span>
                  )}
                </div>
                <p className="mt-3 text-[15px] leading-relaxed text-white/60 font-light max-w-[44ch]">
                  {r.desc}
                </p>
              </div>
              {r.status === "live" && r.href && (
                <Btn href={r.href} variant="outline" className="self-start !py-2.5 !px-5 !text-[13px]">
                  Open catalogs <Arrow />
                </Btn>
              )}
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}

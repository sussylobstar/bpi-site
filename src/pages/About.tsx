import { PageHero, Section, Btn, Arrow } from "../components/ui";

const TIMELINE: [string, string][] = [
  ["1963", "BPI is founded and becomes employee-owned — a structure that still defines how we serve dealers."],
  ["1980s–90s", "Expansion across the Mid-South, adding distribution centers to shorten lead times."],
  ["2000s", "Category growth beyond flooring into tile, counter surfacing and installation supplies."],
  ["Today", "Thirteen branches across six states, 800+ product lines, and the same owner-operated service."],
];

const VALUES: [string, string][] = [
  ["Owner-operated service", "Every associate has a stake. Service isn't a department — it's the whole company."],
  ["Deep local stock", "Product close to the jobsite means fewer delays and fewer surprises for your customers."],
  ["One partner, whole floor", "Tile to trowels, hardwood to cushion — consolidate sourcing under one relationship."],
];

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About BPI"
        title={<>Employee-owned since 1963.</>}
        intro="Building Plastics Inc. is a wholesale distributor of decorative surfacing and flooring across the US Southeast — and one of the region's largest. For more than sixty years we've stocked, delivered and stood behind the products dealers, contractors and designers build with."
        img="/img/slide-hardwood.jpg"
      />

      <Section tone="ink">
        <div className="grid gap-x-16 gap-y-10 lg:grid-cols-[1fr_1.1fr] items-start">
          <h2 className="font-extrabold text-[clamp(26px,3.4vw,50px)] leading-[1.08] tracking-[-0.01em] text-balance">
            We exist to make the floor the <span className="text-red">easiest</span> part of the job.
          </h2>
          <div className="space-y-5 text-[clamp(15px,1.15vw,17px)] leading-[1.75] text-ink/65 font-normal lg:pt-3">
            <p>
              A dealer's day is full of hard problems. Sourcing the floor
              shouldn't be one of them. BPI carries the breadth to cover an
              entire project, the stock depth to deliver it quickly, and the
              people to make it painless.
            </p>
            <p>
              Because we've been employee-owned since day one, the person who
              answers your call has a stake in getting it right. That's the
              quiet advantage behind six decades of dealer relationships.
            </p>
          </div>
        </div>
      </Section>

      <Section tone="light">
        <h2 className="font-extrabold text-[clamp(24px,3vw,44px)] tracking-[-0.01em] mb-[clamp(28px,4vw,52px)]">
          Six decades, one direction.
        </h2>
        <ol className="grid sm:grid-cols-2 lg:grid-cols-4 border-t border-l border-ink/15">
          {TIMELINE.map(([year, text]) => (
            <li key={year} className="border-b border-r border-ink/15 p-[clamp(20px,2.2vw,32px)]">
              <p className="display text-red text-[clamp(20px,2vw,30px)]">{year}</p>
              <p className="mt-3 text-[14px] leading-relaxed text-ink/65 font-normal">{text}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section tone="ink">
        <div className="grid sm:grid-cols-3 gap-px bg-ink/10 border border-ink/10">
          {VALUES.map(([h, d]) => (
            <div key={h} className="bg-light p-[clamp(22px,2.6vw,38px)]">
              <h3 className="display text-[clamp(17px,1.7vw,24px)] leading-tight">{h}</h3>
              <p className="mt-3 text-[14px] leading-relaxed text-ink/55 font-normal">{d}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-wrap gap-4">
          <Btn to="/become-a-dealer">Become a Dealer <Arrow /></Btn>
          <Btn to="/careers" variant="outline">Careers at BPI</Btn>
        </div>
      </Section>
    </>
  );
}

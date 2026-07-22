import { PageHero, Section, Btn, Arrow } from "../components/ui";

const REASONS: [string, string][] = [
  ["You're an owner", "Employee ownership isn't a perk — it's the structure. Your work builds your stake."],
  ["Room to grow", "Warehouse, delivery, sales, operations — people build long careers across our branches."],
  ["Rooted in the Southeast", "Thirteen locations across seven states, close to home for a lot of our team."],
];

export default function Careers() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title={<>Build a career, and a stake in it.</>}
        intro="BPI has been employee-owned since 1963. When the company does well, the people who built it do too. We hire across warehouse, delivery, sales and operations at branches throughout the Southeast."
        img="/img/slide-hardwood.jpg"
      />
      <Section tone="ink">
        <div className="grid sm:grid-cols-3 gap-px bg-white/10 border border-white/10">
          {REASONS.map(([h, d]) => (
            <div key={h} className="bg-ink p-[clamp(22px,2.6vw,38px)]">
              <h2 className="display text-[clamp(17px,1.7vw,24px)] leading-tight">{h}</h2>
              <p className="mt-3 text-[14px] leading-relaxed text-white/60 font-light">{d}</p>
            </div>
          ))}
        </div>
        <div className="mt-[clamp(40px,6vw,72px)] border border-white/10 bg-ink-2 p-[clamp(28px,4vw,52px)] max-w-[720px]">
          <h2 className="font-extralight text-[clamp(22px,2.6vw,36px)] tracking-[-0.01em]">
            Interested in joining us?
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-white/70 font-light max-w-[52ch]">
            Send your résumé and the role or branch you're interested in, and
            our team will be in touch.
          </p>
          <div className="mt-7">
            <Btn href="mailto:careers@bpiteam.com?subject=Careers%20at%20BPI">
              Email careers@bpiteam.com <Arrow />
            </Btn>
          </div>
        </div>
      </Section>
    </>
  );
}

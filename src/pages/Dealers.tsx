import { PageHero, Section, Btn, Arrow } from "../components/ui";
import { DEALER_VALUE } from "../data";

const BENEFITS: [string, string][] = [
  ["NETXPRESS 24/7 ordering", "Check live stock, place orders and track deliveries any hour — no waiting for a callback."],
  ["Dedicated account rep", "One person who knows your business, your market and your open orders."],
  ["Co-op marketing support", "Samples, displays and program dollars to help you sell off the showroom floor."],
  ["Deep local inventory", "Thirteen branches mean the product is usually a short drive from the jobsite."],
];

const STEPS: [string, string][] = [
  ["Apply", "Send us a short dealer application — business details and the categories you sell."],
  ["Get set up", "We assign your rep, open your account and get you onto NETXPRESS."],
  ["Start ordering", "Pull stock, place orders and lean on us for anything the floor needs."],
];

export default function Dealers() {
  return (
    <>
      <PageHero
        eyebrow="Dealers"
        title={<>Built to make you the easiest floor to buy.</>}
        intro="BPI is the wholesale partner behind thousands of Southeastern dealers. Deep stock, a dedicated rep, round-the-clock ordering and marketing support — so you spend less time sourcing and more time selling."
        img="/img/slide-counters.jpg"
      />

      <Section tone="ink">
        <dl className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/12 border border-white/12">
          {DEALER_VALUE.map((v) => (
            <div key={v.label} className="bg-ink p-[clamp(20px,2.4vw,34px)]">
              <dt className="display text-red text-[clamp(26px,3.2vw,44px)] leading-none">{v.metric}</dt>
              <dd className="mt-3">
                <span className="block text-[14px] text-white">{v.label}</span>
                <span className="mt-1 block text-[12.5px] leading-relaxed text-white/55 font-light">{v.desc}</span>
              </dd>
            </div>
          ))}
        </dl>
      </Section>

      <Section tone="light">
        <h2 className="font-extralight text-[clamp(24px,3vw,44px)] tracking-[-0.01em] mb-[clamp(28px,4vw,52px)]">
          What partnering with BPI gets you.
        </h2>
        <div className="grid sm:grid-cols-2 border-t border-l border-ink/15">
          {BENEFITS.map(([h, d]) => (
            <div key={h} className="border-b border-r border-ink/15 p-[clamp(24px,3vw,44px)]">
              <h3 className="display text-[clamp(18px,1.9vw,26px)] text-ink">{h}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-ink/65 font-light max-w-[42ch]">{d}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="ink-2">
        <h2 className="font-extralight text-[clamp(24px,3vw,44px)] tracking-[-0.01em] mb-[clamp(28px,4vw,52px)]">
          Becoming a dealer takes three steps.
        </h2>
        <ol className="grid md:grid-cols-3 gap-px bg-white/10 border border-white/10">
          {STEPS.map(([h, d], i) => (
            <li key={h} className="bg-ink-2 p-[clamp(24px,3vw,40px)]">
              <span className="display text-white/25 text-[clamp(30px,4vw,56px)] leading-none">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 display text-[clamp(18px,1.8vw,26px)]">{h}</h3>
              <p className="mt-3 text-[14px] leading-relaxed text-white/60 font-light">{d}</p>
            </li>
          ))}
        </ol>
        <div className="mt-12 flex flex-wrap gap-4">
          <Btn to="/become-a-dealer">Become a Dealer <Arrow /></Btn>
          <Btn to="/contact" variant="outline">Talk to a rep</Btn>
        </div>
      </Section>
    </>
  );
}

import { PageHero, Section, Btn, Arrow } from "../components/ui";
import { EVENTS } from "../data";

export default function Events() {
  return (
    <>
      <PageHero
        eyebrow="Events"
        title={<>Where to find us.</>}
        intro="Product showcases, dealer workshops and buying events across our branch network. Talk to your rep for the details on any date."
        img="/img/slide-counters.jpg"
      />
      <Section tone="ink">
        <ul className="border-t border-ink/10">
          {EVENTS.map((e) => (
            <li
              key={e.title}
              className="grid md:grid-cols-[180px_1fr_auto] gap-4 md:gap-8 items-baseline py-[clamp(24px,3vw,40px)] border-b border-ink/10"
            >
              <p className="display text-red text-[clamp(15px,1.4vw,19px)]">{e.date}</p>
              <div>
                <h2 className="font-normal text-[clamp(20px,2.2vw,30px)] tracking-[-0.01em]">
                  {e.title}
                </h2>
                <p className="mt-1.5 text-[13px] tracking-[0.06em] uppercase text-ink/45">
                  {e.location}
                </p>
                <p className="mt-3 text-[15px] leading-relaxed text-ink/60 font-normal max-w-[60ch]">
                  {e.desc}
                </p>
              </div>
              <Btn to="/contact" variant="ghost" className="justify-self-start md:justify-self-end">
                Ask your rep <Arrow />
              </Btn>
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}

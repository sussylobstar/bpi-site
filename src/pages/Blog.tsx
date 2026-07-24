import { Link } from "react-router-dom";
import { PageHero, Section } from "../components/ui";
import { POSTS } from "../data";

export default function Blog() {
  return (
    <>
      <PageHero
        eyebrow="Blog"
        title={<>Notes from the warehouse.</>}
        intro="Product knowledge, company news and the occasional hard-won lesson from six decades of moving flooring."
        img="/img/slide-carpet.jpg"
      />
      <Section tone="ink">
        <ul className="border-t border-ink/10">
          {POSTS.map((p) => (
            <li key={p.id} className="border-b border-ink/10">
              <Link
                to={`/blog/${p.id}`}
                className="group grid md:grid-cols-[160px_1fr_auto] gap-4 md:gap-8 items-baseline py-[clamp(24px,3vw,40px)]"
              >
                <p className="text-[12px] tracking-[0.14em] uppercase text-ink/45">
                  {p.category}
                  <span className="block mt-1 text-ink/35 tracking-normal normal-case">{p.date}</span>
                </p>
                <div>
                  <h2 className="font-normal text-[clamp(21px,2.4vw,32px)] leading-snug tracking-[-0.01em] group-hover:text-ink text-ink/80">
                    {p.title}
                  </h2>
                  <p className="mt-3 text-[15px] leading-relaxed text-ink/55 font-normal max-w-[62ch]">
                    {p.excerpt}
                  </p>
                </div>
                <span className="text-red transition-transform group-hover:translate-x-1 md:justify-self-end" aria-hidden>
                  →
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}

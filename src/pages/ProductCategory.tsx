import { useParams, Link } from "react-router-dom";
import { PageHero, Section, Btn, Arrow } from "../components/ui";
import RoomvoCallout from "../components/RoomvoCallout";
import { PRODUCTS } from "../data";
import NotFound from "./NotFound";

export default function ProductCategory() {
  const { slug } = useParams();
  const product = PRODUCTS.find((p) => p.slug === slug);
  if (!product) return <NotFound />;

  const others = PRODUCTS.filter((p) => p.slug !== slug);

  return (
    <>
      <PageHero
        eyebrow="Products"
        title={product.title}
        intro={product.intro}
        img={product.img ?? "/img/slide-tile.jpg"}
      />

      <Section tone="ink">
        <div className="grid gap-x-16 gap-y-12 lg:grid-cols-[1.3fr_1fr]">
          <div>
            <h2 className="font-extrabold text-[clamp(24px,2.8vw,38px)] leading-tight tracking-[-0.01em]">
              What we stock
            </h2>
            <ul className="mt-8 grid sm:grid-cols-2 border-t border-l border-ink/10">
              {product.highlights.map((h) => (
                <li
                  key={h}
                  className="border-b border-r border-ink/10 p-6 text-[15px] font-normal text-ink/70"
                >
                  {h}
                </li>
              ))}
            </ul>
          </div>

          <aside>
            <h2 className="text-[12px] tracking-[0.2em] uppercase text-ink/50">
              Vendors we carry
            </h2>
            <ul className="mt-5 space-y-3">
              {product.vendors.map((v) => (
                <li
                  key={v}
                  className="display text-[clamp(20px,2vw,28px)] text-ink/75"
                >
                  {v}
                </li>
              ))}
            </ul>
            <p className="mt-8 text-[13px] leading-relaxed text-ink/45 font-normal max-w-[38ch]">
              Line-item availability is rolling out as our ERP integration comes
              online. Your BPI rep can confirm stock and pricing on any product
              today.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Btn to="/contact">
                Check availability <Arrow />
              </Btn>
              <Btn to="/become-a-dealer" variant="outline">
                Become a Dealer
              </Btn>
            </div>
          </aside>
        </div>
      </Section>

      <RoomvoCallout product={product.title} />

      <Section tone="light">
        <h2 className="font-extrabold text-[clamp(22px,2.4vw,34px)] tracking-[-0.01em] mb-8">
          Other categories
        </h2>
        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 border-t border-l border-ink/15">
          {others.map((p) => (
            <li key={p.slug}>
              <Link
                to={`/products/${p.slug}`}
                className="group flex items-center justify-between gap-4 p-6 border-b border-r border-ink/15 hover:bg-light-2 transition-colors"
              >
                <span className="display text-[clamp(17px,1.7vw,24px)] text-ink">
                  {p.title}
                </span>
                <span className="text-red transition-transform group-hover:translate-x-1" aria-hidden>
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

import { Link } from "react-router-dom";
import { DEALER_VALUE } from "../data";

export default function Partner() {
  return (
    <section id="dealers" className="bg-light-2 text-ink">
      <div className="grid lg:grid-cols-2">
        {/* image side */}
        <div className="relative min-h-[340px] lg:min-h-full overflow-hidden">
          <img
            src="/img/slide-hardwood.jpg"
            alt="A finished hardwood interior supplied through a BPI dealer"
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(90deg, rgba(23,19,19,.35) 0%, rgba(23,19,19,.15) 55%, rgba(23,19,19,.72) 100%)",
            }}
          />
        </div>

        {/* content side */}
        <div className="gutter py-[clamp(64px,9vw,132px)] min-w-0">
          <div className="max-w-[560px]">
            <h2 className="font-extrabold text-[clamp(30px,4vw,58px)] leading-[1.06] tracking-[-0.01em] text-balance">
              Built to make you the easiest floor to buy.
            </h2>
            <p className="mt-6 text-[clamp(15px,1.15vw,17px)] leading-[1.7] text-ink/65 font-normal max-w-[48ch]">
              BPI is the wholesale partner behind thousands of Southeastern
              dealers. Deep local stock, a dedicated rep, 24/7 NETXPRESS
              ordering and co-op marketing support — so you spend less time
              sourcing and more time selling.
            </p>

            <dl className="mt-[clamp(36px,5vw,56px)] grid grid-cols-2 gap-px bg-ink/10 border border-ink/10">
              {DEALER_VALUE.map((v) => (
                <div key={v.label} className="bg-light-2 p-[clamp(18px,2vw,28px)]">
                  <dt className="display text-red text-[clamp(24px,3vw,40px)] leading-none">
                    {v.metric}
                  </dt>
                  <dd className="mt-2.5">
                    <span className="block text-[14px] font-normal text-ink">
                      {v.label}
                    </span>
                    <span className="mt-1 block text-[12.5px] leading-relaxed text-ink/55 font-normal">
                      {v.desc}
                    </span>
                  </dd>
                </div>
              ))}
            </dl>

            <div className="mt-[clamp(32px,4vw,48px)] flex flex-wrap items-center gap-4">
              <Link
                to="/become-a-dealer"
                className="inline-flex items-center gap-2.5 bg-red text-white px-7 py-[15px] text-[15px] font-normal hover:bg-red-deep transition-colors"
              >
                Become a Dealer <span aria-hidden>→</span>
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2.5 px-2 py-[15px] text-[15px] font-normal text-ink/70 hover:text-ink transition-colors"
              >
                Talk to a rep
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

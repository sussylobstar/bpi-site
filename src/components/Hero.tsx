import { VENDOR_BRANDS, WELCOME_VIDEO } from "../data";
import { Container } from "./ui";

/* Muted autoplay is the only autoplay browsers allow; loop needs `playlist` set
   to the same id. Controls stay on so visitors can unmute. */
const params = new URLSearchParams({
  autoplay: "1",
  mute: "1",
  loop: "1",
  playlist: WELCOME_VIDEO.youtubeId,
  rel: "0",
  playsinline: "1",
  modestbranding: "1",
});

export default function Hero() {
  return (
    <section className="bg-light text-ink pt-[clamp(112px,15vh,168px)] pb-[clamp(40px,5vw,72px)] gutter">
      <Container>
        <p className="flex items-center gap-4 text-[13px] tracking-[0.02em] text-ink/70 mb-6">
          <span className="h-px w-9 bg-red flex-none" aria-hidden />
          Wholesale surfacing · employee-owned since 1963
        </p>

        <h1 className="font-extrabold text-[clamp(34px,6vw,80px)] leading-[1.02] tracking-[-0.01em] text-balance max-w-[20ch]">
          {WELCOME_VIDEO.heroTitle}
        </h1>

        <div className="relative mt-[clamp(32px,4.5vw,64px)] aspect-video w-full overflow-hidden border border-ink/10 bg-light-2">
          <iframe
            className="absolute inset-0 h-full w-full"
            src={`https://www.youtube.com/embed/${WELCOME_VIDEO.youtubeId}?${params}`}
            title={WELCOME_VIDEO.title}
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        <p className="mt-6 text-center text-[13px] tracking-[0.02em] text-ink/55 font-normal">
          {WELCOME_VIDEO.caption}
        </p>
      </Container>

      {/* vendor marquee */}
      <div
        className="marquee-bar relative mt-[clamp(40px,5vw,72px)] h-[52px] flex items-center overflow-hidden border-y border-ink/10"
        style={{
          WebkitMaskImage:
            "linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)",
          maskImage:
            "linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)",
        }}
      >
        <span className="absolute left-0 top-0 bottom-0 z-[3] hidden sm:flex items-center pr-8 text-[10px] tracking-[0.24em] uppercase text-ink/55 font-semibold bg-light pointer-events-none">
          Our Vendors
        </span>
        <div className="marquee-track flex shrink-0 items-center gap-[clamp(30px,4vw,56px)] pl-[clamp(30px,4vw,56px)]">
          {[...VENDOR_BRANDS, ...VENDOR_BRANDS].map((b, i) =>
            b.logo && !b.stripWordmark ? (
              <img
                key={i}
                src={`/img/vendors/${b.logo}`}
                alt={b.name}
                className="vendor-logo-strip h-[22px] w-auto object-contain flex-none"
              />
            ) : (
              <span
                key={i}
                className="text-[13px] tracking-[0.14em] uppercase text-ink/55 font-medium whitespace-nowrap flex-none"
              >
                {b.name}
              </span>
            ),
          )}
        </div>
      </div>
    </section>
  );
}

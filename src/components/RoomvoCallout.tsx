import { Btn, Arrow, Container } from "./ui";

/* Roomvo flooring visualizer callout — used across relevant pages.
   TODO(BPI): point href at the real Roomvo room-visualizer URL, or
   embed the Roomvo widget script once the account is provisioned. */
const ROOMVO_URL = "https://www.roomvo.com/";

export default function RoomvoCallout({
  product,
}: {
  product?: string;
}) {
  return (
    <section className="gutter bg-red text-white py-[clamp(44px,6vw,76px)]">
      <Container>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div className="max-w-[52ch]">
            <p className="text-[12px] tracking-[0.2em] uppercase text-white/70">
              Visualize with Roomvo
            </p>
            <h2 className="mt-3 font-extrabold text-[clamp(24px,3vw,40px)] leading-[1.1] tracking-[-0.01em] text-balance">
              See {product ? product.toLowerCase() : "any floor"} in your own
              room before you buy.
            </h2>
            <p className="mt-4 text-[15px] leading-[1.7] text-white/85 font-normal">
              Upload a photo of your space and preview real products to scale
              with our Roomvo visualizer — no guesswork, no samples required.
            </p>
          </div>
          <div className="flex-none">
            <Btn
              href={ROOMVO_URL}
              className="!bg-white !text-ink hover:!bg-white/90"
            >
              Launch the visualizer <Arrow />
            </Btn>
          </div>
        </div>
      </Container>
    </section>
  );
}

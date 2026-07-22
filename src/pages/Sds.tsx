import { PageHero, Section, Btn, Arrow } from "../components/ui";

export default function Sds() {
  return (
    <>
      <PageHero
        eyebrow="Safety Data Sheets"
        title={<>Safety data, on demand.</>}
        intro="Access Safety Data Sheets for the products BPI distributes through our SDS portal. Search by product name, manufacturer or SKU."
        img="/img/slide-tile.jpg"
      />
      <Section tone="ink">
        <div className="max-w-[640px]">
          <p className="text-[clamp(15px,1.2vw,18px)] leading-[1.75] text-white/70 font-light">
            SDS documents are hosted in our compliance portal, kept current by
            the manufacturers themselves. Open the portal to search the full
            library and download the sheets you need.
          </p>
          <div className="mt-8">
            <Btn href="https://msdsonline.com" >
              Open the SDS portal <Arrow />
            </Btn>
          </div>
          <p className="mt-6 text-[13px] text-white/40 font-light">
            Can't find a sheet? Your BPI rep can pull it for you directly.
          </p>
        </div>
      </Section>
    </>
  );
}

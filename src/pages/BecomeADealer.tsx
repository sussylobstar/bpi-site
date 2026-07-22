import { PageHero, Section } from "../components/ui";
import DemoForm from "../components/DemoForm";
import type { Field } from "../components/DemoForm";

const FIELDS: Field[] = [
  { name: "company", label: "Business name", required: true, full: true },
  { name: "contact", label: "Contact name", required: true },
  { name: "title", label: "Title / role" },
  { name: "email", label: "Email", type: "email", required: true },
  { name: "phone", label: "Phone", type: "tel" },
  { name: "city", label: "City" },
  { name: "state", label: "State" },
  {
    name: "categories",
    label: "Primary categories",
    type: "select",
    options: ["Tile", "Hardwood", "Resilient", "Laminate", "Carpet + Cushion", "Counter Surfacing", "Full line"],
    full: true,
  },
  { name: "message", label: "Tell us about your business", type: "textarea", full: true, placeholder: "Storefront, years in business, the markets you serve…" },
];

export default function BecomeADealer() {
  return (
    <>
      <PageHero
        eyebrow="Become a Dealer"
        title={<>Open a BPI dealer account.</>}
        intro="Tell us a little about your business and a regional rep will reach out to get you set up — usually within one business day."
        img="/img/slide-tile.jpg"
      />
      <Section tone="ink">
        <div className="max-w-[860px]">
          <DemoForm
            fields={FIELDS}
            submitLabel="Submit application"
            successTitle="Application received."
            successBody="Thanks — a BPI regional rep will follow up shortly to open your account and get you onto NETXPRESS. (This is a concept demo, so nothing was actually submitted.)"
          />
        </div>
      </Section>
    </>
  );
}

import { PageHero, Section } from "../components/ui";
import DemoForm from "../components/DemoForm";
import type { Field } from "../components/DemoForm";
import { CONTACT, LOCATIONS } from "../data";

const FIELDS: Field[] = [
  { name: "name", label: "Name", required: true },
  { name: "company", label: "Company" },
  { name: "email", label: "Email", type: "email", required: true },
  { name: "phone", label: "Phone", type: "tel" },
  { name: "message", label: "How can we help?", type: "textarea", required: true, full: true },
];

const hq = LOCATIONS.find((l) => l.is_headquarters)!;

export default function Contact() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={<>Let's talk.</>}
        intro="Questions about product, availability or opening an account — reach the team directly, or send a note and we'll route it to the right branch."
        img="/img/slide-carpet.jpg"
      />
      <Section tone="ink">
        <div className="grid gap-x-16 gap-y-12 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <h2 className="font-extralight text-[clamp(22px,2.4vw,32px)] tracking-[-0.01em] mb-8">
              Send us a message
            </h2>
            <DemoForm
              fields={FIELDS}
              submitLabel="Send message"
              successTitle="Message sent."
              successBody="Thanks for reaching out — we'll get back to you shortly. (This is a concept demo, so nothing was actually submitted.)"
            />
          </div>

          <aside className="lg:pl-8 lg:border-l border-white/10">
            <h2 className="text-[12px] tracking-[0.2em] uppercase text-white/50">
              World Headquarters
            </h2>
            <address className="mt-4 not-italic text-[15px] leading-relaxed text-white/75 font-light">
              {hq.address}
              <br />
              {hq.city}, {hq.state} {hq.zip_code}
            </address>
            <dl className="mt-6 space-y-3 text-[15px] font-light">
              <div>
                <dt className="text-[12px] tracking-[0.16em] uppercase text-white/45">Phone</dt>
                <dd>
                  <a href={CONTACT.phoneHref} className="text-white/85 hover:text-red transition-colors">
                    {CONTACT.phone}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-[12px] tracking-[0.16em] uppercase text-white/45">Email</dt>
                <dd>
                  <a href={`mailto:${CONTACT.email}`} className="text-white/85 hover:text-red transition-colors">
                    {CONTACT.email}
                  </a>
                </dd>
              </div>
            </dl>
            <p className="mt-8 text-[13px] leading-relaxed text-white/45 font-light max-w-[36ch]">
              Looking for a specific branch? All thirteen locations, with direct
              phone numbers, are listed on the home page.
            </p>
          </aside>
        </div>
      </Section>
    </>
  );
}

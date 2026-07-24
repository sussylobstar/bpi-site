import { Btn, Arrow } from "../components/ui";

export default function NotFound() {
  return (
    <section className="min-h-[70vh] grid place-items-center bg-light gutter py-[clamp(120px,18vh,220px)] text-center">
      <div>
        <p className="display text-red text-[clamp(60px,12vw,140px)] leading-none">404</p>
        <h1 className="mt-4 font-extrabold text-[clamp(22px,3vw,36px)] tracking-[-0.01em]">
          We couldn't find that page.
        </h1>
        <p className="mt-4 text-[15px] text-ink/55 font-normal max-w-[42ch] mx-auto">
          The page may have moved. Head back home or browse our product
          categories.
        </p>
        <div className="mt-8 flex flex-wrap gap-4 justify-center">
          <Btn to="/">Back home <Arrow /></Btn>
          <Btn to="/products" variant="outline">Browse products</Btn>
        </div>
      </div>
    </section>
  );
}

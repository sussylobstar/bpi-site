import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import type { ReactNode } from "react";

/* Scrolls to top on every route change */
export function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-[1400px] ${className}`}>
      {children}
    </div>
  );
}

/* Dark page hero used on every interior page — keeps the header legible at top */
export function PageHero({
  eyebrow,
  title,
  intro,
  img,
}: {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  img?: string;
}) {
  return (
    <header className="relative isolate overflow-hidden bg-ink pt-[clamp(120px,16vh,180px)] pb-[clamp(48px,7vw,96px)] gutter">
      {img && (
        <>
          <img
            src={img}
            alt=""
            className="absolute inset-0 h-full w-full object-cover opacity-40"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(0deg, rgba(13,11,11,.96) 0%, rgba(13,11,11,.6) 60%, rgba(13,11,11,.55) 100%)",
            }}
          />
        </>
      )}
      <Container className="relative">
        {eyebrow && (
          <p className="flex items-center gap-4 text-[13px] tracking-[0.02em] text-white/80 mb-6">
            <span className="h-px w-9 bg-red flex-none" aria-hidden />
            {eyebrow}
          </p>
        )}
        <h1 className="font-extralight text-[clamp(34px,6vw,84px)] leading-[1.02] tracking-[-0.01em] text-balance max-w-[18ch]">
          {title}
        </h1>
        {intro && (
          <p className="mt-6 text-[clamp(15px,1.3vw,19px)] leading-[1.7] text-white/70 font-light max-w-[62ch]">
            {intro}
          </p>
        )}
      </Container>
    </header>
  );
}

/* Section wrapper with a band background */
export function Section({
  children,
  tone = "ink",
  className = "",
  id,
}: {
  children: ReactNode;
  tone?: "ink" | "ink-2" | "light";
  className?: string;
  id?: string;
}) {
  const bg =
    tone === "light"
      ? "bg-light text-ink"
      : tone === "ink-2"
        ? "bg-ink-2 text-white"
        : "bg-ink text-white";
  return (
    <section
      id={id}
      className={`gutter py-[clamp(64px,9vw,132px)] ${bg} ${className}`}
    >
      <Container>{children}</Container>
    </section>
  );
}

type BtnProps = {
  to?: string;
  href?: string;
  children: ReactNode;
  variant?: "solid" | "outline" | "ghost";
  className?: string;
  type?: "button" | "submit";
  onClick?: () => void;
  tone?: "onDark" | "onLight";
};

export function Btn({
  to,
  href,
  children,
  variant = "solid",
  className = "",
  type = "button",
  onClick,
  tone = "onDark",
}: BtnProps) {
  const base =
    "inline-flex items-center gap-2.5 px-7 py-[15px] text-[15px] font-normal transition-colors";
  const styles = {
    solid: "bg-red text-white hover:bg-red-deep",
    outline:
      tone === "onLight"
        ? "border border-ink/30 text-ink hover:bg-ink hover:text-white"
        : "border border-white/50 text-white hover:bg-white hover:text-ink",
    ghost:
      tone === "onLight"
        ? "px-2 text-ink/70 hover:text-ink"
        : "px-2 text-white/80 hover:text-white",
  }[variant];
  const cls = `${base} ${styles} ${className}`;

  if (to) {
    return (
      <Link to={to} className={cls} onClick={onClick}>
        {children}
      </Link>
    );
  }
  if (href) {
    return (
      <a
        href={href}
        className={cls}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      >
        {children}
      </a>
    );
  }
  return (
    <button type={type} className={cls} onClick={onClick}>
      {children}
    </button>
  );
}

export function Arrow() {
  return <span aria-hidden>→</span>;
}

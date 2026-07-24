import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import type { ReactNode } from "react";
import { scrollTopInstant, scrollToTarget } from "../lib/lenis";

/* Scrolls to top on route change, or to the hash target when present */
export function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      requestAnimationFrame(() => scrollToTarget(hash));
    } else {
      scrollTopInstant();
    }
  }, [pathname, hash]);
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
    <header className="relative isolate overflow-hidden bg-light pt-[clamp(120px,16vh,180px)] pb-[clamp(48px,7vw,96px)] gutter">
      {img && (
        <>
          <img
            src={img}
            alt=""
            className="absolute inset-0 h-full w-full object-cover opacity-[0.14]"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(0deg, #fff 0%, rgba(255,255,255,.72) 55%, rgba(255,255,255,.55) 100%)",
            }}
          />
        </>
      )}
      <Container className="relative">
        {eyebrow && (
          <p className="flex items-center gap-4 text-[13px] tracking-[0.02em] text-ink/70 mb-6">
            <span className="h-px w-9 bg-red flex-none" aria-hidden />
            {eyebrow}
          </p>
        )}
        <h1 className="font-extrabold text-[clamp(34px,6vw,84px)] leading-[1.02] tracking-[-0.01em] text-balance max-w-[18ch]">
          {title}
        </h1>
        {intro && (
          <p className="mt-6 text-[clamp(15px,1.3vw,19px)] leading-[1.7] text-ink/65 font-normal max-w-[62ch]">
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
        ? "bg-light-2 text-ink"
        : "bg-light text-ink";
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
  // Site is a single light theme now — tone kept for API compatibility.
  void tone;
  const styles = {
    solid: "bg-red text-white hover:bg-red-deep",
    outline: "border border-ink/30 text-ink hover:bg-ink hover:text-white",
    ghost: "px-2 text-ink/70 hover:text-ink",
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

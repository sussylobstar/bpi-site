import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { NAV } from "../data";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        scrolled
          ? "bg-ink/90 backdrop-blur-md border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="gutter flex items-center justify-between py-[clamp(14px,2.2vw,22px)]">
        <Link to="/" className="flex items-center gap-3" aria-label="BPI home">
          <img
            src="/img/bpi-logo.png"
            alt="Building Plastics Inc."
            className="h-10 w-10 rounded-[3px]"
            width={40}
            height={40}
          />
        </Link>

        <nav
          className="hidden lg:flex items-center gap-[clamp(16px,1.8vw,30px)]"
          aria-label="Primary"
        >
          {NAV.map((n) => (
            <Link
              key={n.href}
              to={n.href}
              className="text-[14px] font-normal text-white/80 hover:text-white transition-colors"
            >
              {n.label}
            </Link>
          ))}
          <Link
            to="/become-a-dealer"
            className="text-[13px] font-normal border border-white/50 px-[18px] py-[9px] hover:bg-red hover:border-red transition-colors"
          >
            Become a Dealer
          </Link>
        </nav>

        {/* mobile toggle */}
        <button
          className="lg:hidden inline-flex flex-col justify-center gap-[5px] p-2 -mr-2"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span
            className={`block h-[1.5px] w-6 bg-white transition-transform ${
              open ? "translate-y-[6.5px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-[1.5px] w-6 bg-white transition-opacity ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-[1.5px] w-6 bg-white transition-transform ${
              open ? "-translate-y-[6.5px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* mobile drawer */}
      {open && (
        <nav
          className="lg:hidden gutter pb-8 pt-2 bg-ink/95 backdrop-blur-md border-b border-white/10"
          aria-label="Primary mobile"
        >
          <ul className="flex flex-col">
            {NAV.map((n) => (
              <li key={n.href}>
                <Link
                  to={n.href}
                  className="block py-3 text-[18px] font-light text-white/85 hover:text-white border-b border-white/5"
                  onClick={() => setOpen(false)}
                >
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            to="/become-a-dealer"
            className="mt-5 inline-flex bg-red px-6 py-3 text-[15px] font-normal"
            onClick={() => setOpen(false)}
          >
            Become a Dealer
          </Link>
        </nav>
      )}
    </header>
  );
}

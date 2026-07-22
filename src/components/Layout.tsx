import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { ScrollToTop } from "./ui";
import { startLenis, stopLenis } from "../lib/lenis";
import { useSeo } from "../lib/seo";

export default function Layout() {
  useSeo();

  useEffect(() => {
    startLenis();
    return stopLenis;
  }, []);

  return (
    <>
      <ScrollToTop />
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:z-[60] focus:left-4 focus:top-4 focus:bg-red focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

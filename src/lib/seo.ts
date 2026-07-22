import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { PRODUCTS, POSTS } from "../data";

export type Meta = { title: string; description: string };

const BRAND = "Building Plastics Inc.";

const STATIC: Record<string, Meta> = {
  "/": {
    title: `${BRAND} | Wholesale Surfacing & Flooring Distributor — Southeast US`,
    description:
      "Employee-owned wholesale distributor of tile, hardwood, resilient, laminate, carpet and counter surfacing across the US Southeast since 1963. 13 branches, 800+ product lines.",
  },
  "/products": {
    title: `Products — Tile, Hardwood, Resilient, Carpet & More | ${BRAND}`,
    description:
      "Browse BPI's wholesale flooring and surfacing catalog: tile, hardwood, resilient, laminate, carpet + cushion, counter surfacing and installation supplies.",
  },
  "/about-bpi": {
    title: `About BPI — Employee-Owned Flooring Distributor Since 1963`,
    description:
      "Building Plastics Inc. is an employee-owned wholesale surfacing and flooring distributor serving dealers, contractors and designers across the Southeast for 60+ years.",
  },
  "/dealers": {
    title: `Become a BPI Dealer — Wholesale Flooring Partner | ${BRAND}`,
    description:
      "Partner with BPI: 800+ product lines, 13 distribution centers, 24/7 NETXPRESS ordering, a dedicated rep and co-op marketing support for flooring dealers.",
  },
  "/become-a-dealer": {
    title: `Open a Dealer Account | ${BRAND}`,
    description:
      "Apply to become a Building Plastics Inc. dealer. Tell us about your business and a regional rep will get your wholesale flooring account set up.",
  },
  "/resources": {
    title: `Resources — Catalogs, Forms & Sales Tools | ${BRAND}`,
    description:
      "BPI dealer resources: digital product catalogs, promotions, forms and documents, sales tools and the rep portal.",
  },
  "/events": {
    title: `Events — Product Showcases & Dealer Workshops | ${BRAND}`,
    description:
      "BPI product showcases, dealer business workshops and buying events across our Southeastern branch network.",
  },
  "/sds": {
    title: `Safety Data Sheets (SDS) | ${BRAND}`,
    description:
      "Access Safety Data Sheets for products distributed by Building Plastics Inc. Search the SDS portal by product name, manufacturer or SKU.",
  },
  "/contact": {
    title: `Contact BPI — Wholesale Flooring Distributor | ${BRAND}`,
    description:
      "Contact Building Plastics Inc. for product, availability or account questions. HQ in Memphis, TN with 13 branches across the Southeast.",
  },
  "/careers": {
    title: `Careers at BPI — Employee-Owned Since 1963 | ${BRAND}`,
    description:
      "Build a career and a stake in it. BPI hires across warehouse, delivery, sales and operations at branches throughout the Southeast.",
  },
  "/blog": {
    title: `Blog — Product Knowledge & Company News | ${BRAND}`,
    description:
      "Flooring product knowledge, company news and lessons from six decades in wholesale surfacing distribution.",
  },
};

const FALLBACK: Meta = {
  title: `${BRAND} | Wholesale Surfacing & Flooring`,
  description:
    "Employee-owned wholesale surfacing and flooring distributor across the US Southeast since 1963.",
};

export function resolveSeo(pathname: string): Meta {
  const path = pathname.replace(/\/+$/, "") || "/";
  if (STATIC[path]) return STATIC[path];

  if (path.startsWith("/products/")) {
    const slug = path.split("/")[2];
    const p = PRODUCTS.find((x) => x.slug === slug);
    if (p)
      return {
        title: `${p.title} — Wholesale ${p.title} | ${BRAND}`,
        description: p.intro,
      };
  }
  if (path.startsWith("/blog/")) {
    const id = path.split("/")[2];
    const post = POSTS.find((x) => String(x.id) === id);
    if (post)
      return { title: `${post.title} | BPI Blog`, description: post.excerpt };
  }
  return FALLBACK;
}

function setMeta({ title, description }: Meta) {
  document.title = title;
  let tag = document.querySelector('meta[name="description"]');
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute("name", "description");
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", description);
}

/* Applies per-route <title> + meta description. Mounted once in Layout. */
export function useSeo() {
  const { pathname } = useLocation();
  useEffect(() => {
    setMeta(resolveSeo(pathname));
  }, [pathname]);
}

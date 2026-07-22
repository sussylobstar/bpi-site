// Real BPI content. Locations pulled live from
// bpi-api.new901.io/api/v1/core/locations/ (2026-07-22).

export type Slide = {
  key: string;
  word: string; // hero word-stack label
  img: string;
  category: string; // legend heading
  desc: string; // legend body
  href: string;
};

export const SLIDES: Slide[] = [
  {
    key: "tile",
    word: "Tile",
    img: "/img/slide-tile.jpg",
    category: "Porcelain & Ceramic Tile",
    desc: "Wall, floor and large-format porcelain from the Southeast's leading surfacing distributor.",
    href: "/products/tile",
  },
  {
    key: "hardwood",
    word: "Hardwood",
    img: "/img/slide-hardwood.jpg",
    category: "Hardwood Flooring",
    desc: "Solid and engineered hardwood — Bruce, Mullican, Homerwood, Lifecore and more.",
    href: "/products/hardwood",
  },
  {
    key: "counters",
    word: "Countertops",
    img: "/img/slide-counters.jpg",
    category: "Counter Surfacing",
    desc: "Quartz, porcelain panels and decorative surfaces for kitchen and bath.",
    href: "/products/counter-surfacing",
  },
  {
    key: "carpet",
    word: "Carpet",
    img: "/img/slide-carpet.jpg",
    category: "Carpet & Cushion",
    desc: "Residential and commercial carpet, cushion, and complete installation supplies.",
    href: "/products/carpet-cushion",
  },
];

export type Category = {
  title: string;
  blurb: string;
  img?: string;
  href: string;
};

export const CATEGORIES: Category[] = [
  {
    title: "Tile",
    blurb: "Porcelain, ceramic and large-format wall & floor tile.",
    img: "/img/slide-tile.jpg",
    href: "/products/tile",
  },
  {
    title: "Hardwood",
    blurb: "Solid and engineered hardwood in dozens of species and finishes.",
    img: "/img/slide-hardwood.jpg",
    href: "/products/hardwood",
  },
  {
    title: "Counter Surfacing",
    blurb: "Quartz and porcelain surfaces for kitchen, bath and commercial.",
    img: "/img/slide-counters.jpg",
    href: "/products/counter-surfacing",
  },
  {
    title: "Carpet + Cushion",
    blurb: "Residential and commercial carpet, broadloom and cushion.",
    img: "/img/slide-carpet.jpg",
    href: "/products/carpet-cushion",
  },
  {
    title: "Resilient",
    blurb: "Luxury vinyl plank, tile and sheet for high-traffic spaces.",
    href: "/products/resilient",
  },
  {
    title: "Laminate",
    blurb: "Durable, water-resistant laminate at every price point.",
    href: "/products/laminate",
  },
  {
    title: "Installation Supplies",
    blurb: "Adhesives, trims, underlayment and everything to finish the job.",
    href: "/products/installation-supplies",
  },
];

export type ProductDetail = {
  slug: string;
  title: string;
  intro: string;
  img?: string;
  highlights: string[];
  vendors: string[];
};

export const PRODUCTS: ProductDetail[] = [
  {
    slug: "tile",
    title: "Tile",
    intro:
      "Porcelain, ceramic and large-format tile for floors, walls and feature surfaces — residential and commercial.",
    img: "/img/slide-tile.jpg",
    highlights: [
      "Glazed & through-body porcelain",
      "Large-format and gauged panels",
      "Wall tile, mosaics and trim",
      "Setting materials and grout",
    ],
    vendors: ["Daltile", "Marazzi", "American Olean", "Emser"],
  },
  {
    slug: "hardwood",
    title: "Hardwood",
    intro:
      "Solid and engineered hardwood across dozens of species, widths and finishes — from value lines to wide-plank designer collections.",
    img: "/img/slide-hardwood.jpg",
    highlights: [
      "Solid & engineered construction",
      "Prefinished and site-finished",
      "Wide-plank and character grades",
      "Domestic and exotic species",
    ],
    vendors: ["Bruce", "Mullican", "Homerwood", "Lifecore"],
  },
  {
    slug: "counter-surfacing",
    title: "Counter Surfacing",
    intro:
      "Quartz, porcelain panels and decorative surfaces engineered for kitchen, bath and commercial installations.",
    img: "/img/slide-counters.jpg",
    highlights: [
      "Engineered quartz slabs",
      "Large-format porcelain panels",
      "Edge profiles and fabrication supplies",
      "Residential and commercial grades",
    ],
    vendors: ["Prestige", "MSI", "Wilsonart"],
  },
  {
    slug: "carpet-cushion",
    title: "Carpet + Cushion",
    intro:
      "Residential and commercial carpet, broadloom and cushion — plus everything needed to install it right.",
    img: "/img/slide-carpet.jpg",
    highlights: [
      "Residential broadloom",
      "Commercial modular & broadloom",
      "Cushion and pad",
      "Tack strip, seam tape and tools",
    ],
    vendors: ["Shaw", "Mohawk", "Mannington", "TMBR."],
  },
  {
    slug: "resilient",
    title: "Resilient",
    intro:
      "Luxury vinyl plank and tile, sheet vinyl and rigid-core flooring built for high-traffic, moisture-prone spaces.",
    highlights: [
      "Rigid-core (SPC/WPC) LVP",
      "Glue-down and floating LVT",
      "Sheet vinyl",
      "Waterproof, commercial-rated lines",
    ],
    vendors: ["Mannington", "Shaw", "Mohawk"],
  },
  {
    slug: "laminate",
    title: "Laminate",
    intro:
      "Durable, water-resistant laminate flooring at every price point, with realistic wood and stone visuals.",
    highlights: [
      "Water-resistant cores",
      "AC3–AC5 wear ratings",
      "Attached-pad options",
      "Wood and stone visuals",
    ],
    vendors: ["Mohawk", "Shaw"],
  },
  {
    slug: "installation-supplies",
    title: "Installation Supplies",
    intro:
      "The consumables and sundries that finish every job — adhesives, trims, underlayment, tools and more.",
    highlights: [
      "Adhesives and self-leveling",
      "Trims, transitions and moldings",
      "Underlayment and moisture barrier",
      "Trowels, blades and jobsite tools",
    ],
    vendors: ["Bostik", "Roberts", "MAPEI"],
  },
];

export type EventItem = {
  date: string;
  title: string;
  location: string;
  desc: string;
};

export const EVENTS: EventItem[] = [
  {
    date: "Oct 8, 2026",
    title: "Fall Product Showcase — Memphis",
    location: "World Headquarters · Memphis, TN",
    desc: "A walk-through of the season's new tile, hardwood and resilient introductions with the vendors behind them.",
  },
  {
    date: "Nov 12, 2026",
    title: "Dealer Business Workshop",
    location: "Nashville Branch · Nashville, TN",
    desc: "Merchandising, NETXPRESS ordering and co-op marketing — a working session for dealer principals and staff.",
  },
  {
    date: "Jan 21, 2027",
    title: "Winter Buying Event",
    location: "All branches",
    desc: "Early-season program pricing across every category. Talk to your rep for the branch schedule.",
  },
];

export type Post = {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  body: string[];
};

export const POSTS: Post[] = [
  {
    id: 4,
    title: "Choosing between rigid-core and glue-down LVP",
    excerpt:
      "Both are 'luxury vinyl,' but they solve different jobsite problems. Here's how we help dealers spec the right one.",
    date: "Jul 2026",
    category: "Product Knowledge",
    body: [
      "Luxury vinyl has become the default answer for moisture-prone, high-traffic residential spaces — but 'LVP' covers two very different installation systems, and the right choice depends far more on the substrate than on the showroom sample.",
      "Rigid-core (SPC and WPC) floats over most subfloors with minimal prep, hides minor imperfections and installs fast. Glue-down LVT is thinner, quieter underfoot and dimensionally stable in spaces with big temperature swings — sunrooms, entryways, light commercial — but it demands a flat, clean, dry substrate.",
      "When a dealer calls, the first question we ask isn't about color. It's about the slab: how flat is it, how much moisture, and how much prep is in the budget. Get that right and the product almost picks itself.",
    ],
  },
  {
    id: 5,
    title: "Why employee ownership shows up in your delivery",
    excerpt:
      "BPI has been employee-owned since 1963. That structure isn't just a line in the footer — dealers feel it at the dock.",
    date: "Jun 2026",
    category: "Company",
    body: [
      "When every associate has a stake in the company, service stops being someone else's problem. The person pulling your order, the driver on the route, the rep answering the phone — they're owners.",
      "Six decades in, that's the quiet advantage behind our fill rates and our fewer-surprises delivery record. It's hard to teach ownership. It's easier to hire for it and let the structure do the rest.",
    ],
  },
  {
    id: 6,
    title: "Large-format porcelain: what to check before you sell it",
    excerpt:
      "Gauged porcelain panels open up beautiful designs — and new failure modes. A quick pre-sale checklist for dealers.",
    date: "May 2026",
    category: "Product Knowledge",
    body: [
      "Gauged porcelain panels let your customers wrap a whole wall or waterfall a countertop in a single continuous surface. They also punish shortcuts in setting materials, substrate flatness and handling.",
      "Before you sell a panel job, confirm the installer has panel-rated tools and training, the substrate meets flatness tolerance, and the setting system is manufacturer-matched. We stock the full system — not just the panel — for exactly this reason.",
    ],
  },
];

export const VENDORS = [
  "Mannington",
  "Bruce",
  "Mullican",
  "Lifecore",
  "Homerwood",
  "Prestige",
  "TMBR.",
  "Daltile",
  "Shaw",
  "Mohawk",
];

export type DealerValue = {
  metric: string;
  label: string;
  desc: string;
};

export const DEALER_VALUE: DealerValue[] = [
  {
    metric: "800+",
    label: "Product lines",
    desc: "One relationship for tile, hardwood, resilient, carpet, counters and supplies.",
  },
  {
    metric: "13",
    label: "Distribution centers",
    desc: "Across seven Southeastern states, stock is close to your jobsite.",
  },
  {
    metric: "24 / 7",
    label: "NETXPRESS ordering",
    desc: "Check stock, place orders and track deliveries around the clock.",
  },
  {
    metric: "1963",
    label: "Employee-owned since",
    desc: "Six decades of dealer relationships, and every associate has a stake.",
  },
];

export type Location = {
  id: number;
  city: string;
  state: string;
  label: string;
  address: string;
  zip_code: string;
  phone: string;
  is_headquarters: boolean;
};

export const LOCATIONS: Location[] = [
  { id: 14, city: "Memphis", state: "TN", label: "World Headquarters", address: "3251 Players Club Parkway", zip_code: "38125", phone: "(901) 744-6201", is_headquarters: true },
  { id: 15, city: "Memphis", state: "TN", label: "Distribution Center", address: "3263 Sharpe Ave", zip_code: "38111", phone: "(901) 744-6201", is_headquarters: false },
  { id: 23, city: "Nashville", state: "TN", label: "Nashville", address: "725 Massman Drive", zip_code: "37210", phone: "(615) 457-8510", is_headquarters: false },
  { id: 26, city: "Birmingham", state: "AL", label: "Birmingham", address: "2048 Center Point Pkwy", zip_code: "35215", phone: "(205) 558-2710", is_headquarters: false },
  { id: 25, city: "Huntsville", state: "AL", label: "Huntsville", address: "215 Swancott Road, Suite E", zip_code: "35806", phone: "(256) 489-3663", is_headquarters: false },
  { id: 18, city: "Mobile", state: "AL", label: "Mobile", address: "5270 Bldg. B, Business Pkwy", zip_code: "36582", phone: "(251) 443-3433", is_headquarters: false },
  { id: 16, city: "Little Rock", state: "AR", label: "Little Rock", address: "1316 North Hills Blvd, Suite 1", zip_code: "72206", phone: "(501) 490-1780", is_headquarters: false },
  { id: 24, city: "New Orleans", state: "LA", label: "New Orleans", address: "2829 Peoples Ave, Suite B", zip_code: "70058", phone: "(504) 227-0477", is_headquarters: false },
  { id: 17, city: "Jackson", state: "MS", label: "Jackson", address: "2295 Boling Street", zip_code: "39213", phone: "(601) 981-3771", is_headquarters: false },
  { id: 20, city: "Austin", state: "TX", label: "Austin", address: "2519 Scarbrough Dr, STE 240", zip_code: "78728", phone: "(512) 989-2710", is_headquarters: false },
  { id: 19, city: "Fort Worth", state: "TX", label: "Dallas / Fort Worth", address: "4251 Fleetwood Rd", zip_code: "76155", phone: "(817) 571-3203", is_headquarters: false },
  { id: 21, city: "Houston", state: "TX", label: "Houston", address: "10375 Tanner Road", zip_code: "77041", phone: "(713) 466-7171", is_headquarters: false },
  { id: 22, city: "San Antonio", state: "TX", label: "San Antonio", address: "4902 Perrin Creek", zip_code: "78217", phone: "(210) 599-0772", is_headquarters: false },
];

export const NAV = [
  { label: "Products", href: "/products" },
  { label: "About", href: "/about-bpi" },
  { label: "Dealers", href: "/dealers" },
  { label: "Resources", href: "/resources" },
  { label: "Events", href: "/events" },
  { label: "SDS", href: "/sds" },
  { label: "Contact", href: "/contact" },
  { label: "Careers", href: "/careers" },
];

export const CONTACT = {
  address: "3251 Players Club Parkway, Memphis, TN 38125",
  phone: "(901) 744-6201",
  phoneHref: "tel:+19017446201",
  email: "info@bpiteam.com",
  facebook: "https://facebook.com/bpiteam",
  instagram: "https://instagram.com/bpiteam",
  linkedin: "https://www.linkedin.com/company/building-plastics-inc",
};

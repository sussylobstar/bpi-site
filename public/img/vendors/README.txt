BPI vendor logos
================

The homepage "brands your customers ask for" carousel shows the official
logo for each vendor if a file exists here, and falls back to a clean text
wordmark otherwise (so there are never broken images).

HOW TO ADD A LOGO
-----------------
Drop a file named <slug>.svg (preferred) or edit the component to use .png,
using the slugs below. SVG is best (crisp at any size). Transparent
background. The logo is shown muted/grayscale and colorizes on hover, so a
single-color or full-color logo both work.

Recommended: ~200px wide, transparent PNG/SVG, trimmed of extra whitespace.

Then set `logo: true` for that brand in VENDOR_BRANDS (src/data.ts) so the
image renders instead of the wordmark. (The flag avoids 404s for brands that
don't have a file yet.)

EXPECTED FILENAMES  (slug  ->  official source)
-----------------------------------------------
mannington.svg   https://www.mannington.com  (press / brand assets)
bruce.svg        https://www.bruce.com
mullican.svg     https://www.mullicanflooring.com
lifecore.svg     https://www.lifecoreflooring.com
homerwood.svg    https://www.homerwood.com
prestige.svg     (confirm which "Prestige" brand BPI carries)
tmbr.svg         (confirm TMBR. brand source)
daltile.svg      https://www.daltile.com
shaw.svg         https://shawfloors.com
mohawk.svg       https://www.mohawkflooring.com

NOTE
----
These are the vendors' registered trademarks. As an authorized BPI
distributor you may display them to identify the products you carry; use the
official brand-kit files (from each vendor or BPI marketing) rather than
scraped versions so colors/proportions are correct.

If a component uses .png instead of .svg, update the extension in
src/components/Vendors.tsx (VendorLogo `src`).

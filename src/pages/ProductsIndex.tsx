import { PageHero } from "../components/ui";
import Products from "../components/Products";
import RoomvoCallout from "../components/RoomvoCallout";

export default function ProductsIndex() {
  return (
    <>
      <PageHero
        eyebrow="Products"
        title={<>Everything that goes on the floor.</>}
        intro="Seven categories, hundreds of lines, one purchase order. Tile, hardwood, resilient, laminate, carpet, counter surfacing and the supplies to install all of it — stocked across thirteen Southeastern branches."
        img="/img/slide-tile.jpg"
      />
      <Products />
      <RoomvoCallout />
    </>
  );
}

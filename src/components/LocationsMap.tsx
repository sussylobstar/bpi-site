import { useEffect, useRef } from "react";
import type { MutableRefObject } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import { LOCATIONS } from "../data";

function pinIcon(isHq: boolean, isActive: boolean) {
  return L.divIcon({
    className: "bpi-pin-wrap",
    html: `<span class="bpi-pin${isHq ? " hq" : ""}${isActive ? " active" : ""}"></span>`,
    iconSize: [16, 16],
    iconAnchor: [8, 8],
    popupAnchor: [0, -10],
  });
}

/* Fit all markers into view on first render */
function FitBounds() {
  const map = useMap();
  useEffect(() => {
    const bounds = L.latLngBounds(
      LOCATIONS.map((l) => [l.lat, l.lng] as [number, number]),
    );
    const fit = () => {
      map.invalidateSize();
      map.fitBounds(bounds, { padding: [48, 48] });
    };
    fit();
    // re-run after layout settles (map often mounts mid-scroll with a stale size)
    const t1 = window.setTimeout(fit, 300);
    const t2 = window.setTimeout(() => map.invalidateSize(), 900);
    return () => {
      window.clearTimeout(t1);
      window.clearTimeout(t2);
    };
  }, [map]);
  return null;
}

/* Fly to the selected location and open its popup */
function Flyer({
  selectedId,
  markerRefs,
}: {
  selectedId: number | null;
  markerRefs: MutableRefObject<Record<number, L.Marker>>;
}) {
  const map = useMap();
  useEffect(() => {
    if (selectedId == null) return;
    const loc = LOCATIONS.find((l) => l.id === selectedId);
    if (!loc) return;
    map.flyTo([loc.lat, loc.lng], 9, { duration: 1.1 });
    const m = markerRefs.current[selectedId];
    if (m) window.setTimeout(() => m.openPopup(), 350);
  }, [selectedId, map, markerRefs]);
  return null;
}

const directions = (lat: number, lng: number) =>
  `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`;
const telHref = (p: string) => "tel:+1" + p.replace(/[^\d]/g, "");

export default function LocationsMap({
  selectedId,
  onSelect,
}: {
  selectedId: number | null;
  onSelect: (id: number) => void;
}) {
  const markerRefs = useRef<Record<number, L.Marker>>({});

  return (
    <MapContainer
      center={[32.8, -90]}
      zoom={5}
      scrollWheelZoom={true}
      wheelPxPerZoomLevel={90}
      className="h-full w-full bg-light-2"
      attributionControl
    >
      <TileLayer
        url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>'
        subdomains="abcd"
        maxZoom={19}
      />
      <FitBounds />
      <Flyer selectedId={selectedId} markerRefs={markerRefs} />

      {LOCATIONS.map((loc) => (
        <Marker
          key={loc.id}
          position={[loc.lat, loc.lng]}
          icon={pinIcon(loc.is_headquarters, loc.id === selectedId)}
          eventHandlers={{ click: () => onSelect(loc.id) }}
          ref={(m) => {
            if (m) markerRefs.current[loc.id] = m;
          }}
        >
          <Popup>
            <div className="bpi-popup">
              {loc.is_headquarters && (
                <span className="bpi-popup__tag">World Headquarters</span>
              )}
              <h3 className="bpi-popup__city">{loc.city}</h3>
              <p className="bpi-popup__addr">
                {loc.address}
                <br />
                {loc.city}, {loc.state} {loc.zip_code}
              </p>
              <a className="bpi-popup__phone" href={telHref(loc.phone)}>
                {loc.phone}
              </a>
              <a
                className="bpi-popup__dir"
                href={directions(loc.lat, loc.lng)}
                target="_blank"
                rel="noopener noreferrer"
              >
                Get directions →
              </a>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}

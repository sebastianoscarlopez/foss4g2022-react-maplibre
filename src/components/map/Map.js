import maplibregl from "maplibre-gl";
import {} from "maplibre-gl";
import { useEffect, Children, cloneElement } from "react";
import { useRefCallback } from "../../hooks";
import { BaseStyles } from "./BaseStyles";
import "maplibre-gl/dist/maplibre-gl.css";

const MapInject = (children, map) =>
  Children.map(children, (child) => cloneElement(child, { map }));

export const Map = ({ children }) => {
  const [containerRef, setContainerRef] = useRefCallback();
  const [mapRef, setMapRef] = useRefCallback();

  useEffect(() => {
    if (containerRef) {
      console.log("Map creation");
      setMapRef(
        new maplibregl.Map({
          container: containerRef,
          style: "https://demotiles.maplibre.org/style.json", // stylesheet location
          // center: [-87.61694, 41.86625], //Chicago
          // center: [-58.381507, -34.603344], // Buenos aires
          center: [-99.199848, 19.330421], // Mexico City
          // center: [-74.5, 40], // Layer 1
          zoom: 10, // starting zoom
          pitch: 45,
          hash: true,
        })
      );
    }
  }, [containerRef, setMapRef]);

  return (
    <div style={BaseStyles} ref={setContainerRef}>
      {MapInject(children, mapRef)}
    </div>
  );
};

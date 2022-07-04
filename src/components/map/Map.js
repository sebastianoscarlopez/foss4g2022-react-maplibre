import maplibregl from "maplibre-gl";
import { useEffect, useRef } from "react";

export const Map = () => {
  const containerRef = useRef();

  useEffect(() => {
    if (containerRef.current) {
      console.log('Map creation');
      new maplibregl.Map({
        container: containerRef.current,
        style: "https://demotiles.maplibre.org/style.json", // stylesheet location
        center: [-74.5, 40], // starting position [lng, lat]
        zoom: 1, // starting zoom
      });
    }
  }, []);

  return <div ref={containerRef}></div>;
};

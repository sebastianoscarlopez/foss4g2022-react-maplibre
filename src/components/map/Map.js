import maplibregl from "maplibre-gl";
import { useEffect } from "react";
import { useRefCallback } from "../../hooks";

export const Map = () => {
  const [setContainerRef, containerRef] = useRefCallback();

  useEffect(() => {
    if (containerRef) {
      console.log('Map creation');
      new maplibregl.Map({
        container: containerRef,
        style: "https://demotiles.maplibre.org/style.json", // stylesheet location
        center: [-74.5, 40], // starting position [lng, lat]
        zoom: 1, // starting zoom
      });
    }
  }, [containerRef]);

  return <div ref={setContainerRef}></div>;
};

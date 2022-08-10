import maplibregl from "maplibre-gl";
import {  } from "maplibre-gl";
import { useEffect, Children, cloneElement } from "react";
import { useRefCallback } from "../../hooks";
import { BaseStyles } from "./BaseStyles";
import 'maplibre-gl/dist/maplibre-gl.css';

const MapInject = (children, map) => 
  Children.map(
    children, 
    child => cloneElement(child, { map })
  )

export const Map = ({ children }) => {
  const [containerRef, setContainerRef] = useRefCallback();
  const [mapRef, setMapRef] = useRefCallback();

  useEffect(() => {
    if (containerRef) {
      console.log('Map creation');
      setMapRef(new maplibregl.Map({
        container: containerRef,
        style: "https://demotiles.maplibre.org/style.json", // stylesheet location
        center: [-74.5, 40], // starting position [lng, lat]
        zoom: 1, // starting zoom
      }));
    }
  }, [containerRef, setMapRef]);

  return <div style={BaseStyles} ref={setContainerRef}>
    {MapInject(children, mapRef)}
  </div>;
};

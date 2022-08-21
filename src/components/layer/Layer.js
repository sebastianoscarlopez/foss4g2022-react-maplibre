import { useEffect } from "react";

export const Layer = ({
  map,
  id,
  typeSource,
  type,
  sourceLayer = "default",
  tiles,
  tileSize,
  paint = {},
}) => {
  useEffect(() => {
    if (map) {
      map.on("load", () => {
        if (!map.getSource(id)) {
          const sourceData = {
            type: typeSource,
            tiles,
            tileSize,
          };
          map.addSource(id, sourceData);

          const layerData = {
            id,
            type,
            source: id,
            "source-layer": sourceLayer,
            style: {},
            paint,
          };
          map.addLayer(layerData);
        }
      });
    }
  }, [id, map, paint, sourceLayer, tileSize, tiles, type, typeSource]);

  useEffect(() => {
    if (type === "fill-extrusion" && map && map.getSource(id)) {
      map.setPaintProperty(
        id,
        "fill-extrusion-height",
        paint?.["fill-extrusion-height"]
      );
      map.setPaintProperty(
        id,
        "fill-extrusion-opacity",
        paint?.["fill-extrusion-opacity"]
      );
    }
  }, [id, map, paint, type]);

  console.log(map);
  return <h1>map</h1>;
};

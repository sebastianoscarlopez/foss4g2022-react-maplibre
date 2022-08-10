import { useEffect } from "react";

export const Layer = ({ map, id, type, tiles, tileSize }) => {
  useEffect(() => {
    if (map) {
      map.on("load", () => {
        if (!map.getSource(id)) {
          map.addSource(id, {
            type,
            tiles,
            tileSize,
          });
          map.addLayer({
            id,
            type,
            source: id,
            style: {},
          });
        }
      });
    }
  }, [id, map, tileSize, tiles, type]);

  console.log(map, id, type, tiles, tileSize);
  return <h1>map</h1>;
};

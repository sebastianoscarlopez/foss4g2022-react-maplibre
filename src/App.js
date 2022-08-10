import React from "react";
import { Map, Layer } from "./components";

function App() {
  return (
    <Map>
      <Layer
        id="layer1"
        type="raster"
        tiles={[
          "https://img.nj.gov/imagerywms/Natural2015?bbox={bbox-epsg-3857}&format=image/png&service=WMS&version=1.1.1&request=GetMap&srs=EPSG:3857&transparent=true&width=256&height=256&layers=Natural2015",
        ]}
        tileSize={256}
      />
    </Map>
  );
}

export default App;

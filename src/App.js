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
      <Layer
        id="layer2"
        type="raster"
        tiles={[
          "https://geoportal.cepal.org/geoserver/ows?SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&FORMAT=image%2Fpng&TRANSPARENT=true&LAYERS=geonode%3Alineas_omnibus_origen_destino_montevideo_3857&STYLES=&SRS=EPSG%3A3857&CRS=EPSG%3A3857&TILED=true&access_token=None&WIDTH=256&HEIGHT=256&BBOX={bbox-epsg-3857}",
        ]}
        tileSize={256}
      />
    </Map>
  );
}

export default App;

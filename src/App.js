import React from "react";
import "./App.css";
import { Map, Layer } from "./components";
import ReactSlider from "react-slider";

function App() {
  const [size, setSize] = React.useState(35);
  const [opacity, setOpacity] = React.useState(75);

  return (
    <div className="App">
      <div
        style={{
          position: "absolute",
          left: 25,
          top: 25,
          width: 200,
          height: 200,
          border: 1,
          zIndex: 1,
        }}
      >
        <div className="card">
          <h4>Height</h4>
          <ReactSlider
            className="customSlider"
            trackClassName="customSlider-track"
            thumbClassName="customSlider-thumb"
            value={size}
            onChange={(e) => setSize(e)}
            renderThumb={(props, state) => (
              <div {...props}>{state.valueNow}</div>
            )}
          />
        </div>
        <div className="card">
          <h4>Opacity</h4>
          <ReactSlider
            className="customSlider"
            trackClassName="customSlider-track"
            thumbClassName="customSlider-thumb"
            value={opacity}
            onChange={(e) => setOpacity(e)}
            renderThumb={(props, state) => (
              <div {...props}>{state.valueNow}</div>
            )}
          />
        </div>
      </div>
      <Map>
        <Layer
          id="layer-1"
          typeSource="raster"
          type="raster"
          tiles={[
            "https://img.nj.gov/imagerywms/Natural2015?bbox={bbox-epsg-3857}&format=image/png&service=WMS&version=1.1.1&request=GetMap&srs=EPSG:3857&transparent=true&width=256&height=256&layers=Natural2015",
          ]}
          tileSize={256}
          sourceLayer="default"
        />
        <Layer
          id="layer-2"
          typeSource="raster"
          type="raster"
          tiles={[
            "https://geoportal.cepal.org/geoserver/ows?SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&FORMAT=image%2Fpng&TRANSPARENT=true&LAYERS=geonode%3Alineas_omnibus_origen_destino_montevideo_3857&STYLES=&SRS=EPSG%3A3857&CRS=EPSG%3A3857&TILED=true&access_token=None&WIDTH=256&HEIGHT=256&BBOX={bbox-epsg-3857}",
          ]}
          tileSize={256}
          sourceLayer="default"
        />
        <Layer
          id="layer-3"
          typeSource="vector"
          type="fill-extrusion"
          tiles={[
            "http://localhost:81/data/layer_1/{z}/{x}/{y}.pbf",
            // "https://tiles.kan.com.ar/data/construccion/{z}/{x}/{y}.pbf",
            //"https://vectortiles.usig.buenosaires.gob.ar/cur3d/tejido/{z}/{x}/{y}.pbf?optimize=true",
          ]}
          paint={{
            "fill-extrusion-color": "#ccffff",
            "fill-extrusion-height": ["*", size / 10, ["get", "niveles"]],
            "fill-extrusion-opacity": opacity / 100,
          }}
          tileSize={512}
        />
      </Map>
    </div>
  );
}

export default App;

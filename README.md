# Getting Started with Create React and Maplibre

This repository will be the summary of the presentation at the FOSS4G 2022 Firenze (https://talks.osgeo.org/foss4g-2022-workshops/talk/QCKDMJ/)

## Recipe

1. console: npx create-react-app foss4g2022-react-maplibre
2. console: npm start
3. The browser displays a React logo and some text
4. Build component **_Map_** which returns `<div>Here will be a map</div>`
5. Within App.js:
   1. Remove imports
   1. Import from **_Map_** component
   1. Replace returns with just `<Map />`
6. console: npm start
7. The browser displays the text `Here will be a map`

<H6>Now we're ready to display the map</H6>

8. console: npm i maplibre-gl
9. Within Map.js:
   1. import maplibre-gl
   1. Declare a useRef and assign to the div reference
   1. Copy & paste basic [example from maplibre](https://maplibre.org/maplibre-gl-js-docs/example/simple-map/) into a useEffect
10. console: npm start
11. The browser should display the map, but . . . it looks like duplicated.
    ![Map duplicated](/readme_assets/issue%201%20-%20map%20duplicated.png)
    This is the first common issue. It happened because of the reference from useRef changed so it made a rerender duplicating the map. Posible solution could be replacing the useRef by a callback ref.
    Source: https://medium.com/@teh_builder/ref-objects-inside-useeffect-hooks-eb7c15198780
12. After implementing the useCallbackRef we get one map. It has an incorrect size, but nothing that ccs can not fix.
    ![Map size incorrect](/readme_assets/issue%202%20-%20map%20size%20incorrect.png)
13. Adding `height: 100vh` style. Now Map size is ok, but something (the controls) appears below the map so there is a vertical scrolling.
14. import 'maplibre-gl/dist/maplibre-gl.css' whitin Map component

### Layer component

1. Make a Layer component that returns null, expect a Map prop, console.log(Map)
2. Add a Layer on Map without props
3. Inject Map to children in Map ComponentLayer
4. The console should be working. Now we can add the layer
5. Add props id, type, tiles and tileSize to Layer to render some example as https://maplibre.org/maplibre-gl-js-docs/example/wms/

6. Adding source and layer on a map load event, into a useEffect, will triger layer already exist because of the rerender. So we need to add some if to avoid it.
7. Everything is working now!

### Adding Layers from geoportal

1. From some map site we can find the maps and layers.
   As example a layer fom openstreet map https://tile.openstreetmap.org/{z}/{x}/{y}.png

2. After getting the url layer, just add a new Layer.
   ![Buenos Aires](/readme_assets/buenos_aires.png)

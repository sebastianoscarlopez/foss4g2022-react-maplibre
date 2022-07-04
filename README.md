# Getting Started with Create React and Maplibre

 This repository will be the summary of the presentation at the FOSS4G 2022 Firenze (https://talks.osgeo.org/foss4g-2022-workshops/talk/QCKDMJ/)


## Recipe

1) console: npx create-react-app foss4g2022-react-maplibre
0) console: npm start
0) The browser displays a React logo and some text
0) Build component ***Map*** which returns `<div>Here will be a map</div>`
0) Within App.js:
    1. Remove imports
    1. Import from ***Map*** component
    1. Replace returns with just `<Map />`
0) console: npm start
0) The browser displays the text `Here will be a map`

<H6>Now we're ready to display the map</H6>

8) console: npm i maplibre-gl
0) Within Map.js:
    1. import maplibre-gl
    1. Declare a useRef and assign to the div reference 
    1. Copy & paste basic [example from maplibre](https://maplibre.org/maplibre-gl-js-docs/example/simple-map/) into a useEffect
0) console: npm start
0) The browser should display the map, but . . . it looks like duplicated.
![Map duplicated](/readme_assets/issue%201%20-%20map%20duplicated.png)
This is the first common issue. It happened because of the reference from useRef changed so it made a rerender duplicating the map. Posible solution could be replacing the useRef by a callback ref.
Source: https://medium.com/@teh_builder/ref-objects-inside-useeffect-hooks-eb7c15198780
0) After implementing the useCallbackRef we get one map. It has an incorrect size, but nothing that ccs can not fix.
![Map size incorrect](/readme_assets/issue%202%20-%20map%20size%20incorrect.png)
0) Adding `height: 100vh` style. Now Map size is ok, but something (the controls) appears below the map so there is a vertical scrolling.
0) Download maplibre-gl.css file and import whitin Map component
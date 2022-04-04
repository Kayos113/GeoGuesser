# Bottle map

A web applet to serve a static page with a leaflet.js map displaying coordinates of fictional floating bottles with messages in them in the oceans.

### Currently in development

##### Roadmap

###### Incomplete
  - Polygon the oceans
  - Determine direction of currents based on global location
  - Determine if given are inside continent polygons and return nearest oceanic latlngs, to later update bottles that are in not allowed locations
  - integrate message bottle apis to provide latlngs for bottle markers
  - create probability function to update bottle positions based on currents, with a small chance of moving against currents to allow for bottles to move anywhere in the map, and move between polygons
  - import bottle marker icon

###### In Progress


###### Completed
  - Express Server set up
  - Integrate leaflet.js
  - Set up polygons to surround continents
  - Find way to determine if point is in given polygons
   [ ] Mathematical function using center?
   cons: complex polygons will have centers that do not have straight lines to all borders.
   [ ] Draw line from given point to right and count intersections with border. Odd means it is in polygon, even means it is out.
   cons:
   could not find how to determine intersections with perimeter through base leaflet before finding the plugin
   [x] @mapbox/leaflet-pip plugin to compute if point is in polygons

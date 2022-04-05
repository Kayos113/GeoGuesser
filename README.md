# Bottle map

A web applet to serve a static page with a leaflet.js map displaying coordinates of fictional floating bottles with messages in them in the oceans.

## Currently in development

#### Roadmap

###### Incomplete
  - Polygon the oceans
  - Determine direction of currents based on global location
  - Determine if given are inside continent polygons and return nearest oceanic latlngs, to later update bottles that are in not allowed locations
  - integrate message bottle apis to provide latlngs for bottle markers
  - create probability function to update bottle positions based on currents, with a small chance of moving against currents to allow for bottles to move anywhere in the map, and move between polygons
  - import bottle marker icon

###### In Progress
  - work in the BottleBackendAPI repository to add coordinate system to bottles.
  - muse over best methods to implement a current system.    
      wants:    
        - each bottle instance will have individual x and y coordinates    
        - after a certain amount of time the bottles will either call a function within themselves, or more likely an outside application will pull the bottles from the db, update the coordinates and put them back    
        - when coordinates are updated, they should be updates based on a range of probablilities based on where the bottle is in the ocean. Ex: At the equator, bottles are more likely to move horizontally than vertically, whereas halfway up a coastline, vertical is more likely than horizontal. The indian Ocean may have a separate bounding, and then at the  north and south poles are the arctic currents that are circular on a globe, but a straight line on a rectangle, so there would be horizontal as well.    

###### Completed
  - Express Server set up    
  - Integrate leaflet.js    
  - Set up polygons to surround continents    
  - Find way to determine if point is in given polygons    
   [ ] Mathematical function using center?    
   **cons:** complex polygons will have centers that do not have straight lines to all borders.    
   [ ] Draw line from given point to right and count intersections with border. Odd means it is in polygon, even means it is out.    
   **cons:** could not find how to determine intersections with perimeter through base leaflet before finding the plugin    
   [x] @mapbox/leaflet-pip plugin to compute if point is in polygons    

// Import the leaflet package
var L = require('leaflet');
var leafletPip = require('@mapbox/leaflet-pip');

// Creates a leaflet map binded to an html <div> with id "map"
// setView will set the initial map view to the location at coordinates
// 13 represents the initial zoom level with higher values being more zoomed in
var map = L.map('map').setView([43.659752, -79.378161], 2);

// Adds the basemap tiles to your web map
// Additional providers are available at: https://leaflet-extras.github.io/leaflet-providers/preview/
L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
	attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>',
	subdomains: 'abcd',
	maxZoom: 21
}).addTo(map);

var primeMeridian = L.polyline([
  [-90,0],
  [90,0]
], {color:'purple'}).addTo(map);

var equator = L.polyline([
  [0,-180],
  [0,180]
],{color:'green'}).addTo(map);

var border = L.polyline([
  [-90,-180],
  [90,-180],
  [90,180],
  [-90,180],
  [-90,-180]
], {color:'white'}).addTo(map);

var popup = L.popup();
var data = continentPoly.toGeoJSON()
var gjLayer = L.geoJson(data);

function onClick(evt) {
	console.log('Clicked');
	var results = leafletPip.pointInLayer(evt.latlng, gjLayer);
	console.log('results: ' + results);
	var message;
	if(results && results.length) {
		message = "Point is in continent polygon.";
	} else {
		message = "Point is not in continent polygon.";
	}
	console.log(message);
		popup
		.setLatLng(evt.latlng)
    .setContent(message + " (Coords: " + evt.latlng.toString() + ")")
    .openOn(map);
}
map.on('click', onClick);

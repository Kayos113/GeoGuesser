// Import the leaflet package
var L = require('leaflet');
var leafletPip = require('@mapbox/leaflet-pip');
var locations = require('./locations.js');
console.log(locations);

// Creates a leaflet map binded to an html <div> with id "map"
// setView will set the initial map view to the location at coordinates
// 2 represents the initial zoom level with higher values being more zoomed in
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

// Random point generation
	//
	// var randX = -117.919044//Math.floor(Math.random()*360)-180;
	// var randY = 33.809111//Math.floor(Math.random()*180)-90;
	// var randPoint = L.point(randX, randY);
	// console.log("randPoint: " + randX + " " +  randY);

// Random Location Selection
  let rand = locations.length;
	console.log(rand);
	let index = Math.floor(rand);
	console.log("Random number: " + index);
	let randLocation = locations[index];
	console.log(randLocation.title);
	let randX = randLocation.lng;
	let randY = randLocation.lat;
	var randPoint = L.point(randX, randY);

// Click function and popup

var popup = L.popup();

function onClick(evt) {
	console.log('Clicked');

	evtLatLng = evt.latlng;
	clickX = evtLatLng.lng;
	clickY = evtLatLng.lat;

	var distance = Math.abs( Math.pow((randX - clickX), 2) + Math.pow((randY - clickY), 2) );
	var displayDistance = (Math.floor( distance * 1000000 ) / 1000000);
	console.log(distance);


	var message = "Map Clicked."
	popup
		.setLatLng(evt.latlng)
    .setContent(message + " (Distance to secret point: " + displayDistance + ")")
    .openOn(map);
}
map.on('click', onClick);

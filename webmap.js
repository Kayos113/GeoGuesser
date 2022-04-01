// Import the leaflet package
var L = require('leaflet');

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

const eurasiaCoords = ([
  [72,180],
  [76.5,142],
  [78,104],
  [77.5,68],
  [72,26],
  [70,15],
  [59,-6],
  [55,-11],
  [51,-12],
  [44,-11],
  [35,-10],
  [23,-19],
  [12,-19],
  [7,-14],
  [4,-7.5],
  [3.5,5.625],
  [-18,9],
  [-36,18],
  [-35,28],
  [-28,39],
  [-29,48],
  [-12,53],
  [-10,47],
  [-6,45],
  [21,64],
  [19,70],
  [3,77],
  [3,83],
  [20,88],
  [20,91],
  [15,94],
  [5,95],
  [-9,105],
  [-12,125],
  [-22,112],
  [-37,115],
  [-33,132],
  [-45,147],
  [-28,158],
  [-15,152],
  [-3,154],
  [4,130],
  [17,125],
  [29,125],
  [30,132],
  [35,145],
  [49,150],
  [50,160],
  [63,180]
]);

const americasCoords = [
  [63,-180],
  [56.5,-162],
  [53.5,-169.5],
  [52,-168.75],
  [59.5,-147],
  [58,-138],
  [53,-134],
  [48,-126],
  [40,-126],
  [17,-108],
  [4,-82],
  [-5,-83],
  [-20,-74],
  [-47,-77.5],
  [-53,-77],
  [-57,-70],
  [-55,-62],
  [-48,-64],
  [-29,-47.5],
  [-23,-40],
  [-10,-33],
  [-5,-34],
  [6,-50],
  [19,-64],
  [26,-78],
  [31,-80],
  [35,-75],
  [40,-73],
  [41,-70],
  [43,-65],
  [46,-52],
  [59,-43],
  [70,-17],
  [81.5,-8],
  [84,-30],
  [83.5,-77],
  [76.5,-125.5],
  [72,-128],
  [70,-137],
  [72,-157],
  [72,-180]
]

var eurasiaPoly = L.polygon(eurasiaCoords, {color:'red'}).addTo(map);
var americasPoly = L.polygon(americasCoords, {color:'red'}).addTo(map);

var primeMeridian = L.polyline([
  [-90,0],
  [90,0]
], {color:'purple'}).addTo(map);

var equator = L.polyline([
  [0,-360],
  [0,360]
],{color:'green'}).addTo(map);

var border = L.polyline([
  [-90,-180],
  [90,-180],
  [90,180],
  [-90,180],
  [-90,-180]
], {color:'white'}).addTo(map);

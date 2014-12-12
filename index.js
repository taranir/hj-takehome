shp("data").then(function(geojson){
  console.log("stuff")
  console.log(geojson);

  var map = L.map('map');
  L.geoJson(geojson).addTo(map);
});
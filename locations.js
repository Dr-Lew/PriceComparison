

var map;
var service;
var infowindow;

function initMap() {
  var omaha = new google.maps.LatLng(41.2565,-95.995102);
  var radius = 5000;
  var query = 'Walmart'

  map = new google.maps.Map(document.getElementById('map'), {
      center: omaha,
      zoom: 15
    });

  var request = {
    location: omaha,
    radius: radius,
    query: query
  };

  service = new google.maps.places.PlacesService(map);
  service.textSearch(request, callback);
}

function callback(results, status) {
  if (status == google.maps.places.PlacesServiceStatus.OK) {
    for (var i = 0; i < results.length; i++) {
      console.log("Store Name: " + results[i].name + "     Store Address: " + results[i].formatted_address);
    }
  }
}
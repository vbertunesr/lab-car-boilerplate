var map;
var mapMobile;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -11.606968, lng: -77.059364},
    zoom: 3
  });
  mapMobile = new google.maps.Map(document.getElementById('map-mobile'), {
    center: {lat: -11.606968, lng: -77.059364},
    zoom: 3
  });
}

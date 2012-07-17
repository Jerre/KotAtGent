var geocoder;
var map;

function initialize() {
  geocoder = new google.maps.Geocoder();
  var latlng = new google.maps.LatLng(51.053589, 3.730888);
  var myOptions = {
    zoom: 15,
    center: latlng,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  }
  map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
}

function renderAll(data) {
    $.each(data.data, function(key, val) {

        var lat = parseFloat(val.Lat);
        var lng = parseFloat(val.Long);

        trace("Rendering: " + lat + ", " + lng);

        marker = new google.maps.Marker({
            position: new google.maps.LatLng(51.053589, 3.730888),
            map: map
        });

    }); // end of each
    
}


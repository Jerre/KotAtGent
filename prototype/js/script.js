var day = 14;

$.ajax({
    url : 'http://data.appsforghent.be/kotatgent/prototype.json',
    async : false,
    dataType : 'json',
    success : function(data) {
        cbSuccess(data)
    }
});

function cbSuccess(data) {
    // trace(data.prototype);

     $.each(data.prototype, function(key, val) {
        trace(val.Zone);
      });
}

var geocoder;
  var map;
  function initialize() {
    geocoder = new google.maps.Geocoder();
    var latlng = new google.maps.LatLng(-34.397, 150.644);
    var myOptions = {
      zoom: 8,
      center: latlng,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
  }

  function codeAddress(inputAddress) {
    // var address = document.getElementById("address").value;
    var address = inputAddress;
    geocoder.geocode( { 'address': address}, function(results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
        map.setCenter(results[0].geometry.location);
        var marker = new google.maps.Marker({
            map: map, 
            position: results[0].geometry.location
        });
      } else {
        alert("Geocode was not successful for the following reason: " + status);
      }
    });
  }

$("#debug").click(function() {
  var input = document.getElementById("address").value;
  trace("geocoding --- " + input);
  codeAddress(input);
});
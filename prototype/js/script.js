var addressList = new Array();
var latlngList = new Array();
var objAddress = {
    lat: 1,
    long: 1
};

/*
* ===================================
* LOAD JSON DATA FROM TDT
* ===================================
*/

$.ajax({
    url : 'http://data.appsforghent.be/kotatgent/prototype.json',
    async : false,
    dataType : 'json',
    success : function(data) {
        cbSuccess(data);
    }
});

function cbSuccess(data) {
    $.each(data.prototype, function(key, val) {
        addressList.push(val.Adres + ", Gent");
        trace("pushed to array");
    });
    parseToDebugList(data);
    renderAllToMap(data);
}

/*
* ===================================
* INITIALIZE MAP
* ===================================
*/

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

/*
* ===================================
* GEOCODE LATLONG FROM ADDRESS
* ===================================
*/

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

/*
* ===================================
* RENDER ALL MARKERS ON MAP
* ===================================
*/

function renderAllToMap(data)
{
    $.each(data.prototype, function(key, val) {
        var item = val.Adres + ", Gent";
        // trace("Rendering: " + item);

    });
}

/*
* ===================================
* DEBUG METHODS
* ===================================
*/

/* LOAD DATA INTO DEBUG LIST */

function parseToDebugList(data)
{
    $.each(data.prototype, function(key, val) {
        var item = val.Adres + ", Gent";
        $("#debuglist").append("<li>" + item + "</li>");
    });
}

/* GEOCODE ADDRESS */

$("#geocode").click(function() {
    var input = document.getElementById("address").value;
    trace("geocoding --- " + input + ", Gent");
    codeAddress(input);
});

/* DEBUG */

$("#debug").click(function() {
    trace(objAddress.lat);
    trace(addressList[0]);
});
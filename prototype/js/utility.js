var index = 0;

/* DEBUG */

/* GEOCODE ADDRESS */

$("#geocode").click(function() {
    var input = document.getElementById("address").value;
    trace("geocoding --- " + input + ", Gent");
    codeAddress(input);
});

/* DEBUG */


$("#debug").click(function() {
    draw(51.053589, 3.730888);

});

function test()
{
    marker = new google.maps.Marker({
        position: new google.maps.LatLng(51.053589, 3.730888),
        map: map
    });
}

function draw(lat, lng)
{
    trace("Drawing on " + lat + ", " + lng)
    marker = new google.maps.Marker({
        position: new google.maps.LatLng(lat, lng),
        map: map
    });
}
function renderAll(data)
{
	var map = new L.Map('map');
	wax.tilejson('http://api.tiles.mapbox.com/v3/mapbox.mapbox-streets.jsonp', function(tilejson) {
						map.addLayer(new wax.leaf.connector(tilejson));});
	map.setView(new L.LatLng(51.050729,3.724022), 16);
	
	var MyIcon = L.Icon.extend({
			iconUrl : 'images/marker.png',
			iconSize : new L.Point(25, 41),
			shadowSize : null,
			iconAnchor : new L.Point(16, 35)});
			
	var Koten = L.Icon.extend({
			iconUrl : 'images/marker_event.png',
			iconSize : new L.Point(25, 41),
			shadowSize : null,
			iconAnchor : new L.Point(16, 35)});
	var group = new L.LayerGroup();
	
	var markerOwnLocation = new L.Marker(new L.LatLng(51.050729,3.724022));
	markerOwnLocation.setIcon(new MyIcon);
	markerOwnLocation.bindPopup("test");
	map.addLayer(markerOwnLocation);
	$.each(data.data, function(key, value){
		var markerKot = new L.Marker(new L.LatLng(value.Lat,value.Long));
		markerKot.setIcon(new Koten);
		markerKot.bindPopup("test");
		group.addLayer(markerKot);
	});

	map.addLayer(group);
}
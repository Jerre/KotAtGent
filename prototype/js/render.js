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
			
	var Kamer = L.Icon.extend({
			iconUrl : 'images/marker_kamer.png',
			iconSize : new L.Point(25, 41),
			shadowSize : null,
			iconAnchor : new L.Point(16, 35)});

	var Studio = L.Icon.extend({
			iconUrl : 'images/marker_studio.png',
			iconSize : new L.Point(25, 41),
			shadowSize : null,
			iconAnchor : new L.Point(16, 35)});

	var Appartement = L.Icon.extend({
			iconUrl : 'images/marker_appartement.png',
			iconSize : new L.Point(25, 41),
			shadowSize : null,
			iconAnchor : new L.Point(16, 35)});

	var Woning = L.Icon.extend({
			iconUrl : 'images/marker_woning.png',
			iconSize : new L.Point(25, 41),
			shadowSize : null,
			iconAnchor : new L.Point(16, 35)});

	var group = new L.LayerGroup();
	
	var markerOwnLocation = new L.Marker(new L.LatLng(51.050729,3.724022));
	markerOwnLocation.setIcon(new MyIcon);
	markerOwnLocation.bindPopup("U bevindt zich hier");
	map.addLayer(markerOwnLocation);
	$.each(data.data, function(key, value){

		var markerKot = new L.Marker(new L.LatLng(value.Lat,value.Long));

		switch(value.Type)
		{
			case "Kamer":
				markerKot.setIcon(new Kamer);
				break;
			case "Studio":
				markerKot.setIcon(new Studio);
				break;
			case "Appartement":
				markerKot.setIcon(new Appartement);
				break;
			case "Woning":
				markerKot.setIcon(new Woning);
				break;
		}
		
		markerKot.bindPopup(value.Type + " - " + value.Adres);
		group.addLayer(markerKot);
	});

	map.addLayer(group);
}
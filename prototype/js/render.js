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

		var markerLocation = new L.Marker(new L.LatLng(value.Lat,value.Long));

		switch(value.Type)
		{
			case "Kamer":
				markerLocation.setIcon(new Kamer);
				break;
			case "Studio":
				markerLocation.setIcon(new Studio);
				break;
			case "Appartement":
				markerLocation.setIcon(new Appartement);
				break;
			case "Woning":
				markerLocation.setIcon(new Woning);
				break;
		}

		var domelem = document.createElement('a');
		domelem.href = "#";
		domelem.id = value.ID;
		domelem.innerHTML = value.Type + " -- " + value.Adres;
		domelem.className = "btnDetails";

		domelem.onclick = function(e) {
		    var id = e.target.id;
		    getDetails(id);
		    // do whatever else you want to do - open accordion etc
		    return false;
		};
		
		markerLocation.bindPopup(domelem);
		group.addLayer(markerLocation);
	});

	map.addLayer(group);
}
var fullData;

$.ajax({
    url : 'data/data.json',
    async : false,
    dataType : 'json',
    success : function(data) {
		setCBX();
        fullData = data;
		loadMapWithFilter(parseStorage("kag_zonesArray"), parseStorage("kag_typesArray"), fullData)
        renderAll(data.data);
    }
});

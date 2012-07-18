var fullData;

$.ajax({
    url : 'data/data.json',
    async : false,
    dataType : 'json',
    success : function(data) {
		setCBX();
        fullData = data;
        renderAll(data.data);
    }
});

$.ajax({
    url : 'data/data.json',
    async : false,
    dataType : 'json',
    success : function(data) {
        cbSuccess(data);
        renderAll(data);
    }
});

function cbSuccess(data) {
}


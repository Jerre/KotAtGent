var fullData;

$.ajax({
    url : 'data/data.json',
    async : false,
    dataType : 'json',
    success : function(data) {
        fullData = data;
        cbSuccess(data);
        renderAll(data);
    }
});

function cbSuccess(data)
{

}

function getDetails(id)
{
    $.each(fullData.data, function(key, value){
        return value.Adres;
    });
}
function getDetails(id)
{
    $.each(fullData.data, function(key, value){
        if(value.ID == id)
        {
            trace(value.Type + " -- " + value.Adres + " @ &euro;" + value.Min_prijs + "-" );
        }
        
    });
}
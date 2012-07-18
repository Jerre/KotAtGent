function getDetails(id)
{
    trace("Retrieving details for " + id);
    $.each(fullData.data, function(key, value){
        if(value.ID == id)
        {
            trace(value.Type + " -- " + value.Adres + " @ EUR" + value.Min_prijs + "-" + value.Max_prijs);

            fadePanels();

            var htmlContent;
            htmlContent =   "<h3>" + value.Adres + "</h3>" + "<h3>" + value.Zone + "</h3>" + 
                            "<div id='details_typeprice' class='container'>" + 
                                "<div class='container_left'>" + 
                                    value.Type + 
                                "</div>" + 
                                "<div class='container_right'>" +
                                    value.Max_prijs +
                                    "</div>" + 
                                "</div>" +
                            "</div>"

                            ;


            $("#details").html(htmlContent);

            $("#details").show();
        }
    });
}
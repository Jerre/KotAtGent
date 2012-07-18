function getDetails(id)
{
    trace("Retrieving details for " + id);
    $.each(fullData.data, function(key, value){
        if(value.ID == id)
        {
            trace(value.Type + " -- " + value.Adres + " @ EUR" + value.Min_prijs + "-" + value.Max_prijs);

            fadePanels();

            $("#details").html("");

            var htmlContent;
            htmlContent =   "<a href='#' class='back' onClick='backToMap()'>Terug naar map</a>" +
                            "<h3>" + value.Adres + "</h3>" + "<h3>" + value.Zone + "</h3>" + 
                            "<div id='details_typeprice' class='container'>" + 
                                "<div class='container_left'>" + 
                                    value.Type + 
                                "</div>" + 
                                "<div class='container_right'>" +
                                    "&euro;" + value.Max_prijs +
                                    "</div>" + 
                                "</div>" +
                            "</div>" +

                            "<div id='details_note' class='container'>" +
                                "<h4>Opmerking</h4>" +
                                "<textarea />" +
                            "</div>" +

                            "<div id='details_contact' class='container'>" +
                                "<h4>Contact</h4>" +
                                "<ul>" +
                                "<li>" + value.Eigenaar_naam + "</li>" +
                                "<li>" + value.Eigenaar_telefoon + "</li>" +
                                "<li>" + value.Eigenaar_email + "</li>" +
                                "</ul>" +
                            "</div>"

                            ;

        

        


            $("#details").html(htmlContent);

            $("#details").show();
        }
    });
}


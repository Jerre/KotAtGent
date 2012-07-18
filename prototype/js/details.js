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
            htmlContent =   "<a href='#' class='back' onClick='backToMap()'>◄</a><br>" +
                            "<a href='#' id='details_favorite'>♥</a>" +
                            "<div class='details_address'><h3>" + value.Adres + "</h3>" + "<h3>" + value.Zone + "</h3></div>" + 

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
                                "<div class='headerbar'><h4>Opmerking</h4></div>" +
                                "<textarea class='details_note' id='kag_note_" + value.ID +"' onChange='saveNote();'/>" +
                            "</div>" +

                            "<div id='details_contact' class='container'>" +
                                "<div class='headerbar'><h4>Contact</h4></div>" +
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


var index = 0;

/* DEBUG */

/* GEOCODE ADDRESS */

$("#geocode").click(function() {
    var input = document.getElementById("address").value;
    trace("geocoding --- " + input + ", Gent");
    codeAddress(input);
});

/* DEBUG */


$("#debug").click(function() {
	var test = $("#favorites").is(':hidden');
	trace(test);
});


/* FUNCTION TO CHECK CHECKBOXES */
function checkForCBX(){
	var zonesArray = new Array();
	$('#zones input[type="checkbox"]:checked').each(function() {
			var value = $(this).val();
			zonesArray.push(value);
	 });
	 
	 var typesArray = new Array();
	 $('#types input[type="checkbox"]:checked').each(function() {
			var value = $(this).val();
			typesArray.push(value);
	 });
	 var specificData = filter(typesArray, zonesArray, fullData);
	 renderAll(specificData);
}


function filter(types, zones, dataToFilter){
            var filteredData = new Array();
			$.each(dataToFilter.data, function(indexData, valueData){
				
				$.each(zones, function(indexArray, valueArray){
					if(valueData.Zone == valueArray){
						$.each(types, function(indexType, valueType){
							if(valueData.Type == valueType){
								filteredData.push(valueData);
							}
						});
					}
				});
				
			});
			
			return filteredData;
        }

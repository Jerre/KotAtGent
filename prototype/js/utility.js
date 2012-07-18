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
});


/* FUNCTION TO CHECK CHECKBOXES */
function checkForCBX(){
	var zonesArray = new Array();
	zonesArray = [];
	$('#zones input[type="checkbox"]:checked').each(function() {
			var value = $(this).val();
			zonesArray.push(value);
	 });
	 
	 var typesArray = new Array();
	 typesArray = [];
	 $('#types input[type="checkbox"]:checked').each(function() {
			var value = $(this).val();
			typesArray.push(value);
	 });
	 filtered = true;
	 var specificData = filter(typesArray, zonesArray, fullData);
	 console.log(specificData);
	 renderAll(specificData);
}


function filter(types, zones, dataToFilter){
            var filteredData = new Array();
			console.log(zones);
			console.log(types);
			$.each(dataToFilter.data, function(indexData, valueData){
				if(zones.length != 0){
					$.each(zones, function(indexArray, valueArray){
						if(valueData.Zone == valueArray){
							if(types.length != 0){
								$.each(types, function(indexType, valueType){
									if(valueData.Type == valueType){
										filteredData.push(valueData);
									}
								});
							}
							else{
								filteredData.push(valueData);
							}
						}
					});
				}
				else{
					if(types.length != 0){
						$.each(types, function(indexType, valueType){
							if(valueData.Type == valueType){
								filteredData.push(valueData);
							}
						});
					}
					else{
						filteredData.push(valueData);
					}
				}
				
			});
			
			return filteredData;
        }

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
			localStorage.setItem("kag_zonesArray", JSON.stringify(zonesArray));
	 });
	 
	 var typesArray = new Array();
	 typesArray = [];
	 $('#types input[type="checkbox"]:checked').each(function() {
			var value = $(this).val();
			typesArray.push(value);
			localStorage.setItem("kag_typesArray", JSON.stringify(typesArray));
	 });
	 filtered = true;
	 var specificData = filter(typesArray, zonesArray, fullData);
	 renderAll(specificData);
}

/* FUNCTION TO LOAD MAP WITH FILTER */
function loadMapWithFilter(typesArray, zonesArray, fullData){
	var specificDataOnLoad = filter(typesArray, zonesArray, fullData);
	renderAll(specificDataOnLoad);
}


function getCheckboxChecked(name){
	var idOfCBX = 'input[value=' + name + ']';
	$(idOfCBX).attr('checked', true);

}


function filter(types, zones, dataToFilter){
            var filteredData = new Array();
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


function setCBX(){
	if(localStorage.getItem("kag_zonesArray") == null){
		return false;
	}
	else{
		var arrayZones =  parseStorage("kag_zonesArray");
		$.each(arrayZones, function(index, value){
			getCheckboxChecked(value);
		});
	}
	if(localStorage.getItem("kag_typesArray") == null){
		return false;
	}
	else{
		var arrayZones = parseStorage("kag_typesArray");
		$.each(arrayZones, function(index, value){
			getCheckboxChecked(value);
		});
	}
}

function parseStorage(nameStorage){
	var parsedData = JSON.parse(localStorage[nameStorage]);
	return parsedData;
}
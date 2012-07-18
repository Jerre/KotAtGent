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
			localStorage.setItem("kag_zonesArray", zonesArray);
	 });
	 
	 var typesArray = new Array();
	 typesArray = [];
	 $('#types input[type="checkbox"]:checked').each(function() {
			var value = $(this).val();
			typesArray.push(value);
			localStorage.setItem("kag_typesArray", typesArray);
	 });
	 filtered = true;
	 var specificData = filter(typesArray, zonesArray, fullData);
	 console.log(specificData);
	 renderAll(specificData);
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
	if(localStorage.getItem("kag_zonesArray").length = 0){
		
	}
	else{
		getCheckboxChecked("Poel");
	}
}
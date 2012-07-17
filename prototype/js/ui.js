$(".panel").hide();
$("#map").show();

function fadePanels()
{
	$(".panel").fadeOut('fast');
}

$("#nav_map").click(function(event) {
	if($("#map").is(':hidden'))
	{
		fadePanels();
		$("#map").fadeIn('fast');
	}
});

$("#nav_favorites").click(function(event) {
	if($("#favorites").is(':hidden'))
	{
		fadePanels();
		$("#favorites").fadeIn('fast');
	}
});

$("#nav_filters").click(function(event) {
	if($("#filters").is(':hidden'))
	{
		fadePanels();
		$("#filters").fadeIn('fast');
	}
});

$("#nav_settings").click(function(event) {
	if($("#settings").is(':hidden'))
	{
		fadePanels();
		$("#settings").fadeIn('fast');
	}
});
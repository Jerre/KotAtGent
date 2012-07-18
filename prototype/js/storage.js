function saveNote()
{
    var sourceID = $(".details_note").attr('id');
    var strippedID = stripChars(sourceID);
    var content = $(".details_note").val();
    trace("\nSAVING COMMENT\n-----------------")
    trace("ID: " + strippedID);
    trace("Content: " + content);

    localStorage.setItem(sourceID, content);
}

function loadNote()
{
    var sourceID = $(".details_note").attr('id');
    var content = localStorage.getItem(sourceID);
    trace("\nLOADING COMMENT\n-----------------")
    trace("ID: " + sourceID);
    trace("Content:" + content);
    $(".details_note").html(content);
}

function stripChars(input)
{
    var output = input.replace(/\D/g,'');
    return output;
}
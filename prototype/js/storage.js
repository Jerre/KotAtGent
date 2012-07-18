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

}

function stripChars(input)
{
    var output = input.replace(/\D/g,'');
    return output;
}
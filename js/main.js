var output;

//returns one XML row
function renderOutput(object, wrapperStart, wrapperEnd) {
    var mainOutput = wrapperStart;
    for (var key in object) {
        tempOutput = "\n<" + object[key][0] + ">" + $("." + key + " input").val() + "</" + object[key][0] + ">";
        mainOutput += tempOutput;
    }
    mainOutput += "\n" + wrapperEnd;
    return mainOutput;
};

$(document).ready(function() {
	//for copy button
	var clip = new ZeroClipboard($("#copy"), {
    moviePath: "ZeroClipboard.swf"
    });  

	//on submit click
    $("#submit").click(function() {
        output = "<CASE>" + renderOutput(formTags, '', '') + renderOutput(formPart, '<SPAREPART>', '</SPAREPART>') + "\n</CASE>";
        $(".output textarea").text(output);
    });

    $("input[type=text]").focusin(function () {
        alert("GRAD");
        $(".focus-title").text($("input:focus").siblings("label").text()+':');
        $(".focus-text").text($(this).val());
        $(this).on("input", function() {
             $(".focus-text").text($(this).val());
         })
    });
    $("input[type=text]").focusout(function () {
        $(".focus-title").text('');
        $(".focus-text").text('');
    });

   //on clear click
   $('#clear').click(function() {
    location.reload();
  });

});
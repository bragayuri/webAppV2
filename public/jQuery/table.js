//  Author: Yuri Braga
// Code Referencing: https://github.com/mikhail-cct/CA1-In-class-Demo
// Code used here was extracted and adapted to this project from the Git page above.

// Function to draw Table from XML to HTML.
function draw_table(){
    $("#results").empty();
    $.getJSONuncached = function(url) {
        return $.ajax({
            url: url,
            type: 'GET',
            cache: false,
            success: function(html) {
                $("#results").append(html);
                select_row();
            }
        });
    };
    $.getJSONuncached("/get/html")
}
$(document).ready(function(){
    draw_table();
});

var button = document.getElementById("submit");

 button.onclick=insertRow;


// Function to select a row to delete it.
function select_row()
{
	$("#table tbody tr[id]").click(function ()
	{
		$(".selected").removeClass("selected");
		$(this).addClass("selected");
        var item = $(this).attr("id") - 1;
        console.log(item);
		delete_row(item);
	})
};
// FUnction used to delete a row
function delete_row(ent)
{
	$("#delete").click(function ()
	{
		$.ajax(
		{
			url: "/post/delete",
			type: "POST",
			data:
			{
				item: ent
			},
			cache: false,
			success: setTimeout(draw_table, 1000)
		})
	})
};

$(document).ready(function ()
{
	draw_table();
});
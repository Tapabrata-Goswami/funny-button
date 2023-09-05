var width = $("#container").width() - 120;
var height = $("#container").height() - 40;

function run() {
    var top = Math.random() * height;
    var left = Math.random() * width;
    $('#change').css('top', top + 'px').css('left', left + 'px');
}

$(document).ready(function () {
    var count = 0;
    $("#change").text("😅 Click Me");
    $('#change').mouseover(run);
    $('#change').mouseover(function () {
        $("#change").css("display", "none");
    });
    $('#change').mouseleave(function () {
        $("#change").css("display", "block");
        $("#change").text("🤣 Click Me");
    });
    $('#change').mousemove(run);
    $("#change").click(function () {
        $("#score span").text(count);
        count++;
    });
    $("#theme-change").click(function(){
        $("#theme-change").html('<i class="fa-solid fa-moon"></i>');
        $("body").toggleClass("dark");
    })
});
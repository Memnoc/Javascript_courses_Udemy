// if(jQuery) {
//     alert("This is connected");
// } else {
//     alert("not connected");
// }

// Select all divs and give them a purple background
$("div").css("background", "purple")

// Select all divs with class "highlight" and make them 200px wide
$(".highlight").css("width", "200px");

// Select the div with id "third" and give it an orange border
$("#third").css("border", "5px dashed orange");

// Bonus: Select the first div only and change its font color to pink
$("div:first-of-type").css("color", "pink");

// Can alsobe written as
$("div:first").css("color", "pink");
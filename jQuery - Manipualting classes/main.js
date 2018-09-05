// Adding a click listener to an h1
$("h1").click(function(){
    alert("H1, clciked!");
});

// Adding a click listener to a button
$("button").click(function(){
    alert("button clicked!")
});

// Making the button change background with the equivalent of "this" for jQuery
$("button").click(function(){
    $(this).css("background", "green");
});

// Getting text out of the button clicked
$("button").click(function(){
    var text = $(this).text();
    console.log("You clicked " + text);
});




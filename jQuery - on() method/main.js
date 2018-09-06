// Using on() to perform a change upon click
$("h1").on("click", function(){
    $(this).css("color", "purple");
});

// Using on in keypress event
$("input").on("keypress", function(){
    console.log("keypressed");
});

// Using on in hover event to make the text of a button bold
$("button").on("mouseenter", function(){
    $(this).css("font-weight", "bold");
});

// Change it back to normal
$("button").on("mouseleave", function(){
    $(this).css("font-weight", "normal");
});
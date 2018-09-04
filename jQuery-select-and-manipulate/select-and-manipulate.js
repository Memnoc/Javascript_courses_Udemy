// Some examples from the console - referring to select-and-manipulate.html

// Select elements with jQuery
console.log.apply(console, $("a"));

console.log.apply(console, $("li a"));

console.log.apply(console, $("ul li a"));

console.log.apply(console, $("#adorable"));

$("h1").css("color", "yellow")
// Versus the same code in Javascript
document.querySelector("h1").style.color = "orange";

// Building a style with attributes and apply them 
var styles = {
color: "red",
background: "pink",
border: "2px solid purple"
}

// Applying
$("h1").css(styles)

// Change all the allies to blue
$("li").css("color", "blue")


// Apply multiple styles at the same time
$("li").css({
fontSize: "10px",
border: "3px dashed purple",
background: "rgba(89, 45, 20, 0.5)"
});


// Takeawys:
// $ - is the selector for jQuery, and it's a built-in function
// .css is a powerful built-in method to select one or multiple elements of your stylesheet
// jQuery allows to manipulate collections without the need of writing a loop
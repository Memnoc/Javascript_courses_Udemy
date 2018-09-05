// Adding a class
$('h1').addClass("correct");

// Removing a class
$('h1').removeClass("correct");

// Add class to a collection
$("li").addClass("wrong");

// Remove class to a collection
$("li").removeClass("wrong");


// Toggle class to a collection
// Toggle will add a class if not present, and remove it if it is
$("li").toggleClass("correct");


// Doing it for a single option, the first one
$("li").first().toggleClass("done");

// Doing it for all the elements
// As expected, it removes the first option, and apply the style to the remaining ones
$("li").toggleClass("done");

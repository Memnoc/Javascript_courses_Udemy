// Using keypress() to select an input field
$("input");

//This to print it in the console
console.log.apply(console, $("input"));

// Assign a callback to keypress to print in console when a character is entered in the input field
$("input").keypress(function(){
	console.log("You have pressed a key");
});
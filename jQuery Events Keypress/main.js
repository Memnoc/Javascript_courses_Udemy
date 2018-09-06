// Using keypress() to select an input field
$("input");

//This to print it in the console
console.log.apply(console, $("input"));

// Assign a callback to keypress to print in console when a character is entered in the input field
$("input").keypress(function(){
	console.log("You have pressed a key");
});

// Record for an event in console
$("input").keypress(function(event){
	console.log(event);
});

// Every event has code: https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/keyCode
// We'll capture the one for the enter key
// "which" specifies the key reading the code when pressed

$("input").keypress(function(event){
	if(event.which === 13){
		console.log("You hit ENTER!");
	}
});
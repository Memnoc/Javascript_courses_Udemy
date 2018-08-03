// VERSION 1

var answer = prompt("Are we there yet?");


while(answer !== "yes" && answer !== "yah") {
	answer = prompt("Are we there yet?");
}
alert("YAY, we made it");

// VERSION 2

var answer = prompt("Are we there yet?");


while(answer.indexOf("yes") === -1) {
	answer = prompt("Are we there yet?");
}
alert("YAY, we made it");
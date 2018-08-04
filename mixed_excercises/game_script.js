var secretNumber = 54;
var inputNumber = prompt("What is the secret number?");

if (Number(inputNumber) === secretNumber) {
	console.log("You have won the lottery");
	alert("You have won the lottery");
} else {
	console.log("Try again");
	alert("Try again");
}
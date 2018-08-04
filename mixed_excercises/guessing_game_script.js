var secretNumber = 54;
var inputNumber = prompt("What is the secret number?");
prompt("Yo");

if (inputNumber >0) {
	while(inputNumber !== secretNumber) {
		console.log("Keep trying, buddy");
	} else {
		console.log("You have won the lottery!");
	}
}
var age = 21;

if (age < 0) {
	console.log("Error");
} else if (age == 21) {
	console.log("Happy 21st Birthday");
} else if (age % 2 ===1) {
	console.log("Age is odd");
} else if (age % Math.sqrt(age) ==0) {
	console.log("Perfect Square");
} else {
	console.log("Your age is " + age);
}
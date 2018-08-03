var age = prompt("How old are you?");


function calculateAge(age) {
	var days = age * 363.25;
	alert("You have been alive for " + days + " days.")
};

calculateAge(age);
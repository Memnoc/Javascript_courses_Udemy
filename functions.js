// Write a function to print out only even numbers

function isEven(number) {
    if (number % 2 === 0) {
        console.log("Is even");
        return true;
    } else {
        console.log("Not even");
        return false;
    }
}

// Write a function to print out factorial

function factorial(num) {
  if (num < 0) 
        return -1;
  else if (num == 0) 
      return 1;
  else {
      return (num * factorialize(num - 1));
  }
}

// other way

function factorial(num) {
	var result = 1;
	for(var i = 2; i < num; i++) {
		result =* i;
	}
	return result;
}



function kebabToSnake(name) {
	if(name.indexOf("-")) {
		var replaced =  name.replace(/-/g, "_");
	}
	return replaced;
}
let colors = ["Pink", "Yellow", "Green"];

// standard for loop

console.log("******************************");
console.log("For Loop");
console.log("******************************");

for (let i = 0; i < colors.length; i++) {
    console.log(colors[i]);
}

// forEach loop

console.log("For Each Loop");
console.log("******************************");

colors.forEach(function (color) {
    console.log(color);
});

console.log("******************************");
console.log("For Each Loop vs For Loop");
console.log("******************************");

console.log("******************************");
console.log("For Each Loop");
console.log("******************************");
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

numbers.forEach(function (color) {
    if (color % 3 === 0) {
        console.log(color);
    }
});

console.log("******************************");
console.log("For Loop");
console.log("******************************");

for (let i = 1; i < numbers.length; i++) {
    if (i % 3===0) {
        console.log(i);
    }
}



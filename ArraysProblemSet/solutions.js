// printReverse
// Write a function printReverse() that takes an arrays as an argument and prints out the elements in the array
// in reverse order (don't actually rever the array itself);

console.log("****************---printReverse---*************************")

let myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function printReverse(arr) {
    arr.reverse();
    console.log(arr);
}

function printReverse2(arr) {
    // let reverse = arr.length;
    for (let i = arr.length - 1; i >= 0; i--) {
        console.log(arr[i]);
    }
}

printReverse(myArray);
printReverse2(myArray);

console.log("****************---end---*************************")

// isUniform()
// Write a function isUniform() which takes an array as an argument 
//and returns true if all elements in the array are identical

console.log("****************---printUniform---*************************")

let myArray2 = [1, 1, 1, 1];
let myArray3 = [2, 1, 1, 1];
let myArray4 = ["a", "a", "a", "a"];
let myArray5 = ["b", "a", "a", "c"];


function isUniform(arr) {
    for (let i = 0; i < arr.length; i++) {
        let output = arr[i];
        if(output === arr[i + 1]){
            return true;
        }
        return false;
    }
}
isUniform(myArray2);
isUniform(myArray3);

console.log("****************---end---*************************")

// SumArray()
// Write a function that accepts an array of numbers
// and returns the sum of all numbers in the array

console.log("****************---sumArray---*************************")

let myArray7 = [5,6,7,3,2,1];

function sumArray(arr){
    let sum = 0;
    arr.forEach(function(counter){
        sum = sum += counter;
    })
    console.log(sum)
}
sumArray(myArray7);


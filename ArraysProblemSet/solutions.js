// printReverse
// Write a function printReverse() that takes an arrays as an argument and prints out the elements in the array
// in reverse order (don't actually rever the array itself);

console.log("****************---printReverse---*************************")

let myArray = [1,2,3,4,5,6,7,8,9,10];

function printReverse(arr) {
    arr.reverse();
        console.log(arr);
    }

    function printReverse2(arr) {
        let reverse = arr.length-1;
        for(let i = reverse; i >=0; i--) {
            console.log(arr[i]);
        }
    }

printReverse(myArray);
printReverse2(myArray);

console.log("****************---end---*************************")



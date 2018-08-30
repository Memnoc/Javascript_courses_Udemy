var colors = generateRandomColors(6);
var squares = document.querySelectorAll(".square");
var colorPicked = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");

colorDisplay.textContent = colorPicked;

// add intial colors to squares
for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];

    // add click listeners to squares
    squares[i].addEventListener("click", function () {
        // grab colors of clicked square
        var clickedColor = this.style.backgroundColor;
        // compare color to pickedColor
        if (clickedColor === colorPicked) {
            messageDisplay.textContent = "Correct!";
            changeColors(colorPicked);
        } else {
        this.style.backgroundColor = "#232323";
        messageDisplay.textContent = "Try again";
        }
    });
}

// change colors for all the square when answer is correct
function changeColors(color) {
    // loop through all squares
    for(var i = 0; i < squares.length; i++){
            // change color to match given color
        squares[i].style.backgroundColor = color;
    }
}

function pickColor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num){
    // make an array
    var arr = [];
    // repeat num times
    for(var i = 0; i < num; i++){
        arr.push(randomColor());
    }
    // return that array
    return arr;
};

function randomColor() {
    //pick a "red" from 0 to -255
    var r = Math.floor(Math.random() * 256);
    //pick a "green" from 0 to -255
    var g = Math.floor(Math.random() * 256);
    //pick a "blue" from 0 to -255
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}
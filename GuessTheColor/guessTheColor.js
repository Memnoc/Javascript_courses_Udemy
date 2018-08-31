var numberOfSquares = 6;
var colors = generateRandomColors(numberOfSquares);
var squares = document.querySelectorAll(".square");
var colorPicked = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");


easyBtn.addEventListener("click", function () {
    hardBtn.classList.remove("selected");
    easyBtn.classList.add("selected");
    numberOfSquares = 3;
    colors = generateRandomColors(numberOfSquares);
    colorPicked = pickColor();
    colorDisplay.textContent = colorPicked;
    for (var i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
})
hardBtn.addEventListener("click", function () {
    easyBtn.classList.remove("selected");
    hardBtn.classList.add("selected");
    numberOfSquares = 6;
    colors = generateRandomColors(numberOfSquares);
    colorPicked = pickColor();
    colorDisplay.textContent = colorPicked;
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
        squares[i].style.display = "block";
    }

})


// Reset button
resetButton.addEventListener("click", function () {
    // generate all new colors
    colors = generateRandomColors(numberOfSquares);
    // pick a new randomn color from array
    colorPicked = pickColor();
    // change colorDisplay to match colorPicked
    colorDisplay.textContent = colorPicked;
    // change the colors of the squares
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
    }
    h1.style.backgroundColor = "#232323";
    if (reset.textContent === "Play Again?") {
        reset.textContent = "New Colors";
    }
})

// upate color display with the picked color
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
            changeColors(clickedColor);
            h1.style.backgroundColor = clickedColor;
            reset.textContent = "Play Again?";
        } else {
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try again";
        }
    });
}

// change colors for all the square when answer is correct
function changeColors(color) {
    // loop through all squares
    for (var i = 0; i < squares.length; i++) {
        // change color to match given color
        squares[i].style.backgroundColor = color;
    }
}

// Generate a random number 
function pickColor() {
    // generate a random number and multiply it by the length of the array
    var random = Math.floor(Math.random() * colors.length);
    // return the randomly generated number in the array
    return colors[random];
}

// generate 6 random colors
function generateRandomColors(num) {
    // make an array
    var arr = [];
    // repeat num times
    for (var i = 0; i < num; i++) {
        // get random color and push it to the array
        arr.push(randomColor());
    }
    // return that array
    return arr;
};

// create the random colors for the generateRandomColors(num) function
function randomColor() {
    //pick a "red" from 0 to -255
    var r = Math.floor(Math.random() * 256);
    //pick a "green" from 0 to -255
    var g = Math.floor(Math.random() * 256);
    //pick a "blue" from 0 to -255
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}
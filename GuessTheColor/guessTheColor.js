var numberOfSquares = 6;
var colors = [];
var colorPicked;

var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init() {
    // modeButtons eventListeners
    setUpModeButtons();
    setUpSquares();
    reset();
}

function setUpModeButtons() {
    for (var i = 0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener("click", function () {
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent === "Easy" ? numberOfSquares = 3 : numberOfSquares = 6;
            reset();
        });
    }
}

function setUpSquares() {
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
        squares[i].addEventListener("click", function () {
            // grab colors of clicked square
            var clickedColor = this.style.backgroundColor;
            // compare color to pickedColor
            if (clickedColor === colorPicked) {
                messageDisplay.textContent = "Correct!";
                resetButton.textContent = "Play Again?";
                changeColors(clickedColor);
                h1.style.backgroundColor = clickedColor;
    
            } else {
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try again";
            }
        });
    }
}

function reset() {
    // generate all new colors
    colors = generateRandomColors(numberOfSquares);
    // pick a new randomn color from array
    colorPicked = pickColor();
    // change colorDisplay to match colorPicked
    colorDisplay.textContent = colorPicked;
    resetButton.textContent = "New Colors";
    messageDisplay.textContent = "";
    // change the colors of the squares
    for (var i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
    h1.style.backgroundColor = "steelblue";
}

// Reset button
resetButton.addEventListener("click", function () {
    reset();
});

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
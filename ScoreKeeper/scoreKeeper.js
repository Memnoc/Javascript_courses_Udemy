var p1Btn = document.querySelector("#playerOne");
var p2Btn = document.querySelector("#playerTwo");
var resetBtn = document.querySelector("#reset");

var h1 = document.querySelector("h1");
var p1Display = document.querySelector("#p1Display");
var scoreLimit = document.querySelector("#limiter");
var numInput = document.querySelector("input");
var winningScoreDisplay = document.querySelector("p span");

var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var winningScore = 5;

p1Btn.addEventListener("click", function () {
    if (!gameOver) {
        p1Score++;
        if (p1Score === winningScore) {
            p1Display.classList.add("winner");
            gameOver = true;
        }
        p1Display.textContent = p1Score;
    }
});

p2Btn.addEventListener("click", function () {
    if (!gameOver) {
        p2Score++;
        if (p2Score === winningScore) {
            p2Display.classList.add("winner");
            gameOver = true;
        }
        p2Display.textContent = p2Score;

    }
});

resetBtn.addEventListener("click", function () {
    reset();
})

function reset(){
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = "0";
    p2Display.textContent = "0";
    p1Display.classList.remove("winner");
    p2Display.classList.remove("winner");
    gameOver = false;
}

numInput.addEventListener("change", function(){
    winningScoreDisplay.textContent = numInput.value;
    winningScore = Number(this.value);
    reset();
})



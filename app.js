
const displayMessage = function (message) {
    document.querySelector(".message").textContent = message;
};
const messageColor = function (color) {
    document.querySelector(".message").style.color = color;
};
const bodyBackgroundColor = function (color) {
    document.querySelector("body").style.backgroundColor = color;
};
const displayScore = function (score) {
    document.querySelector("#score").textContent = score;
};
const displaySecretNumber = function (secretNumber) {
    document.querySelector(".number").textContent = secretNumber;
};
const displayHighscore = function (highScore) {
    document.querySelector("#high-score").textContent = highScore;
};
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let totalScore = 20;
let highScoreValue = 0;
let resetButton = document.querySelector("#reset");
let checkButton = document.querySelector("#check");
let guessNum = document.querySelector("#guess");
displayScore(totalScore);

alert("By:Suraqah Talal");

//Check Button
checkButton.addEventListener("click", () => {
    let value = Number(guessNum.value);
    if (guessNum.value) {
        if (value <= 20 && value > -1) {
            if (secretNumber === value) {
                messageColor("");
                displayMessage("Winner");
                bodyBackgroundColor("green");
                displaySecretNumber(secretNumber);
                if (totalScore > highScoreValue) {
                    highScoreValue = totalScore;
                    displayHighscore(highScoreValue);
                }
            } else if (secretNumber !== value) {
                messageColor("");
                displayMessage(value > secretNumber ? "Too High!" : "Too low!");
                totalScore--;
                displayScore(totalScore);
                if (totalScore < 1) {
                    messageColor("");
                    displayMessage("Lose");
                    bodyBackgroundColor("red");
                    displayScore(0);
                    displaySecretNumber(secretNumber);
                }
            }
        } else {
            displayMessage(" Out of Range!");
            messageColor("yellow");
        }
    } else {
        displayMessage("Enter a Number");
        messageColor("yellow");
    }
});

//Reset ‌Button
resetButton.addEventListener("click", () => {
    totalScore = 0;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    displayMessage("Welcome back!");
    bodyBackgroundColor("");
    displayScore(totalScore);
    displaySecretNumber("?");
    guessNum.value = "";
    messageColor("");
});

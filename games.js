var myConfetti = confetti.create(null, {
    resize: true,
    useWorker: true
});

const body = document.body;
const numfield = document.getElementById("numfield");
const feedbackText = document.getElementById("feedback-text");

let secret;
let secretMin = 1;
let secretMax = 50;

function restartGame() {
    secret = randInt(secretMin, secretMax);
    numfield.min = secretMin;
    numfield.max = secretMax;
    numfield.value = secretMin;
}

function makeGuess() {
    let guess = parseInt(numfield.value);
    if (guess === secret) {
        feedbackText.innerHTML = `${guess} is correct!`;
        myConfetti({particleCount: 200, spread: 160});
        body.style.backgroundColor = "green";
    } else if (guess < secret) {
        feedbackText.innerHTML = `${guess} is too small`;
    } else {
        feedbackText.innerHTML = `${guess} is too large`;
    }
}

/**
* Generate a random integer within min and max
* @param {number} min 
* @param {number} max 
* @returns a random integer between min and max, inclusive
*/
function randInt(min, max) {
    let rand = Math.random();
    rand = rand * (max - min + 1);
    rand = rand + min;
    rand = Math.floor(rand);
    return rand;
}
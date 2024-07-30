// GUIDELINES:
//  1. Give every variable/const smallest scope
//  2. Grab HTML elements by tag and store in const
//  3. Put all other code inside functions

const body = document.body;
const numfield = document.getElementById("numfield");
const feedbackText = document.getElementById("feedback-text")
const numOfGuesses = document.getElementById("numGuesses");

var myConfetti = confetti.create(null, {
    resize: true,
    useWorker: true
});

let secret;
let secretMin = 1;
let secretMax = 50;
let guesses = 0;

function restartGame() {
    secret = randInt(secretMin, secretMax);
    numfield.min = secretMin;
    numfield.max = secretMax;
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

function makeGuess() {
    let guess = parseInt(numfield.value);
    if (guess === secret) {
            feedbackText.innerHTML = `${guess} is correct`;
            myConfetti({particleCount: 100, spread: 160});
            body.style.backgroundColor = "green";
            getNumGuesses();
    } else if (guess < secret) {
        feedbackText.innerHTML = `${guess} is too small`;
        body.style.backgroundColor = "red";
        getNumGuesses();
    } else {
        feedbackText.innerHTML = `${guess} is too large`;
        body.style.backgroundColor = "red";
        getNumGuesses();
    }
}

function getNumGuesses() {
    guesses += 1;
    numOfGuesses.innerHTML = `Number of Guesses: ${guesses}`;
}

function reset() {
    guesses = 0;
    secret = randInt(secretMin, secretMax);
    numfield.min = secretMin;
    numfield.max = secretMax;
    numOfGuesses.innerHTML = 'Number of Guesses: '
}


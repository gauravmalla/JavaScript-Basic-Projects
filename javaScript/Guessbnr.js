let randomNbr = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#sbt')

const userInput = document.querySelector('#guessFeild')

const guessSlot = document.querySelector('.guesses')

const remaining = document.querySelector('.lastResult')

const startOver = document.querySelector('.resultParas')

const lowOrHi = document.querySelector('.lowOrHi')


const p = document.createElement('p')


let prevGuess = []

let numGuess = 0

let playGame = true

if (playGame) {
    submit.addEventListener('click', function (e) {
        e.preventDefault()
        const guess = parseInt(userInput.value)
        console.log(guess)

        validateGuess(guess)
    })
}
//validation
function validateGuess(guess) {
    if (isNaN(guess)) {
        alert('please enter a valid number')
    } else if (guess < 1) {
        alert('please enter a valid number')
    } else if (guess > 100) {
        alert('please enter a valid number')
    } else {
        prevGuess.push(guess)
        if (numGuess === 10) {
            displayGuess(guess)
            displayMessage(`Game Over. Random Number Was ${randomNbr}`)

            endGame();

        }
        else {
            displayGuess(guess)
            checkGuess(guess)
        }
    }

}



// check number
function checkGuess(guess) {

    if (guess === randomNbr) {
        displayMessage(`you guessed it right`)
        endGame()
    } else if (guess < randomNbr) {
        displayMessage(`Number is Too Low`)
    }
    else if (guess > randomNbr) {
        displayMessage(`Number is Too high`)
    }
}


// clean and display updated guesses and numbers
function displayGuess(guess) {

    userInput.value = ""
    guessSlot.innerHTML += `${guess}`
    numGuess++;

    remaining.innerHTML = `${10 - numGuess}`
}

// display messages low or high
function displayMessage(message) {

    lowOrHi.innerHTML = `<h2>${message}</h2>`

}

function endGame() {

    userInput.value = '';
    userInput.setAttribute('desabled', '')
    p.classList.add('button')
    p.innerHTML = `<h2 id="newGame">Start New Game</h2>`;

    startOver.appendChild(p);

    playGame = false;

    newGame();
}
//for restart game 
function newGame() {

    const newGameButton = document.querySelector('#newGame')

    newGameButton.addEventListener('click', function (e) {

        randomNbr = parseInt(Math.random() * 100 + 1);

        prevGuess = []
        numGuess = 0
        guessSlot.innerHTML = ''
        remaining.innerHTML = `${10 - numGuess}`;

        userInput.removeAttribute('disabled')

        startOver.removeChild(p)

        playGame = true
    })

}


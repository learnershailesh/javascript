let randomNumber = parseInt(Math.random()*100+1);

const submit = document.querySelector("#Subt")
const guessNumber = document.querySelector(".guessField")
const result = document.querySelector(".lastResult")
const lowhight = document.querySelector(".lowOrhigh")
const gussesarea = document.querySelector(".guesses")
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if(playGame){
    submit.addEventListener('click', function(e){
        e.preventDefault();
         const guess =parseInt(guessNumber.value);
         validateGusses(guess);
    });
}

function validateGusses (guess){
    if(isNaN(guess)){
        alert('pleasew enter a valid number')
    }
    else if(guess<1){
        alert('please enter a valid number');
    }
    else if(guess>100){
        alert('please enter a valid number less than 100')
    }
    else{
        prevGuess.push(guess);
        if(numGuess===11){
            displayGuess(guess)
            displayMessage(`Game over. random number was ${randomNumber}`)
            endGame();
        }
        else{
            displayGuess(guess);
            checkguess(guess);
        }
    }
}

function checkguess(guess){
    if(guess === randomNumber){
        displayMessage('you guessed it right');
        endGame();
    }
    else if(guess<randomNumber){
        displayMessage('number is to low')
    }
    else if(guess>randomNumber){
        displayMessage('number is to hight')
    }
}
function displayGuess(guess){
    guessNumber.value = '';
    gussesarea.innerHTML+=`${guess}, `;
    numGuess++;
    result.innerHTML = `${11-numGuess}`
}

function displayMessage(message){
    lowhight.innerHTML = `<h2>${message}</h2>`
}
function endGame(){
    guessNumber.value='';
    guessNumber.setAttribute('disable', '')
    p.classList.add('button')
    p.innerHTML = `<h2 id="newGame">Start a new game</h2>`;
    startOver.appendChild(p);
    playGame = false;
    newGame();
}

function newGame(){
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', function(e) {
        randomNumber = parseInt(Math.random() * 100 +1);
        prevGuess = [];
        numGuess = 1;
        gussesarea.innerHTML = '';
        result.innerHTML=`${11-numGuess}`;
        guessNumber.removeAttribute('disabled');
        startOver.removeChild(p);

        playGame = true;
    });
}



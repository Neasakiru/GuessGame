let hiddenNumber = 0;
const buttonCheckNumber = document.getElementById("checkNumber");
const hiddenNumberSpan = document.querySelector("#hiddenNumber");
const scoreSpan = document.querySelector("#score");
const highscoreSpan = document.querySelector("#highscore");
const hintSpan = document.querySelector("#hint");
const buttonReset = document.getElementById("reset");
let score = 0;
let highscore = 0;

function randomizeNumber() {
    return Math.floor(Math.random()*100)+1
}

//Init
function init(){
    hiddenNumberSpan.textContent = "?";
    score = 0;
    highscore = 0;
    scoreSpan.textContent = score;
    highscoreSpan.textContent = highscore;
    hiddenNumber = randomizeNumber();
    console.log(hiddenNumber);
}

//Button click check
buttonCheckNumber.onclick = checknumber = () =>{
    const numberToGuess = document.querySelector("#numberToGuess").value;
    if(numberToGuess == hiddenNumber) {
        hintSpan.textContent = "Brawo wygrałeś";
        hiddenNumberSpan.textContent = hiddenNumber;
        document.querySelector(".game").style.backgroundColor = "green";
        score++;
        scoreSpan.textContent = score;
        if(score < highscore || highscore === 0){
            highscore = score;
            highscoreSpan.textContent = highscore;
        }     
    }
    else if(numberToGuess > hiddenNumber){
        hintSpan.textContent = "Ukryta liczba jest mniejsza"
        score++;
        scoreSpan.textContent = score;
    }
    else if(numberToGuess < hiddenNumber){
        hintSpan.textContent = "Ukryta liczba jest wieksza"
        score++;
        scoreSpan.textContent = score;
    }
}
buttonReset.onclick = reset = () => {
    document.querySelector(".game").style.backgroundColor = "rgb(48, 48, 48)";
    hiddenNumberSpan.textContent = "?";
    hiddenNumber = randomizeNumber();
    score = 0;
    scoreSpan.textContent = score;
    console.log(hiddenNumber);
}
window.onload = init;

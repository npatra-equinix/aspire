window.addEventListener('DOMContentLoaded', () => {

    let randomNumber = Math.floor(Math.random() * 100) + 1;

    const guesses = document.querySelector('.guesses');
    const lastResult = document.querySelector('.lastResult');
    const lowOrHigh = document.querySelector('.lowOrHigh');

    const guessField = document.querySelector('.guessField');
    const guessSubmit = document.querySelector('.guessSubmit');

    let guessCount = 1;
    let resetButton;
    guessField.focus();

    function checkGuess() {
        console.log("jfkgf")
        const userGuess = Number(guessField.value);

        // if(guessCount === 1){
        //     guesses.textContent = "Previous Guesses: ";
        // }
        guesses.textContent += `${userGuess} `;

        if (userGuess === randomNumber) {
            lastResult.textContent = "Congratulation you won!";
            lastResult.style.backgroundColor = 'green';
            lowOrHigh.textContent = '';
            setGameOver();
        }
        else if (guessCount === 10) {
            lastResult.textContent = "Opps! you lost all chances";
            lowOrHigh.textContent = '';
            setGameOver();
        }
        else {
            lastResult.textContent = "Wrong!";
            lastResult.style.backgroundColor = "red";
            if (userGuess < randomNumber) {
                lowOrHigh.textContent = "your number is too low";
            }
            else {
                lowOrHigh.textContent = "your number is too high";
            }
        }
        guessCount++;
        guessField.value = '';
        guessField.focus();
    }

    guessSubmit.addEventListener('click', checkGuess);


    function setGameOver() {
        guessField.disabled = true;
        guessSubmit.disabled = true;

        resetButton = document.createElement('button');
        resetButton.textContent = 'start new game';
        document.body.append(resetButton);

        resetButton.addEventListener('click', resetGame);

    }

    function resetGame() {
        guessCount = 1;

        const resetParas = document.querySelectorAll('.resulParas p');
        for (const resetPara of resetParas) {
            resetPara.textContent = '';
        }

        resetButton.parentNode.removeChild(resetButton);
        guessField.disabled = false;
        guessSubmit.disabled = false;
        guessField.textContent = '';
        guessField.focus();
        guesses.textContent = "";
        lastResult.textContent = "";
        lowOrHigh.textContent = "";
        lastResult.style.backgroundColor = 'white';
        randomNumber = Math.floor(Math.random() * 100) + 1;

    }

});
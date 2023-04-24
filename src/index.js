const form = document.querySelector("#gameForm");
const rangeInput = document.querySelector("#range input");
const guessInput = document.querySelector("#guess input");

const playResult = document.querySelector("#playResult");
const gameResult = document.querySelector("#gameResult");

function formSubmit(event) {
  event.preventDefault();
  const rangeNumber = parseInt(rangeInput.value);
  const guessNumber = parseInt(guessInput.value);
  const randomNumber = Math.ceil(Math.random() * rangeNumber);
  playResult.innerText = `You chose: ${guessNumber}, the machine chose: ${randomNumber}.`;

  if (guessNumber === randomNumber) {
    gameResult.innerText = "You win!";
  } else {
    gameResult.innerText = "You lose!";
  }
}

form.addEventListener("submit", formSubmit);

const randomForm = document.querySelector("#random-form");
const randomNumber = document.querySelector("#random-form #random-number");
const randomGuess = document.querySelector("#random-form #random-guess");
const choseNumber = document.querySelector("#random-form #chose-number");
let youWin = document.querySelector("#random-form #you-win");

const HIDDEN_CLASSNAME = "hidden";
const USER_CHOSE = "userChose";

function onRandomSubmit(event) {
  event.preventDefault();
  const value = randomGuess.value;
  if (value === "" || value < 0) {
    alert("Please enter a valid number");
  } else {
    localStorage.setItem(USER_CHOSE, randomNumber.value);
    paintNumber(value);
  }
}

function paintNumber(value) {
  const machineChose = Math.floor(Math.random() * randomNumber.value);
  choseNumber.innerText = `You chose: ${value}, the machine chose: ${machineChose}`;
  choseNumber.classList.remove(HIDDEN_CLASSNAME);
  youWin.classList.remove(HIDDEN_CLASSNAME);
  win(value, machineChose);
}

function win(value, machineChose) {
  console.log(value, machineChose);
  if (parseInt(value) === machineChose) {
    youWin.innerText = "You Win!";
  } else {
    youWin.innerText = "You lost!";
  }
}

if (!localStorage.getItem(USER_CHOSE) || !randomNumber.value) {
  choseNumber.classList.add(HIDDEN_CLASSNAME);
  youWin.classList.add(HIDDEN_CLASSNAME);
  randomForm.addEventListener("submit", onRandomSubmit);
} else {
  localStorage.setItem(USER_CHOSE, randomNumber.value);
  const userChoseSaved = localStorage.getItem(USER_CHOSE);
  paintNumber(userChoseSaved);
}

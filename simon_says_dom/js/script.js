/* Descrizione: Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi. Dopo 30 secondi i numeri scompaiono e appaiono invece 5 input in cui l'utente deve inserire i numeri che ha visto precedentemente, nell'ordine che preferisce.
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
*/

// timer di 30 secondi
// 5 imput
//hai indovinato 2 numeri! Il 3 ed il 5 NOTA: non è importante l'ordine con cui l'utente inserisce i numeri, basta che ne indovini il più possibile.

// "Dati 2 array di numeri, indica quali e quanti numeri ci sono in comune tra i due array"

// numeri che devono comparire
//const firstNumberList = ["5", "7", "9", "2", "6"];

// gen. nubers
// generare 5 numeri casuali
let numbers = [];

for (let i = 0; i < 5; i++) {
  let numb = Math.ceil(Math.random() * 50);

  //   if (numb != numb) {
  //
  //   }
  numbers.push(numb);
  //console.log(numb);
}
console.log(numbers);

const numbersList = document.getElementById("numbers-list");
numbersList.innerHTML = numbers;
// console.log(numbers);
//timer
const countdown = document.getElementById("countdown");
const answersForm = document.getElementById("answers-form");
let seconds = 1; // cambiare !
const limit = 0;
// console.log(numbers);
const timer = setInterval(() => {
  seconds--;
  console.log(seconds);
  console.log(seconds === 0);

  // stampare countdown in pagina
  countdown.innerText = seconds;

  //così si vede lo 0 in pagina
  if (seconds <= 0) {
    clearInterval(timer);
    // nasconde il i numeri
    numbersList.innerText = ""; // stringa vuota ci permette di non far vedere niente
    // far apparire form
    answersForm.classList.remove("d-none");
  }
}, 1000);

// seleziona tutti gli imput
const inputsEl = document.querySelectorAll("input");
const message = document.getElementById("message");

// non permette alla pagina di ricaricarsi
answersForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // risposte
  const userAnwers = [];
  const userGuess = [];

  for (let i = 0; i < inputsEl.length; i++) {
    const inputEl = inputsEl[i];
    userAnwers.push(Number(inputEl.value));

    if (numbers.includes(inputEl)) {
      userGuess.push(inputEl);
      message.innerText = userGuess;
    }
  }
});

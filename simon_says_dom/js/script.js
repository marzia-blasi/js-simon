/* Descrizione: Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi. Dopo 30 secondi i numeri scompaiono e appaiono invece 5 input in cui l'utente deve inserire i numeri che ha visto precedentemente, nell'ordine che preferisce.
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
*/

// timer di 30 secondi
// 5 imput
//hai indovinato 2 numeri! Il 3 ed il 5 NOTA: non è importante l'ordine con cui l'utente inserisce i numeri, basta che ne indovini il più possibile.

// "Dati 2 array di numeri, indica quali e quanti numeri ci sono in comune tra i due array"

// numeri che devono comparire
const firstNumberList = ["5", "7", "9", "2", "6"];

// gen. nubers
// generare 5 numeri casuali
let numbers = [];

for (let i = 0; i < 5; i++) {
  let numb = Math.ceil(Math.random() * 50);
  numbers.push(numb);
  // console.log(numb);
}
console.log(numbers);

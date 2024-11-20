/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.

// ARROW FUNCTION

const inizialiArrow = (array) => {
  let arrayvuoto = []
  for (i=0; i<array.length; i++)
    arrayvuoto.push(array[i].charAt(0))

  return arrayvuoto
}


// Invoca la funzione qui e stampa il risultato in console

console.log(inizialiArrow(names))



//Risultato atteso: ["A", "L", "M", "A", "G", "A"]
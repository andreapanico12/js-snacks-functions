/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.

// ARROW FUNCTION

const inizialiArrayArrow = (array) => {
  let arrayvuoto = []
  for (i=0; i<array.length; i++)
    arrayvuoto.push(array[i].charAt(0))

  return arrayvuoto
}

// ARROW FUNCTION METODO MAP TROVATO IN DOCUMENTAZIONE

const inizialiArrayMap = (array) => array.map(item => item.charAt(0));


//FUNCTION 

function inizialiArray (array){
  let arrayvuoto = []
  for (i=0; i<array.length; i++)
    arrayvuoto.push(array[i].charAt(0))

  return arrayvuoto

}

// Invoca la funzione qui e stampa il risultato in console

console.log(inizialiArrayArrow(names))

console.log(inizialiArrayMap(names))

console.log(inizialiArray(names))



//Risultato atteso: ["A", "L", "M", "A", "G", "A"]
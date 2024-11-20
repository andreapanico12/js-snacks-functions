/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.

const letterfilter = ( arrayStringhe, lettera) => {

  let arrayvuoto = [];

  for (i=0; i<arrayStringhe.length; i++){

    if (arrayStringhe[i].charAt(0) == lettera.toUpperCase()){

        arrayvuoto.push(arrayStringhe[i]);
    }
    
  }

   return arrayvuoto; 
}


// Invoca la funzione qui e stampa il risultato in console

console.log(letterfilter(names, `a`));

//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]
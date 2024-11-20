/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.

let numerovocali = 0
let vocali = [`a`,`e`,`i`,`o`,`u`];
for (i=0; i<word.length; i++){
  if (vocali.includes(word.charAt(i)) === true){
    numerovocali++
  }
}
console.log(numerovocali)

// Invoca la funzione qui e stampa il risultato in console



//Risultato atteso se si passa 'javascript': 3 (a, a, i)
/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.



function counterVocali (stringa){
  let numerovocali = 0
  let vocalipresenti = []
  let vocali = [`a`,`e`,`i`,`o`,`u`];
  for (i=0;i<stringa.length; i++){
    if(vocali.includes(word.charAt(i))=== true){
      numerovocali++
      vocalipresenti.push(word.charAt(i))
      vocalipresenti.join()
    }
  }
  return numerovocali  + `(${vocalipresenti})`
}

// Invoca la funzione qui e stampa il risultato in console

console.log(counterVocali(word))

//Risultato atteso se si passa 'javascript': 3 (a, a, i)
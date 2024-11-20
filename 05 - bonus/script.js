/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const name = 'Mario';


// Dichiara la funzione qui.

function saluto(nome){
  let message
  let date = new Date()
  if ( date.getHours() <= 13)
    message = `Buongiorno ${nome}`;
  else if (date.getHours()<= 17)
    message = `Buon pomeriggio ${nome}`;
  else if (date.getHours > 17)
    message = `Buonasera ${nome}`

  return message
}


// Invoca la funzione qui e stampa il risultato in console

console.log(saluto(name) );


//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.
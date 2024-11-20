/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */

const name = 'Mario';


// Dichiara la funzione qui.

// SOLUZIONE ARROW FUNCTION

const salutoArrow = (nome) => `Buongiorno ${nome}!`

function saluto(nome){
  let message = `Buongiorno ${nome}!`;
  return message;
}


// Invoca la funzione qui e stampa il risultato in console

console.log(salutoArrow(name));
console.log(saluto(name));

//Risultato atteso se si passa 'Mario': // ciao Mario
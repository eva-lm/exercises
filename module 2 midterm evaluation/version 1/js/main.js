'use strict';

const field = document.querySelector('.app__field');
const btn = document.querySelector('.app__play');
const clue = document.querySelector('.app__clue');
const counterContainer = document.querySelector('.app__counter');

let counter = 0;
counterContainer.innerHTML = counter;



// 1. generar el número aleatorio
function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

// Anda, chacho, píntame en la consola un número random hasta 100;
const myRandomNumber = getRandomNumber(100);
console.log(myRandomNumber);
console.log(`Mi número aleatorio es ${myRandomNumber}`);

function game() {
  // 2. Al hacer click en prueba pasa:

  // - Leer el número del usuario, y que sea un número
  const userNumber = parseInt(field.value);

  // - Comprobar los dos números
  if (myRandomNumber === userNumber) {
    // - Si son iguales > Gano
    clue.innerHTML = 'Chacho, que has ganado :)';

  } else if (myRandomNumber > userNumber) {
    // - Si es mayor > pista de que es mayor 
    clue.innerHTML = 'Cortico, dale un poco más';
    counter += 1;
    counterContainer.innerHTML = counter;
  } else {
    // - Si es menor > pista de que es menor 
    clue.innerHTML = 'Nene, a dónde vas?';
    counter += 1;
    counterContainer.innerHTML = counter;

  }
  // - Actualiza el contador


}


btn.addEventListener('click', game);
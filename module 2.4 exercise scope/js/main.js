'use strict';

const globalVar = 'Ey, I\'m global';

if (2 === 2) {
  // ejemplo para asegurarnos de que entra en el bloque if
  const globalVar = 'Ey, I\'m not really global';
  const notGlobalVar = 'Shirt, I\'m not global: (';

  console.log(globalVar); // devuelve 'Ey, I'm not really global'
  console.log(notGlobalVar); // devuelve 'Shirt, I'm not global :('
}

console.log(globalVar); // devuelve 'Ey, I'm global'
console.log(notGlobalVar); // da un error porque no está definida

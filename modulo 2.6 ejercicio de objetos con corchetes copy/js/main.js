'use strict';

const setCarProperty = (obj, property, value) => {
  obj[property] = value;
}

const car = {}

console.log('Car properties:', car);
debugger;

setCarProperty(car, 'color', 'red');
console.log('Car properties:', car);
debugger;

setCarProperty(car, 'doors', 5);
console.log('Car properties:', car);
debugger;

setCarProperty(car, 'airbag', true);
console.log('Car properties:', car);
debugger;

setCarProperty(car, 'gasoil', '60%');
console.log('Car properties:', car);
debugger;

setCarProperty(car, 'color', 'blue');
console.log('Car properties:', car);

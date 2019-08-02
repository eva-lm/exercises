'use strict';

console.log(1);

let myResponse;

const parseResponseToJson = (response) => {
  // si queremos forzar un error ponemos en el siguiente if un true
  if (false) {
    // esto produce un error porque resp no existe
    // cuando se produce un error no se ejecuta printData y sí printError
    return resp.json();
  } else {
    return response.json();
  }
};

const printData = data => {
  console.log(2)
  console.log(data);
};

const printError = (err) => {
  console.error('Ha habido este error:', err, myResponse);
}

// también podemos producir un error cambiando la dirección de la línea siguiente por una dirección que no exista
fetch('./server-data/perretes.json')
  .then(parseResponseToJson)
  .then(printData)
  .catch(printError)

console.log(4);
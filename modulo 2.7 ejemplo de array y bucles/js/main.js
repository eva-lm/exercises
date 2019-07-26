'use strict';

const students = [
  'Amanda Elena Padilla Santiago',
  'Ana Amaro Vázquez',
  'Ana Montiaga García',
  'Bárbara Chaves Barcellos',
  'Beatriz del Valle',
  'Eva Lorenzo Mendieta',
  'Isabel Pizarro Nogales',
  'Laura Sánchez Martín',
  'Laura Pareja Almodóvar',
  'Laura Ruiz Mazorra',
  'Luz de Belén Aguirre Morales',
  'Maria Sola Hornedo',
  'María del Mar Prieto Nieto',
  'Raquel Montilla Calvo',
  'Raquel Méndiz Mateo',
  'Samantha Cancino Cofré',
  'Sandra Cubero Rosado',
  'Sara Martin Gutierrez',
  'Sara Marín Pino',
  'Tamara Leticia Sánchez Orellana'
];

// students[3] = 'Ada Lovelace';

let info;
let ulContent = '';

for (let i = 0; i < 20; i = i + 1) {
  info = 'Student #' + i + ': ' + students[i];
  console.log(info);
  ulContent = ulContent + '<li>' + info + '</li>';
}

const ulElement = document.querySelector('.js-list');
ulElement.innerHTML = ulContent;
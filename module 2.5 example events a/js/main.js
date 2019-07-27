'use strict';

const handleParagraphClick = (ev) => {
  console.log('El párrafo ha sido pulsado');
  console.log('El parrafo pulsado ha sido', ev.currentTarget);
  console.log('Haz click derecho sobre este elemento ', ev.currentTarget, ' y pulsa "Reveal in Elements panel"');
}

const paragraph = document.querySelector('.js-paragraph');

paragraph.addEventListener('click', handleParagraphClick)
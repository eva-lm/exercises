'use strict';

const handleContainerClick = (ev) => {
  console.log('handleContainerClick: el elemento pulsado es', ev.target);
  console.log('handleContainerClick: el elemento escuchado es', ev.currentTarget);
}

const handleLinkClick = (ev) => {
  console.log('handleLinkClick: el elemento pulsado es', ev.target);
  console.log('handleLinkClick: el elemento escuchado es', ev.currentTarget);

  ev.preventDefault(); // des/comentar esta linea a ver qué pasa
  ev.stopPropagation(); // des/comentar esta linea a ver qué pasa
}

const container = document.querySelector('.js-container');
const link = document.querySelector('.js-link');

container.addEventListener('click', handleContainerClick);
link.addEventListener('click', handleLinkClick);
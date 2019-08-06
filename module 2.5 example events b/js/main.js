'use strict';

// container

const handleContainerClick = ev => {
  console.log('handleContainerClick: el elemento pulsado es', ev.target);
  console.log('handleContainerClick: el elemento escuchado es', ev.currentTarget);
  ev.preventDefault();
};

const container = document.querySelector('.js-container');
container.addEventListener('click', handleContainerClick);

// links

const handleLinkClick = ev => {
  console.log('handleLinkClick: el elemento pulsado es', ev.target);
  console.log('handleLinkClick: el elemento escuchado es', ev.currentTarget);

  ev.preventDefault(); // des/comentar esta linea a ver qué pasa
  // ev.stopPropagation(); // des/comentar esta linea a ver qué pasa
};

const linkAdalab = document.querySelector('.js-link-adalab');
linkAdalab.addEventListener('click', handleLinkClick);

const linkGoogle = document.querySelector('.js-link-google');
linkGoogle.addEventListener('click', handleLinkClick);

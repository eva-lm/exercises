'use strict';

const handleForm = function (ev) {
  ev.preventDefault();
}

const form = document.querySelector('.js-form');

form.addEventListener('submit', handleForm);
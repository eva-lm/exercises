'use strict';

const handleForm = function (ev) {
  ev.preventDefault();
  console.log('Número introducido por la usuaria:', getInputValue());
  updateFeedback();
  updateCounter();
}

const updateFeedback = function () {
  const inputValue = getInputValue();
  if (isNaN(inputValue)) {
    updateFeedbackElement('Escribe un número, por favor');
  } else if (inputValue < 1 || inputValue > 100) {
    updateFeedbackElement('El número debe estar entre 1 y 100');
  } else if (inputValue === myRandomNumber) {
    updateFeedbackElement('Has ganado, campeona!');
  } else if (inputValue > myRandomNumber) {
    updateFeedbackElement('Demasiado alto');
  } else {
    updateFeedbackElement('Demasiado bajo');
  }
}

const updateCounter = function () {
  countNumber++;
  counter.innerHTML = countNumber;
}

const getInputValue = function () {
  return parseInt(inputNumber.value);
}

const updateFeedbackElement = function (text) {
  feedback.innerHTML = text;
}

const getRandomNumber = function (max) {
  return Math.ceil(Math.random() * max);
}

const myRandomNumber = getRandomNumber(100);
const form = document.querySelector('.js-form');
const inputNumber = document.querySelector('.js-input-number');
const feedback = document.querySelector('.js-feedback');
const counter = document.querySelector('.js-counter');
let countNumber = 0;
form.addEventListener('submit', handleForm);

console.log(`Mi número aleatorio es ${myRandomNumber}`);
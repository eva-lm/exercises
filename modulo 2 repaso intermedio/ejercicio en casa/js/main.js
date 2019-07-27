'use strict';

// listener

const updateData = ev => {
  updateFace();
  updateBackground();
};

// face

const updateFace = () => {
  document.querySelector('.js-face').innerHTML = document.querySelector('.js-select').value;
};

// background

const updateBackground = () => {
  const randomNumber = getRandomNumber(100);
  const isOddNumber = isOdd(randomNumber);
  const container = document.querySelector('.js-container');
  const className = isOddNumber ? 'color-chilean-fire' : 'color-correct-yellow';
  // remove all classes
  container.classList.remove('color-chilean-fire', 'color-correct-yellow');
  // add correct class
  container.classList.add(className);
};

const getRandomNumber = (max = 1) => {
  return Math.floor(Math.random() * max);
};

const isOdd = number => {
  return number % 2 === 1;
};

const button = document.querySelector('.js-button');
button.addEventListener('click', updateData);
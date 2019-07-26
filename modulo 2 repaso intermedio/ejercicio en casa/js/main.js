"use strict";

// face

const updateFace = () => {
  const select = document.querySelector(".js-select");
  const face = document.querySelector(".js-face");
  const selectValue = select.value;
  face.innerHTML = selectValue;
};

// background

const updateBackground = () => {
  const randomNumber = getRandomNumber(100);
  const isOddNumber = isOdd(randomNumber);
  const colorCorrectYellow = "#ffcc00";
  const colorChileanFire = "#ff9900";
  const backgroundColor = isOddNumber ? colorChileanFire : colorCorrectYellow;
  const container = document.querySelector(".js-container");
  container.style.backgroundColor = backgroundColor;
};

const getRandomNumber = (max = 1) => {
  return Math.floor(Math.random() * max);
};

const isOdd = number => {
  return number % 2 === 1;
};

// listener

const updateData = ev => {
  updateFace();
  updateBackground();
};

const button = document.querySelector(".js-button");
button.addEventListener("click", updateData);

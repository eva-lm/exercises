"use strict";

const updatePage = function(ev) {
  ev.preventDefault();
  updateFace();
  updateBackgroundColor();
};

const updateFace = function() {
  // const select = document.querySelector(".js-select");
  // const faceValue = select.value;
  // const face = document.querySelector(".js-face");
  // face.innerHTML = faceValue;
  document.querySelector(".js-face").innerHTML = document.querySelector(".js-select").value;
};

const updateBackgroundColor = function() {
  const randomNumber = getRandomNumber();
  const container = document.querySelector(".js-container");
  container.classList.remove("correct-yellow-color", "chilean-fire-color");
  if (isOdd(randomNumber)) {
    container.classList.add("chilean-fire-color");
    // container.style.backgroundColor = "#ff9900";
  } else {
    container.classList.add("correct-yellow-color");
    // container.style.backgroundColor = "#ffcc00";
  }
  // const className = isOdd(randomNumber) ? "chilean-fire-color" : "correct-yellow-color";
  // container.classList.add(className);
};

const isOdd = function(number) {
  return number % 2 === 1;
};

const getRandomNumber = function() {
  return Math.floor(Math.random() * 100);
};

const button = document.querySelector(".js-button");

button.addEventListener("click", updatePage);

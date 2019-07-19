"use strict";

const showMessage = function() {
  let ageValue = age.value;
  ageValue = parseInt(ageValue);

  if (ageValue > 18) {
    result.innerHTML = "Puedes pasar";
  } else {
    result.innerHTML = "Espera unos añitos";
  }
};

const age = document.querySelector(".age");
const result = document.querySelector(".result");

age.addEventListener("change", showMessage);

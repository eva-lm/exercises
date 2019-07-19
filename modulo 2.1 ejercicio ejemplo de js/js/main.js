"use strict";

const sum = function() {
  // get numberA value
  let numberAValue = numberA.value;
  // parse string value to number value
  numberAValue = parseInt(numberAValue);

  // get numberB value
  let numberBValue;
  numberBValue = numberB.value;
  // parse string value to number value
  numberBValue = parseInt(numberBValue);

  // add values
  const resultValue = numberAValue + numberBValue;
  // set result value in result input element
  result.value = resultValue;
};

// get numberA dom element
const numberA = document.querySelector(".numberA");
// get numberB dom element
const numberB = document.querySelector(".numberB");
// get result dom element
const result = document.querySelector(".result");

// listen changes in numberA input
numberA.addEventListener("change", sum);
// listen changes in numberA input
numberB.addEventListener("change", sum);

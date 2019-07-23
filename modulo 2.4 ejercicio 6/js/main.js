"use strict";

function getEl(selector) {
  const element = document.querySelector(selector);
  if (element === null) {
    console.error(`No existe ningún elemento con clase, id o tag llamado ${selector}`);
    return null;
  } else {
    return element;
  }
}

const btnEl = getEl(".btn");

console.log(btnEl);

const hEl = getEl(".h3");

console.log(hEl);

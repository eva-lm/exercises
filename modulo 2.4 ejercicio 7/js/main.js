
function getElContent(selector) {
  const el = getEl(selector);
  return el.innerHTML;
}

function getEl(selector) {
  return document.querySelector(selector);
}

function isOdd(selector) {
  let number = getElContent(selector);
  number = parseInt(number);
  return number % 2 === 0;
}

const result = isOdd('.number');
console.log(result);

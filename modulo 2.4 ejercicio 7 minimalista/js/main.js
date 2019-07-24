
function getElContent(selector) {
  const element = getEl(selector);
  return element.innerHTML;
}

function getEl(selector) {
  return document.querySelector(selector);
}

function isOdd(selector) {
  let number = getElContent(selector);
  number = parseInt(number);
  return number % 2 === 0;
}

const oddResult = isOdd('.odd-number');
console.log(oddResult);

const evenResult = isOdd('.even-number');
console.log(evenResult);

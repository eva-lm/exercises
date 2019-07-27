function getEl(selector) {
  return document.querySelector(selector);
}

function isOdd(selector) {
  const element = getEl(selector);
  const number = parseInt(element.innerHTML);
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

const oddResult = isOdd('.odd-number');
console.log(oddResult);

const evenResult = isOdd('.even-number');
console.log(evenResult);

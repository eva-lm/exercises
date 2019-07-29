'use strict';

const printDate = () => {
  const date = new Date();
  console.log('Son las', date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds() + ':' + date.getMilliseconds());
};

console.log('Hello');
setInterval(printDate, 1000);
console.log('Goodbye');
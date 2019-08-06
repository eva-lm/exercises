'use strict';

const dates = document.querySelectorAll('.js-date');

for (const date of dates) {
  if (date.dataset.dateformat === 'm/d/y') {
    date.innerHTML = 'Date: 12/31/2019';
  } else if (date.dataset.dateformat === 'd/m/y') {
    date.innerHTML = 'Date: 31/12/2019';
  }
  console.log(date, date.dataset);
}

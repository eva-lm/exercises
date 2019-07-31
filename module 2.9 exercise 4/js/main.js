'use strict';

const tasks = [{
    name: "Recoger setas en el campo",
    completed: true
  },
  {
    name: "Comprar pilas",
    completed: true
  },
  {
    name: "Poner una lavadora de blancos",
    completed: true
  },
  {
    name: "Aprender cómo se realizan las peticiones al servidor en JavaScript",
    completed: false
  }
];

const updateTasks = function () {
  getCheckboxesValues();
  printTasks();
};

const resetTasks = function (ev) {
  if (ev) {
    ev.preventDefault();
  }
  for (let idx = 0; idx < tasks.length; idx += 1) {
    tasks[idx].completed = false;
  }
  printTasks();
};

const getCheckboxesValues = function () {
  const checkboxes = document.querySelectorAll('.js-checkbox');
  for (let idx = 0; idx < checkboxes.length; idx += 1) {
    tasks[idx].completed = checkboxes[idx].checked;
  }
};

const printTasks = function () {
  let listHtml = '';
  for (let idx = 0; idx < tasks.length; idx++) {
    listHtml += `<li class="${getItemClassNames(tasks[idx].completed)}">
      ${getCheckboxHtml(tasks[idx].completed)}
      ${tasks[idx].name}
    </li>`;
  }
  list.innerHTML = listHtml;
};

const getItemClassNames = function (completed) {
  return completed ? 'through' : '';
}

const getCheckboxHtml = function (completed) {
  if (completed) {
    return `<input type="checkbox" class="js-checkbox" checked>`;
  } else {
    return `<input type="checkbox" class="js-checkbox">`;
  }
}

const list = document.querySelector('.js-list');
list.addEventListener('click', updateTasks);

const btnReset = document.querySelector('.js-reset');
btnReset.addEventListener('click', resetTasks);

printTasks();
// updateTasks();
import './styles.css';
import Refresh from './rotate.svg';
import Enter from './enter.png';
import { appendToDOM } from './modules/changeDom.js';
import DesplayElement from './modules/displayTodo.js';
import { retrieveData } from './modules/localStorage.js';
import { addTodoForm, addTodoFormHandler } from './modules/addNewTodo.js';

const loadElements = () => {
  let taskArray = [];
  taskArray = retrieveData();
  taskArray
    .sort((x, y) => x.index - y.index)
    .forEach((todo) => {
      const taskElement = DesplayElement(todo);
      appendToDOM(taskElement);
    });
};

const loadRefreshIcon = () => {
  const refreshIcon = document.getElementById('list_refresh');
  refreshIcon.src = Refresh;
  refreshIcon.alt = 'refresh';
  refreshIcon.setAttribute('class', 'header-icon');
};

const loadEnterIcon = () => {
  const enterIcon = document.getElementById('enter_newtodo');
  enterIcon.src = Enter;
  enterIcon.alt = 'enter';
  enterIcon.setAttribute('class', 'icon');
};

window.onload = () => {
  loadElements();
  loadRefreshIcon();
  loadEnterIcon();
  addTodoForm.addEventListener('submit', addTodoFormHandler);
};
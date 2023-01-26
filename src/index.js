import './styles.css';
import Refresh from './rotate.svg';
import Enter from './enter.png';
import Todo from './modules/todo.js';
import { appendToDOM } from './modules/changeDom.js';
import createDisplayElement from './modules/displayTodo.js';
import clearAllCompletedHandler from './modules/clearAllCompleted.js';
import { retrieveData } from './modules/localStorage.js';
import { addTodoForm, addTodoFormHandler } from './modules/addNewTodo.js';

const loadElements = () => {
  let taskArray = [];
  taskArray = retrieveData();
  taskArray
    .sort((x, y) => x.index - y.index)
    .forEach((todo) => {
      const taskElement = createDisplayElement(todo);
      appendToDOM(taskElement);
    });
};

const loadRefreshIcon = () => {
  const refreshIcon = document.getElementById('list_refresh');
  refreshIcon.src = Refresh;
  refreshIcon.alt = 'refresh';
  refreshIcon.setAttribute('class', 'header-icon');
  refreshIcon.addEventListener('click', () => {
    window.location.reload();
  });
};

const loadEnterIcon = () => {
  const enterIcon = document.getElementById('enter_newtodo');
  enterIcon.src = Enter;
  enterIcon.alt = 'enter';
  enterIcon.setAttribute('class', 'icon');
  enterIcon.addEventListener('click', () => {
    if (addTodoForm.elements['add-task'].value) {
      const todosArray = retrieveData();
      const newTodo = new Todo(
        addTodoForm.elements['add-task'].value,
        false,
        todosArray.length + 1,
      );
      Todo.addTodo(newTodo);
      const todoElement = createDisplayElement(newTodo);
      appendToDOM(todoElement);
      addTodoForm.reset();
    }
  });
};

const loadAfterAllCleared = () => {
  const paragraph = document.getElementsByTagName('p')[0];
  const clearAllCompletedLink = document.createElement('a');
  clearAllCompletedLink.setAttribute('id', 'clear-all-completed');
  clearAllCompletedLink.setAttribute('href', '/');
  clearAllCompletedLink.innerText = 'Clear all completed';
  clearAllCompletedLink.addEventListener('click', clearAllCompletedHandler);
  paragraph.appendChild(clearAllCompletedLink);
};
window.onload = () => {
  loadElements();
  loadRefreshIcon();
  loadEnterIcon();
  loadAfterAllCleared();
  addTodoForm.addEventListener('submit', addTodoFormHandler);
};

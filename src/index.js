import './styles.css';
import Refresh from './rotate.svg';
import Enter from './enter.png';
import Todo from './modules/todo.js';
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
      const todoElement = DesplayElement(newTodo);
      appendToDOM(todoElement);
      addTodoForm.reset();
    }
  });
};
window.onload = () => {
  loadElements();
  loadRefreshIcon();
  loadEnterIcon();
  addTodoForm.addEventListener('submit', addTodoFormHandler);
};

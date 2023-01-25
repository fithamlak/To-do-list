import createEditFormElement from './editTodo.js';
import Todo from './todo.js';
import Edit from '../../images/edit-Icon.svg';

const updateTodoHandler = (e) => {
  e.preventDefault();
  const inputElement = document.getElementsByClassName('edit-todo-input')[0];
  const formElement = inputElement.parentElement.parentElement;
  const indexTodo = formElement.getAttribute('id');
  const todo = Todo.getTodo(indexTodo);
  todo.description = inputElement.value;
  Todo.updateTodo(todo);
  const displayElement = document.createElement('li');
  const editIcon = new Image();
  editIcon.src = Edit;
  editIcon.setAttribute('class', 'icon');
  displayElement.setAttribute('id', todo.index);
  displayElement.innerHTML = `
  <label>
    <input class="checkbox" type="checkbox" ${todo.completed ? 'checked' : ''}/>
    <span>${todo.description}</span>
  </label
  `;
  displayElement.appendChild(editIcon);
  editIcon.addEventListener('click', (e) => {
    const displayElement = e.target.parentElement;
    const indexTodo = displayElement.getAttribute('id');
    const editElement = createEditFormElement(indexTodo);
    editElement.addEventListener('submit', updateTodoHandler);
    const todoList = displayElement.parentElement;
    todoList.replaceChild(editElement, displayElement);
  });
  formElement.parentElement.replaceChild(displayElement, formElement);
};

export default updateTodoHandler;
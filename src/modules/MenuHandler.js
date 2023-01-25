import updateTodoHandler from './updateTodoHandler.js';
import createEditElementForm from './editTodo.js';

const menuEventHandler = (e) => {
  const displayElement = e.target.parentElement;
  const indexTodo = displayElement.getAttribute('id');
  const editElement = createEditElementForm(indexTodo);
  editElement.addEventListener('submit', updateTodoHandler);
  const todoList = displayElement.parentElement;
  todoList.removeChild(displayElement);
  todoList.appendChild(editElement);
};

export default menuEventHandler;
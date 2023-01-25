import Todo from './todo.js';
import Delete from '../../images/delet-Icon.svg';
import deleteEventHandler from './deletHandler.js';

const createEditElementForm = (indexTodo) => {
  const todo = Todo.getTodo(indexTodo);
  const editElement = document.createElement('form');
  editElement.setAttribute('action', '#');
  editElement.setAttribute('method', 'patch');
  editElement.setAttribute('type', 'submit');
  editElement.setAttribute('class', 'edit-todo-form');
  editElement.setAttribute('id', indexTodo);
  editElement.innerHTML = `
  <label for="edit-todo" id="edit-todo-label">
    <input class="checkbox" type="checkbox" />
    <input
      type="text"
      name="edit-todo"
      class="edit-todo-input"
      value=${todo.description}
    />
  </label>
  `;
  const deleteIcon = new Image();
  deleteIcon.src = Delete;
  deleteIcon.setAttribute('class', 'icon');
  deleteIcon.addEventListener('click', deleteEventHandler);
  editElement.appendChild(deleteIcon);
  return editElement;
};

export default createEditElementForm;
// eslint-disable-next-line import/extensions, import/no-unresolved
import Edit from '../images/edit-Icon.svg';
import updateTodoHandler from './updateTodoHandler.js';
import createEditElementForm from './editTodo.js';

const DesplayElement = (todo) => {
  const element = document.createElement('li');
  const editIcon = new Image();
  editIcon.src = Edit;
  editIcon.setAttribute('class', 'icon');
  element.setAttribute('id', todo.index);
  element.innerHTML = `
    <label>
      <input class="checkbox" type="checkbox" ${todo.completed ? 'checked' : ''}/>
      <span>${todo.description}</span>
    </label
    `;
  element.appendChild(editIcon);
  editIcon.addEventListener('click', (e) => {
    const displayElement = e.target.parentElement;
    const indexTodo = displayElement.getAttribute('id');
    const editElement = createEditElementForm(indexTodo);
    editElement.addEventListener('submit', updateTodoHandler);
    const todoList = displayElement.parentElement;
    todoList.replaceChild(editElement, displayElement);
  });
  return element;
};

export default DesplayElement;
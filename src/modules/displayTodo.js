// eslint-disable-next-line import/extensions, import/no-unresolved
import Edit from '../images/edit-Icon.svg';

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
  return element;
};

export default DesplayElement;
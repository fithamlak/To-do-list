import './styles.css';

const taskList = document.getElementById('taskList');

const taskArray = [];

const desplayToPage = (task) => {
  const element = document.createElement('li');
  element.setAttribute('id', task.index);
  element.innerHTML = `
  <input type="checkbox" class = "checkbox" ${task.completed ? 'checked' : ''}/>
  <span>${task.description}</span>`;
  taskList.appendChild(element);
};

const loadElements = () => {
  taskArray.sort((x, y) => x.index - y.index)
    .forEach((task) => {
      desplayToPage(task);
    });
};

window.onload = () => {
  loadElements();
};
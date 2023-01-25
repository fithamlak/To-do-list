const taskList = document.getElementById('taskList');

const taskArray = [
  {
    description: 'read webpack',
    completed: true,
    index: 5,
  },
  {
    description: 'read ES6.',
    completed: false,
    index: 2,
  },
  {
    description: 'read React.',
    completed: false,
    index: 3,
  },
];

const desplayToPage = (task) => {
  const element = document.createElement('li');
  element.setAttribute('id', task.index);
  element.innerHTML = `
  <input type="checkbox" ${task.completed ? 'checked' : ''}/>
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
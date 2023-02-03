import { retrieveData } from './localStorage.js';
import Todo from './todo.js';
import { removeAllCompletedFromDOM } from './changeDom.js';

const clearAllCompletedHandler = (e) => {
  e.preventDefault();
  const tasks = retrieveData();
  Todo.clearAllCompleted(tasks);
  const taskElements = document.querySelectorAll('#taskList li');
  removeAllCompletedFromDOM(taskElements);
};

export default clearAllCompletedHandler;
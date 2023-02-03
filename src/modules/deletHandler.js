import Todo from './todo.js';
import { removeFromDOM } from './changeDom.js';

const deletEventHandler = (e) => {
  const todo = e.target.parentElement;
  const indexTodo = todo.getAttribute('id');
  Todo.removeTodo(indexTodo);
  removeFromDOM(todo);
};

export default deletEventHandler;
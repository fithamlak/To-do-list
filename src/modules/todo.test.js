import Todo from './todo.js';
import { appendToDOM } from './changeDom.js';

const task = new Todo('test', false, 1);
const taskElement = document.createElement('li');
document.body.innerHTML = '<div><ul id="list"></ul></div>';

describe('add task', () => {
  test('adds a task to storage', () => {
    expect(Todo.addTodo(task)).toStrictEqual([task]);
  });
  appendToDOM(taskElement);
  test('append a task to DOM', () => {
    const list = document.querySelectorAll('#list li');
    expect(list).toHaveLength(1);
  });
});
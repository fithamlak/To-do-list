import Todo from './todo.js';

const task = new Todo('test', false, 1);
const taskElement = document.createElement('li');
document.body.innerHTML = '<div><ul id="list"></ul></div>';

describe('add todo', () => {
  test('adds a todo to storage', () => {
    expect(Todo.addTodo(task)).toStrictEqual([task]);
  });
   appendToDOM(taskElement);
  test('adds a todo to DOM', () => {
    const list = document.querySelectorAll('#list li');
    expect(list).toHaveLength(1);
  });
});
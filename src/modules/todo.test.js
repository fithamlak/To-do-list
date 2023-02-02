/**
 * @jest-environment jsdom
 */
import Todo from './todo.js';
import { appendToDOM, removeFromDOM } from './changeDom.js';

jest.mock('./localStorage.js');
const task = new Todo('test', false, 1);
const taskElement = document.createElement('li');
document.body.innerHTML = '<div><ul id="taskList"></ul></div>';
// test for add
describe('add task', () => {
  test('adds a task to storage', () => {
    expect(Todo.addTodo(task)).toStrictEqual([task]);
  });
  appendToDOM(taskElement);
  test('append a task to DOM', () => {
    const list = document.querySelectorAll('#taskList li');
    expect(list).toHaveLength(1);
  });
});
// test for delet
describe('delet task', () => {
  test('delets a task', () => {
    expect(Todo.removeTodo(task.index)).toStrictEqual([]);
  });
  test('deletss a task element in the dom', () => {
    removeFromDOM(taskElement);
    const list = document.querySelectorAll('#taskList li');
    expect(list).toHaveLength(0);
  });
});
const todoList = document.getElementById('taskList');
export const appendToDOM = (todoElement) => {
  todoList.appendChild(todoElement);
};

export const removeFromDOM = (todo) => {
  todo.parentElement.removeChild(todo);
};
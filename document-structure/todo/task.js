const input = document.getElementById("task__input");
const form = document.getElementById("tasks__form");
const taskList = document.getElementById("tasks__list");
const btnAdd = document.getElementById('tasks__add');

if (localStorage.getItem("todos")) loadTodosFromLocalStorage();
// localStorage.clear()

btnAdd.addEventListener("click", (event) => {
  event.preventDefault();
    if (input.value.trim()) {
      const newTodo = createNewTodo(input.value);
      taskList.insertAdjacentElement("afterbegin", newTodo);
      input.value = "";
      saveTodoToLocalStorage(newTodo);
    }
});

function createNewTodo(value) {
  const containerOfTask = document.createElement('div');
  containerOfTask.innerHTML = `<div class="task">
  <div class="task__title">
    ${value}
  </div>
  <a href="#" class="task__remove" onClick="removeElement(this.parentElement)">&times;</a>
</div>`;
  return containerOfTask;
}

function removeElement(element) {
  element.remove();

  const todos = getTodosFromLocalStorage();
  const index = todos.indexOf(element.outerHTML);
  if (index !== -1) {
    todos.splice(index, 1);
    localStorage.setItem("todos", JSON.stringify(todos));
  }
}

function loadTodosFromLocalStorage() {
  const todos = getTodosFromLocalStorage();
  todos.forEach((todo) => {
    taskList.insertAdjacentHTML("afterbegin", todo);
  });
}

function getTodosFromLocalStorage() {
  const todos = localStorage.getItem("todos");
  return todos ? JSON.parse(todos) : [];
}

function saveTodoToLocalStorage(todo) {
  const todos = getTodosFromLocalStorage();
  todos.push(todo.outerHTML);
  localStorage.setItem("todos", JSON.stringify(todos));
}

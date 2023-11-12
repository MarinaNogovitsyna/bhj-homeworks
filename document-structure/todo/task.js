const input = document.getElementById("task__input");
const form = document.getElementById("tasks__form");
const taskList = document.getElementById("tasks__list");

if (localStorage.getItem("todos")) loadTodosFromLocalStorage();
// localStorage.clear()

input.addEventListener("keydown", (event) => {
  if (event.code === "Enter") {
    event.preventDefault();
    if (input.value) {
      const newTodo = createNewTodo(input.value);
      taskList.insertAdjacentElement("afterbegin", newTodo);
      input.value = "";
      saveTodoToLocalStorage(newTodo);
    }
  }
});

function createNewTodo(value) {
  const containerOfTask = document.createElement("div");
  containerOfTask.classList.add("task");
  const taskTitle = document.createElement("div");
  taskTitle.classList.add("task__title");
  taskTitle.textContent = value;
  const remove = document.createElement("a");
  remove.classList.add("task__remove");
  remove.innerHTML = "&times;";
  remove.onclick = () => removeElement(containerOfTask);

  containerOfTask.insertAdjacentElement("afterbegin", taskTitle);
  containerOfTask.insertAdjacentElement("beforeend", remove);

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

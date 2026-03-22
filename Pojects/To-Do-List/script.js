const todoInput = document.getElementById("todo-input");
const addTaskInput = document.getElementById("add-task-btn");
const todoList = document.getElementById("todo-list");

let tasks = [];

addTaskInput.addEventListener("click", () => {
    const taskText = todoInput.value.trim();

    if (taskText === "") return;

    const newTask = {
        id: Date.now(),
        text: taskText,
        completed: false
    };

    tasks.push(newTask);

    todoInput.value = "";
});

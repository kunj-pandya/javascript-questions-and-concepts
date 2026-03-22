document.addEventListener("DOMContentLoaded", () => {
    const todoInput = document.getElementById("todo-input");
    const addTaskButton = document.getElementById("add-task-btn");
    const todoList = document.getElementById("todo-list");

    let saved = localStorage.getItem('task');
    let tasks = saved ? JSON.parse(saved) : [];

    tasks.forEach((task) => renderTask(task));

    addTaskButton.addEventListener("click", () => {
        const taskText = todoInput.value.trim();

        if (taskText === "") return;

        const newTask = {
            id: Date.now(),
            text: taskText,
            completed: false
        };

        tasks.push(newTask);
        saveTasks();

        todoInput.value = "";
        // console.log(tasks);
    });

    function renderTask(task) {
        // console.log(task.text);

        const li = document.createElement("li");
        li.setAttribute("data-id", task.id);
        li.innerHTML = ` 
        <span>${task.text}</span>
        <button>delete</button>`;

        todoList.appendChild(li);
    }

    function saveTasks() {
        localStorage.setItem("task", JSON.stringify(tasks));
    }

});
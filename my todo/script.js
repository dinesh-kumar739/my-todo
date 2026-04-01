// Select input and add button
const todoInput = document.querySelector(".btns input");
const addBtn = document.querySelector(".btns button");
const main = document.querySelector("main");

let todos = [];
let currentId = 1;

addBtn.addEventListener("click", () => {
    const title = todoInput.value.trim();
    if (!title) return alert("Enter a todo");

    const newTodo = {
        id: currentId++,
        title,
        completed: false
    };

    todos.push(newTodo);
    todoInput.value = "";
    renderTodos();
});

function renderTodos() {
    const existingTodos = main.querySelectorAll("div.todo");
    existingTodos.forEach(el => el.remove());

    todos.forEach(todo => {
        const todoDiv = document.createElement("div");
        todoDiv.classList.add("todo");

        const h2 = document.createElement("h2");
        h2.textContent = todo.title;
        h2.style.display = "inline-block";
        h2.style.cursor = "pointer";
        h2.style.textDecoration = todo.completed ? "line-through" : "none";

        h2.addEventListener("click", () => {
            todo.completed = !todo.completed;
            renderTodos();
        });

        const delBtn = document.createElement("button");
        delBtn.textContent = "Delete";
        delBtn.classList.add("delete");
        delBtn.style.marginLeft = "10px";
        delBtn.addEventListener("click", () => {
            todos = todos.filter(t => t.id !== todo.id);
            renderTodos();
        });

        todoDiv.appendChild(h2);
        todoDiv.appendChild(delBtn);
        main.appendChild(todoDiv);
    });
}
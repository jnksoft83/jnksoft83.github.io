const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");
const TODOS_KEY = "todos";
let toDos = [];
function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos();
}
function completeTodo(event) {
    const li = event.target.parentElement;

    toDos.forEach((toDo) => {
        if (toDo.id === parseInt(li.id)) {
            toDo.complete = !toDo.complete;
            return false;
        }
    });

    li.classList.toggle("complete");

    saveToDos();
}
function paintToDo(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id;
    if (newTodo.complete) li.classList.add("complete");
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const deleteButton = document.createElement("button");
    deleteButton.classList.add("delete");
    deleteButton.addEventListener("click", deleteToDo);
    const completeButton = document.createElement("button");
    completeButton.classList.add("complete");
    completeButton.addEventListener("click", completeTodo);
    li.appendChild(span);
    li.appendChild(completeButton);
    li.appendChild(deleteButton);
    toDoList.appendChild(li);
}
function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
        complete: false
    };
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}
toDoForm.addEventListener("submit", handleToDoSubmit);
const savedToDos = localStorage.getItem(TODOS_KEY);
if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}
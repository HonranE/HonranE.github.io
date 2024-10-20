const toDoList = document.getElementById("toDoList");
const toDoWrite = document.getElementById("toDoWrite");
const toDoInput = toDoWrite.querySelector("input");
let toDos = [];

function submitToDoList(event) {
    event.preventDefault();

    const toDoValue = toDoInput.value;

    const newToDo = {
        text: toDoValue,
        id: Date.now()
    };

    printToDoList(newToDo);

    toDos.push(newToDo);

    toDoInput.value = "";

    saveToDo();


}

function printToDoList(data) {

    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");

    button.innerText = "완수!";

    button.addEventListener("click", onDelButton);

    span.innerText = data.text;
    li.id = data.id;

    li.appendChild(span);
    li.appendChild(button);

    toDoList.appendChild(li);

}


function onDelButton(event) {
    const li = event.target.parentElement;

    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));

    saveToDo();
    li.remove();
}

function saveToDo() {
    localStorage.setItem("toDoList", JSON.stringify(toDos));
}

toDoWrite.addEventListener("submit", submitToDoList);

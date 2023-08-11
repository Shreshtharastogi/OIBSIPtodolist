const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
    const taskText = inputBox.value.trim(); // Trim input to remove leading/trailing spaces

    if (taskText === '') {
        alert("You must write something!");
    } else {
        const li = createTaskElement(taskText);
        listContainer.appendChild(li);
    }

    inputBox.value = "";
    saveData();
}

function createTaskElement(taskText) {
    const li = document.createElement("li");
    li.textContent = taskText;

    const span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);

    return li;
}

listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.tagName === "SPAN") {
        const parentLi = e.target.parentElement;
        parentLi.remove();
        saveData();
    }
}, false);

function saveData() {
    localStorage.setItem("tasks", listContainer.innerHTML);
}

function loadTasks() {
    const savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
        listContainer.innerHTML = savedTasks;
    }
}

loadTasks();

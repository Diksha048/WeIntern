const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
let filter = "all";
let editId = null;
let deleteId = null;
let lastDeleted = null;

const taskList = document.getElementById("taskList");
const taskCount = document.getElementById("taskCount");
const searchInput = document.getElementById("searchInput");
const addModal = document.getElementById("addModal");
const editModal = document.getElementById("editModal");
const deleteModal = document.getElementById("deleteModal");

const taskText = document.getElementById("taskText");
const taskDate = document.getElementById("taskDate");
const editText = document.getElementById("editText");
const editDate = document.getElementById("editDate");

/* DARK MODE */
const darkBtn = document.getElementById("darkBtn");

// Load saved mode
if (localStorage.getItem("darkMode") === "on") {
  document.body.classList.add("dark");
  darkBtn.textContent = "☀️";
}

function toggleDark() {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    darkBtn.textContent = "☀️";
    localStorage.setItem("darkMode", "on");
  } else {
    darkBtn.textContent = "🌙";
    localStorage.setItem("darkMode", "off");
  }
}


/* MODALS */
function openAdd() { addModal.style.display = "flex"; }
function closeAdd() { addModal.style.display = "none"; }
function closeEdit() { editModal.style.display = "none"; }
function closeDelete() { deleteModal.style.display = "none"; }

/* ADD */
function addTask() {
  if (!taskText.value.trim()) return;

  tasks.push({
    id: Date.now(),
    text: taskText.value,
    date: taskDate.value,
    completed: false
  });

  taskText.value = "";
  taskDate.value = "";
  closeAdd();
  save();
  showToast("Task added");
}

/* EDIT */
function openEdit(task) {
  editId = task.id;
  editText.value = task.text;
  editDate.value = task.date;
  editModal.style.display = "flex";
}

function saveEdit() {
  const task = tasks.find(t => t.id === editId);
  task.text = editText.value;
  task.date = editDate.value;
  closeEdit();
  save();
  showToast("Task updated");
}

/* DELETE */
function askDelete(id) {
  deleteId = id;
  deleteModal.style.display = "flex";
}

function confirmDelete() {
  const index = tasks.findIndex(t => t.id === deleteId);
  lastDeleted = tasks[index];
  tasks.splice(index, 1);
  closeDelete();
  save();
  showUndo();
}

/* UNDO */
function showUndo() {
  const toast = document.getElementById("toast");
  toast.innerHTML = `Task deleted <button onclick="undoDelete()">UNDO</button>`;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 4000);
}

function undoDelete() {
  tasks.push(lastDeleted);
  save();
  showToast("Task restored");
}

/* TOGGLE COMPLETE */
function toggle(id) {
  const task = tasks.find(t => t.id === id);
  task.completed = !task.completed;
  save();
}

/* FILTER */
function setFilter(f) {
  filter = f;
  render();
}

/* SEARCH */
searchInput.addEventListener("input", render);

/* RENDER */
function render() {
  taskList.innerHTML = "";

  let list = [...tasks];

  if (filter === "completed") list = list.filter(t => t.completed);
  if (filter === "upcoming") list = list.filter(t => !t.completed);

  const q = searchInput.value.toLowerCase();
  list = list.filter(t => t.text.toLowerCase().includes(q));

  taskCount.textContent = `${list.length} Tasks`;

  list.forEach(t => {
    const div = document.createElement("div");
    div.className = `task ${t.completed ? "completed" : ""}`;

    div.innerHTML = `
      <div class="task-left">
        <b>${t.text}</b>
        <span class="date-badge">${t.date || "No date"}</span>
      </div>
      <div class="task-buttons">
        <button onclick='openEdit(${JSON.stringify(t)})'>✏️</button>
        <button onclick="askDelete(${t.id})">🗑</button>
        <input type="checkbox" ${t.completed ? "checked" : ""} onclick="toggle(${t.id})">
      </div>
    `;

    taskList.appendChild(div);
  });
}

function save() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
  render();
}

/* TOAST */
function showToast(msg) {
  const toast = document.getElementById("toast");
  toast.textContent = msg;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 3000);
}

render();

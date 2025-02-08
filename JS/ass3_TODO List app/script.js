let tasks = [];

let editIndex = -1;

const taskForm = document.getElementById("taskForm");
const taskTableBody = document.getElementById("taskTableBody");

taskForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const taskName = document.getElementById("taskName").value;
  const taskDescription = document.getElementById("taskDescription").value;
  const taskPriority = document.getElementById("taskPriority").value;
  const taskStatus = document.getElementById("taskStatus").value;

  if (editIndex === -1) {
    tasks.push({
      name: taskName,
      description: taskDescription,
      priority: taskPriority,
      status: taskStatus,
    });
  } else {
    tasks[editIndex].name = taskName;
    tasks[editIndex].description = taskDescription;
    tasks[editIndex].priority = taskPriority;
    tasks[editIndex].status = taskStatus;
    editIndex = -1;
  }

  taskForm.reset();
  renderTable();
});

function renderTable() {
  taskTableBody.innerHTML = "";

  tasks.forEach((task, index) => {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${index + 1}</td>
      <td>${task.name}</td>
      <td>${task.description}</td>
      <td>${task.priority}</td>
      <td>${task.status}</td>
      <td>
        <button class="btn btn-info btn-sm" onclick="editTask(${index})">Edit</button>
        <button class="btn btn-danger btn-sm" onclick="deleteTask(${index})">Delete</button>
      </td>
    `;
    taskTableBody.appendChild(row);
  });
}

function editTask(index) {
  const task = tasks[index];
  document.getElementById("taskName").value = task.name;
  document.getElementById("taskDescription").value = task.description;
  document.getElementById("taskPriority").value = task.priority;
  document.getElementById("taskStatus").value = task.status;

  editIndex = index;
}

function deleteTask(index) {
  tasks.splice(index, 1);
  renderTable();
}

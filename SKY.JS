// Get references to DOM elements
const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTaskButton");
const taskList = document.getElementById("taskList");

// Function to create a task element
function createTaskElement(taskText) {
  const taskItem = document.createElement("li");
  taskItem.className = "task";

  const taskContent = document.createElement("span");
  taskContent.textContent = taskText;

  const buttons = document.createElement("div");
  buttons.className = "buttons";

  const completeButton = document.createElement("button");
  completeButton.textContent = "Complete";
  completeButton.addEventListener("click", () => {
    taskItem.classList.toggle("completed");
  });

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.addEventListener("click", () => {
    taskList.removeChild(taskItem);
  });

  buttons.appendChild(completeButton);
  buttons.appendChild(deleteButton);
  taskItem.appendChild(taskContent);
  taskItem.appendChild(buttons);

  return taskItem;
}

// Event listener for adding a task
addTaskButton.addEventListener("click", () => {
  const taskText = taskInput.value.trim();
  if (taskText) {
    const taskElement = createTaskElement(taskText);
    taskList.appendChild(taskElement);
    taskInput.value = ""; // Clear input field
  } else {
    alert("Please enter a task.");
  }
});

// Event listener for pressing Enter in the input field
taskInput.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    addTaskButton.click();
  }
});

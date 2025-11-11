document.addEventListener('DOMContentLoaded', () => {
  const toDoInput = document.getElementById("to-do input");
  const addTaskBtn = document.getElementById("add-task btn");
  const toDoList = document.getElementById("todo-list");

  let task = JSON.parse(localStorage.getItem('tasks')) || [];

  // Render tasks stored in localStorage
  task.forEach(task => renderTask(task));

  // Add new task event listener
  addTaskBtn.addEventListener('click', () => {
      const taskText = toDoInput.value.trim();
      if (taskText === "") return;

      const newTask = {
          id: Date.now(),
          text: taskText,
          completed: false,
      };
      task.push(newTask);
      saveTask();
      renderTask(newTask);
      toDoInput.value = "";
      console.log(task);
  });

  // Function to render task
  function renderTask(task) {
      const li = document.createElement("li");
      li.setAttribute("data-id", task.id);
      if (task.completed) li.classList.add("completed");
      li.innerHTML = `
          <span>${task.text}</span>
          <button>Delete</button>
      `;

      // Toggle completion on click (click anywhere on li except the button)
      li.addEventListener('click', (e) => {
          if (e.target.tagName === 'BUTTON') return;  // Do not toggle if button clicked
          task.completed = !task.completed;
          li.classList.toggle("completed");
          saveTask();
      });

      // Delete task on button click
      li.querySelector("button").addEventListener('click', (e) => {
          e.stopPropagation(); // Prevent li click handler from firing
          task =((t)=> t.id === task.id); // Remove task from array
          li.remove(task); // Remove the li element
          saveTask();
      });

      toDoList.appendChild(li);
  }

  // Function to save tasks to localStorage
  function saveTask() {
      localStorage.setItem('tasks', JSON.stringify(task));
  }
});

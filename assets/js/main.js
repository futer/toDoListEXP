let taskTitle = document.getElementById('taskTitle');
let taskContent = document.getElementById('taskContent');

let addTask = document.querySelector('.addTaskBtn');

addTask.addEventListener('click', (event) => {
  event.preventDefault();
  console.log(taskTitle.value, taskContent.value);
});

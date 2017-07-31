var nameInput = document.getElementById('addTask');
document.querySelector('form.addTaskForm').addEventListener('submit', function (e) {
		e.preventDefault();
    console.log(nameInput.value);    
});
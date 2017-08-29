let taskTitle = document.getElementById('taskTitle');
let taskContent = document.getElementById('taskContent');
let taskList = document.getElementById('taskList');

let addTaskBtn = document.querySelector('.addTaskBtn');

addTaskBtn.addEventListener('click', (event) => {
  event.preventDefault();
  
  let title = taskTitle.value;
  let content = taskContent.value;
  let date = '11.22.1111';

  addTask(title, content, date);

  let nowDate = new Date();
  let formattedDate = [nowDate.getDate(), nowDate.getMonth()+1, nowDate.getFullYear()]

  console.log(formattedDate);
});

function addTask(title, content, date) {

	if(!title == "" && !content == "") {
	let ctx = `<div class="box"><h3 class="boxTitle">${title}</h3>${content}</div>`;
		taskList.innerHTML  += ctx;
	}
	else if(title == "") {
		alert("Zapomniałeś/aś wpisać tytułu!")
	}
	else if(content == "") {
		alert("Zapomniałeś/aś wpisać treści!")
	}
	else {
		alert("Skontaktuj się z administratorem strony!")
	}

}

 



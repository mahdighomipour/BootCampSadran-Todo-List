function saveTask(input) {
	let list = getTasks();
	let task = {
		title: `input`,
	};
	console.log(task);
	console.log(list);
	JSON.stringify(list).push(task);
	localStorage.setItem("tasks", JSON.stringify(list));
}

function getTasks() {
	let tasksList = localStorage.getItem("tasks");
	if (localStorage.length < 1) {
		// alert("لوکال خالیه");
		tasksList = {};
	} else if (localStorage.length > 0) {
		for (let i = 0; i < localStorage.length; i++) {
			let key = localStorage.key(i);
			alert(`${key}: ${localStorage.getItem(key)}`);
		}
	}
	return tasksList;
}
let modal = document.querySelector("#myModal");
let btn = document.querySelector("#myBtn");
let span = document.querySelector(".close");
let submit = document.querySelector(".submit");
btn.onclick = function () {
	modal.style.display = "block";
};
span.onclick = function () {
	modal.style.display = "none";
};
submit.onclick = function () {
	let taskInput = document.querySelector(".taskInputBox");
	saveTask(taskInput.value);
};

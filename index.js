// document.getElementById("count-el").innerText = 5;

let count = 0;
const saveEl = document.getElementById("save-el");
const countEl = document.getElementById("count-el");

function increment() {
	count += 1;

	countEl.textContent = count;
}

function save() {
	saveEl.textContent += count + " - ";
	count = 0;
	countEl.textContent = 0;
}

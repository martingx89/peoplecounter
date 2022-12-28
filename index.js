// document.getElementById("count-el").innerText = 5;

let count = 0;
const countEl = document.getElementById("count-el");

function increment() {
	count += 1;

	countEl.innerText = count;
}

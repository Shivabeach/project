/** @format */

const comments = document.querySelector('.comments-container');
const forms = document.querySelector('#forms');
const reset = document.querySelector('.reset');
const count = document.querySelector('.counts');
const counting = document.querySelector('.category-count');
let facts = [];

//get localstorage
function recieve() {
	let getRecord = localStorage.getItem('records');
	if (getRecord != null) {
		facts = JSON.parse(getRecord);
		seperate(facts);
		//catCount(facts);
	}
}

function seperate(facts) {
	const value = document.querySelector('#gat').value;
	const result = facts.filter((item) => item.category === value);
	result.forEach(function (items) {
		const html = `<article class="counts"><span class="text--color aldente">${items.content} - <b class="colors">${items.category}</b></span> </article>`;
		comments.insertAdjacentHTML('afterbegin', html);
	});
}

// function catCount(facts) {
// 	const result = facts.filter((item) => item.category === category);
// 	console.log(result);
// 	facts.forEach(function (item) {
// 		const html = `<li>${item.category} - ${item.category.length}</li>`;
// 		counting.innerHTML = html;
// 	});
// }
forms.addEventListener('submit', (e) => {
	e.preventDefault();
	recieve();
});
// addEventListener('DOMContentLoaded', catCount);
// for (let i = 0; i < localStorage.length; i++) {
// 	let key = localStorage.key(i);
// 	alert(`${key}: ${localStorage.getItem('records', key)}`);
// }
// let keys = Object.keys(localStorage);
// for (let key of keys) {
// 	alert(`${key}: ${localStorage.getItem(key)}`);
// }

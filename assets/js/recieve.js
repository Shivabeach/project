/** @format */

const comments = document.querySelector('.comments-container');
const forms = document.querySelector('#forms');
const reset = document.querySelector('.reset');
//const count = document.querySelector('.counts');
const counting = document.querySelector('.category-count');
const reseted = document.querySelector('.reseted');
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
		const html = `<article class="counts"><span class="text--color aldente remove">${items.content} - <b class="colors">${items.category}</b></span> </article>`;
		comments.insertAdjacentHTML('afterbegin', html);
	});
}

forms.addEventListener('submit', (e) => {
	e.preventDefault();
	recieve();
});

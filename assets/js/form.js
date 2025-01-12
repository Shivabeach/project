/** @format */
import {
	createElement,
	sanitizeInput,
	properCase,
	select,
	log,
} from './utils.js';
let facts = [];
const form = document.querySelector('#form_update');
const comment = document.querySelector('.comment-container');

//collect values from form, then send them to local storage functin
function arr() {
	const think = document.querySelector('.think').value;
	const select = document.querySelector('.select').value;
	const values = {
		content: properCase(think),
		category: select,
	};
	facts.push(values);
	saveNote(facts);
}
//save to localstorage
function saveNote(facts) {
	localStorage.setItem('records', JSON.stringify(facts));
}
//pull records from localstoage
function recieve() {
	let getRecord = localStorage.getItem('records');
	if (getRecord != null) {
		facts = JSON.parse(getRecord);
		displayStore(facts);
	}
}
//display records on prime
function displayStore(facts) {
	if (comment != null) {
		facts.forEach(function (idea) {
			const html = `<article class="count"><span class="text--color aldente">${idea.content} - <b class="colors">${idea.category}</b></span> </article>`;
			comment.insertAdjacentHTML('afterbegin', html);
		});
	}
}
if (form != null) {
	form.addEventListener('submit', (e) => {
		e.preventDefault();
		arr();
	});
}

addEventListener('DOMContentLoaded', () => {
	recieve();
});

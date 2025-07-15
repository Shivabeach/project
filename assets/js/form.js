/** @format */
import { createElement, properCase, select, log } from './utils.js';
let facts = [];
const form = document.querySelector('#form_update');
const comment = document.querySelector('.comment-container');
const think = document.querySelector('.think');
const notes = document.querySelector('.notes');
const counting = document.querySelector('.category-count');

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
		//catCount(facts);
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

function catCount(facts) {
	const kvPairs = Object.entries(facts);
	const map = new Map(kvPairs);
}

// addEventListener('DOMContentLoaded', catCount);

if (form != null) {
	form.addEventListener('submit', (e) => {
		e.preventDefault();
		arr();
	});
}

addEventListener('DOMContentLoaded', () => {
	recieve();
});

if (think) {
	think.addEventListener('keyup', () => {
		notes.textContent = think.value;
	});
}

// ==========================================================================
// Display category and length
// ==========================================================================
// Step 1: Retrieve the records from local storage
let records = JSON.parse(localStorage.getItem('records'));

// Step 2: Separate the category values
let categories = records.map((record) => record.category);

// Step 3: Map the values
let categoryMap = categories.reduce((acc, category) => {
	acc[category] = (acc[category] || 0) + 1;
	return acc;
}, {});

// Step 4: Determine the lengths of each category
let categoryLengths = {};
for (let category in categoryMap) {
	categoryLengths[category] = categoryMap[category];
}

// Assuming categoryLengths contains the categories and their lengths
// Create a container element to hold the category list
let container = document.createElement('ul');
counting.appendChild(container);

// Iterate through the categoryLengths object
for (let category in categoryLengths) {
	if (categoryLengths.hasOwnProperty(category)) {
		// Create a paragraph element for each category
		let paragraph = document.createElement('li');
		paragraph.textContent = `${category} - ${categoryLengths[category]}`;
		container.appendChild(paragraph);
	}
}

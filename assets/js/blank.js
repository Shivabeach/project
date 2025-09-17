/** @format */
// @prepros-append filename
//@prepros-prepend filename
let count = 0;

function incrementcount() {
	count++;
	paragraph.innerText = count;
}
//addEventListener('click', incrementcount);
//listen(click, incrementcount);

//create a random array and add it up
const addit = createElement('p', 'add');
twos.append(addit);
//array length is 10, each random number in array is multiplied by 40
const addMe = Array.from({ length: 10 }, () => Math.floor(Math.random() * 40));
const toNum = addMe.map(Number);
addit.innerHTML = toNum.reduce((acc, cum) => acc + cum, 0);
console.log(toNum);

//get local storage preventing it from over writing the current item
function recieve() {
	let getRecord = localStorage.getItem('records');
	if (getRecord !== null) {
		facts = JSON.parse(getRecord);
		displayStore(facts);
	}
}
//display local storage
function displayStore(facts) {
	if (comment != null) {
		facts.forEach(function (idea) {
			const html = `<article class="count"><span class="text--color aldente">${idea.content} - <b class="colors">${idea.category}</b></span> </article>`;
			comment.insertAdjacentHTML('afterbegin', html);
		});
	}
}

//Filter
const filter = array.filter((arr) => arr.category === value);

const days = [
	'Sunday',
	'Monday',
	'Tuesday',
	'Wednesday',
	'Thursday',
	'Friday',
	'Saturday',
];
const day = days[new Date().getDay()] || 'unknown';
hello.innerHTML = 'Today is ' + day;

// Retrieve the current records from localStorage
let records = JSON.parse(localStorage.getItem('records')); // Check if records is an array
if (Array.isArray(records)) {
	records.splice(6, 1);
	localStorage.setItem('records', JSON.stringify(records));
} else {
	console.error('Records is not an array or does not exist in localStorage.');
}
//From https://github.com/john-smilga/javascript-basic-projects/blob/master/08-menu/final/app.js
// https://www.youtube.com/watch?v=3PHXvlpOkf4&t=5943s
// function displayMenuButtons() {
// 	const categories = menu.reduce(
// 		function (values, item) {
// const demoElement = document.getElementById('demo');
// if (demoElement) {
// 	demoElement.innerHTML = 'Today is ' + day;
// } else {
// 	console.warn("Element with ID 'demo' not found in the DOM.");
// }
// 	values.push(item.category);
// 			}
// 			return values;
// 		,
// 		['all']
// 	);
// }
const categoryBtns = categories
	.map(function (category) {
		return `<button type="button" class="filter-btn" data-id=${category}>
          ${category}
        </button>`;
	})
	.join('');
btnContainer.innerHTML = categoryBtns;
const filterBtns = btnContainer.querySelectorAll('.filter-btn');
console.log(filterBtns);

filterBtns.forEach(function (btn) {
	btn.addEventListener('click', function (e) {
		// console.log(e.currentTarget.dataset);
		const category = e.currentTarget.dataset.id;
		const menuCategory = menu.filter(function (menuItem) {
			// console.log(menuItem.category);
			if (menuItem.category === category) {
				return menuItem;
			}
		});
		if (category === 'all') {
			diplayMenuItems(menu);
		} else {
			diplayMenuItems(menuCategory);
		}
	});
});

// ==========================================================================
// retrieve one key from local storage
// ==========================================================================
// Step 1: Retrieve the records from local storage

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
let container = document.createElement('div');
counting.appendChild(container);

let ul = document.createElement('ul');
for (let category in categoryLengths) {
	if (categoryLengths.hasOwnProperty(category)) {
		let li = document.createElement('li');
		li.textContent = `${category} - ${categoryLengths[category]}`;
		ul.appendChild(li);
	}
}
document.body.appendChild(ul);

//keyup
const input = document.querySelector('input');
const log = document.getElementById('log'); // where the text

input.addEventListener('keyup', logKey);

function logKey(e) {
	log.textContent += ` ${e.code}`;
}

function bmi() {
	let mass = 238;
	let height = 67;
	return mass / height ** 2;
}

//word counter. textarea with #chars & #words div
//https://www.youtube.com/watch?v=hSyhsMpu5O8&list=TLPQMDcwODIwMjUH432mXRpaJw&index=4
function count() {
	//textarea text
	const val = document.getElementById('text').value;
	document.getElementById('chars').textContent = val.lengths;
	document.getElementById('words').textContent = val.trim()
		? vaal.trim().split(/\s+/).length
		: 0;
}

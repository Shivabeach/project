/** @format */

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

let day;
switch (new Date().getDay()) {
	case 0:
		day = 'Sunday';
		break;
	case 1:
		day = 'Monday';
		break;
	case 2:
		day = 'Tuesday';
		break;
	case 3:
		day = 'Wednesday';
		break;
	case 4:
		day = 'Thursday';
		break;
	case 5:
		day = 'Friday';
		break;
	case 6:
		day = 'Saturday';
		break;
	default:
		day = 'unknown';
}
document.getElementById('demo').innerHTML = 'Today is ' + day;

// Retrieve the current records from localStorage
let records = JSON.parse(localStorage.getItem('records')); // Check if records is an array
if (Array.isArray(records)) {
	records.splice(6, 1);
	localStorage.setItem('records', JSON.stringify(records));
} else {
	console.error('Records is not an array or does not exist in localStorage.');
}

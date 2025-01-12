/** @format */
import { properCase, log, listen, months, addToArray } from './utils.js';

const datey = document.querySelector('.datey');
const copyr = document.querySelector('.copyr');
let count = 0;
const links = document.querySelector('.links');
const comment = document.querySelector('.comment-container');
const hello = document.querySelector('.hello');

function returnDate() {
	const date = new Date();
	const day = date.getDate();
	const month = date.getMonth() + 1;
	const year = date.getFullYear();
	//datey.style.color = '#4b0082';
	datey.innerHTML = `Today is ${month}/${day}/${year}`;
}
returnDate();

const yer = new Date();
copyr.innerHTML = `\u00A92024 - ${yer.getFullYear()}`; //copyright

for (let i = 0; i < document.links.length; i++) {
	// this highlights the current active link
	if (document.links[i].href === document.URL) {
		document.links[i].className = 'current';
	}
}

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
hello.innerHTML = `Happy ${day}`;

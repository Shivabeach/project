/** @format */

//import { properCase, log, listen, months, addToArray } from './utils.js';

const datey = document.querySelector('.datey');
const copyr = document.querySelector('.copyr');
let count = 0;
const links = document.querySelector('.links');
const comment = document.querySelector('.comment-container');
const hello = document.querySelector('.hello');
const visits = document.querySelector('.visits');

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

function visiting() {
	let visit = 0;
	let enter = parseInt(visit) + parseInt(1);
	visits.textContent = `${enter} visits`;
}

addEventListener('DOMContentLoaded', visiting);

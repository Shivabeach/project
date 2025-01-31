/** @format */
const three = document.querySelector('.three');
const color = document.querySelector('#color');

function colorize() {
	const color1 = document.querySelector('.color1').value;
	const color2 = document.querySelector('.color2').value;
	three.style.backgroundImage = `linear-gradient(40deg, ${color1}, ${color2})`;
}

color.addEventListener('submit', (e) => {
	e.preventDefault();
	colorize();
});

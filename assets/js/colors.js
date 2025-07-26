/** @format */
const three = document.querySelector('.three');
const color = document.querySelector('#color');

function colorize() {
	const color1 = document.querySelector('.color1').value;
	const color2 = document.querySelector('.color2').value;
	const color3 = document.querySelector('.color3').value;
	const linear = document.querySelector('.linear');
	const radial = document.querySelector('.radial');
	const values = document.querySelector('.values');

	const line = `linear-gradient(40deg, ${color1}, ${color2}, ${color3})`;
	const rad = `radial-gradient(${color1}, ${color2}, ${color3})`;
	if (linear.checked) {
		three.style.backgroundImage = line;
	}
	if (radial.checked) {
		three.style.backgroundImage = rad;
	}
	values.innerHTML = `Gradient Values: ${color1}, - ${color2}, - ${color3}`;
}

color.addEventListener('submit', (e) => {
	e.preventDefault();
	colorize();
});

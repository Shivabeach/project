/** @format */
document.addEventListener('DOMContentLoaded', () => {
	// Get the current count from localStorage, or start at 0
	let visitCount = localStorage.getItem('visitCount');
	visitCount = visitCount ? parseInt(visitCount, 10) : 0;

	// Increment the count
	visitCount++;

	// Save the new count back to localStorage
	localStorage.setItem('visitCount', visitCount);

	// Display the count in your designated element
	const visits = document.querySelector('.visits'); // assuming visits is an element Class
	if (visits) {
		visits.innerHTML = `Page visits: <span class="fs-3 bold-8">${visitCount}</span>`;
	}
});

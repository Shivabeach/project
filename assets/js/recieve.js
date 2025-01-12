/** @format */
let facts = [];
function recieve() {
	let getRecord = localStorage.getItem('records');
	if (getRecord != null) {
		facts = JSON.parse(getRecord);
		displayStore(facts);
	}
}
//display records on prime
function displayStore(facts) {
	facts.forEach(function (idea) {
		const html = `<article class="counts"><span class="text--color aldente">${idea.content} - <b class="colors">${idea.category}</b></span> </article>`;
		comment.insertAdjacentHTML('afterbegin', html);
	});
}

addEventListener('DOMContentLoaded', () => {
	recieve();
});

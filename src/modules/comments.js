const mainContainer = document.querySelector('#commentsPopup');

const renderCommentsPopup = () => {
	// mainContainer.innerHTML = `
	
	// `;
	
	
	const exitBtn = document.querySelector('#exitCommentsPopup');
	exitBtn.addEventListener('click', () => {
		mainContainer.style.top = '-100vh';
	});
};

module.exports = renderCommentsPopup;
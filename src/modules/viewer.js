const getComments = require('./involvement.js');

const updateViewer = async (emojiID = 0) => {
	const viewer = document.querySelector('#cp-commentsDiv-displayDiv');
	viewer.innerHTML = '';
	
	console.log('emojiID = ' + emojiID);
	const commentsDB = await getComments(emojiID);

	if (commentsDB.length === 0) {
		viewer.innerHTML = 'Hi there 👋 - be the first to comment on this emoji';
	} else {
			commentsDB.forEach(commentObj => {
			viewer.innerHTML += `<p>${commentObj.creation_date} ${commentObj.username}: ${commentObj.comment}</p>`;
		});
	};
};

module.exports = updateViewer;
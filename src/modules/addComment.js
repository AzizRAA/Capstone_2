const getComments = require('./involvement.js');

const addComment = async (data) => {
	const clink = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/Wabvv9xOPozDkba4yUVs/comments';
	console.log('Now');

	await fetch(clink, {
		method: 'POST',
		headers: {
			'Content-type': 'application/json; charset= UTF-8',
		},
		body: JSON.stringify(data),
	}).then(data => console.log(data));

	
};

module.exports = addComment;
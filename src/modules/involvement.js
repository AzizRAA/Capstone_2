const getComments = async (item_id = 0) => {
	console.log('item_id = ' + item_id);
	let link = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/Wabvv9xOPozDkba4yUVs/comments?item_id=${item_id}`;
	console.log('link = ' + link);

	const response = await fetch(link);
	const result = await response.json();

	return result;
};

module.exports = getComments;
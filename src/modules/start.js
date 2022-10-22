const link = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps';

const start = async () => {
	let response = await fetch(link, {
		method: 'POST',
	});
	let {result} = await response.json();

	return result;
};

start().then(data => console.log(data));
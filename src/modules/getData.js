const link = 'https://emojihub.herokuapp.com/api/all';
const arrOutput = [];

const getData = async () => {
		const response = await fetch(link);
		const allEmojis = await response.json();

		for (let i = 100; i < 260; i += 1) {
			arrOutput.push(allEmojis[i]);
		}

	return arrOutput;
};

module.exports = getData;
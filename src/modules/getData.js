const link = 'https://emojihub.herokuapp.com/api/random';
const arrOutput = [];

const getData = async () => {
	for (let i = 0; i < 6; i += 1) {
		const response = await fetch(link);
		const randomEmoji = await response.json();

		arrOutput.push(randomEmoji);
	};

	return arrOutput;
};

module.exports = getData;
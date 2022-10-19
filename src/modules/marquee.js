const footer = document.querySelector('footer');
const allEmojisLink = 'https://emojihub.herokuapp.com/api/all';

const renderMarquee = async () => {
	const marquee = document.createElement('marquee');
	
	const response = await fetch(allEmojisLink);
	const allEmojisArr = await response.json();

	for (let i = 0; i < allEmojisArr.length; i += 1) {
		marquee.innerHTML += `${allEmojisArr[i].htmlCode[0]} - `;
	};
	
	footer.append(marquee);
}

module.exports = renderMarquee;
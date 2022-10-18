const Logo = require('./artwork/pixelplanetlogo.png');

header = () => {
	const theLogo = new Image();
	theLogo.src = Logo;
	theLogo.width = 500;

	const header = document.querySelector('#header');
	header.append(theLogo);
};

module.exports = header;
const background = require('./artwork/background.jpg');

renderBackground = () => {
	const bg = new Image();
	bg.src = background;
	bg.style.position = 'absolute';
	bg.style.top = 0;
	bg.style.zIndex = -1;
	bg.style.width = '100vw';
	bg.style.height = '100vh';
	bg.style.objectFit = 'cover';
	
	const body = document.querySelector('body');
	body.append(bg);
};

module.exports = renderBackground;
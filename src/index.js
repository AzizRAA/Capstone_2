import './styles.css';
const header = require('./modules/header.js');
const background = require('./modules/artwork/background.jpg');

window.onload = () => {
	const bg = new Image();
	bg.src = background;
	bg.style.position = 'absolute';
	bg.style.top = 0;
	bg.style.zIndex = -1;
	bg.style.width = '100vw';
	const body = document.querySelector('body');
	body.append(bg);

	header();
};


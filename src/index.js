import './styles.css';
const header = require('./modules/header.js');

window.onload = () => {
	const body = document.querySelector('body');
	body.style.backgroundColor = 'rgb(0, 0, 60, 0.2)';
	
	header();
};


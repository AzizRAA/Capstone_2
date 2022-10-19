import './styles.css';

const header = require('./modules/header.js');
const renderBackground = require('./modules/background.js');

window.onload = () => {
	renderBackground();
	header();
};

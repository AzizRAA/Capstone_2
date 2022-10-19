import './styles.css';

const renderHeader = require('./modules/header.js');
const renderBackground = require('./modules/background.js');
const renderFooter = require('./modules/footer.js');

window.onload = () => {
	renderBackground();
	renderHeader();
	renderFooter();
};

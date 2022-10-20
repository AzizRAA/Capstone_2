import './styles.css';

const renderBackground = require('./modules/background.js');
const renderHeader = require('./modules/header.js');
const renderCommentsPopup = require('./modules/comments.js');
const renderFooter = require('./modules/footer.js');

window.onload = () => {
	renderBackground();
	renderHeader();
	renderCommentsPopup();
	renderFooter();
};

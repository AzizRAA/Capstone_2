import './styles.css';

const renderBackground = require('./modules/background.js');
const renderHeader = require('./modules/header.js');
const renderMain = require('./modules/mainPage.js');
const renderFooter = require('./modules/footer.js');

window.onload = async () => {
  renderBackground();
  renderHeader();
  renderFooter();
  await renderMain();
};

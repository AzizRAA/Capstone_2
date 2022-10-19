import './styles.css';

// const generateRGB = require('./modules/animations');
const getRandomInt = require('./modules/animations');
const setSmoothColorChange = require('./modules/animations');
const renderEmoji = require('./modules/animations');
const handleMouseMove = require('./modules/animations');
const getMousePosition = require('./modules/animations');
const anime = require('./modules/animations');
const renderMarquee = require('./modules/api');

window.onload = () => {
  renderBackground();
  renderHeader();
  renderFooter();
};
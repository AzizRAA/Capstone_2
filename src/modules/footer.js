const footer = document.querySelector('footer');
// const renderMarquee = require('./marquee.js');

const setouLink = '<a href="https://github.com/Botlhale-Setou">Botlhale Setou</a>';
const azizLink = '<a href="https://github.com/AzizRAA">Azizbek Ruzmatov</a>';
const mitLink = '<a href="https://github.com/AzizRAA/Capstone_2/blob/development/MIT.md">MIT Licence</a>';

const renderFooter = () => {
  const licenceText = document.createElement('p');
  licenceText.classList.add('licenceText');
  licenceText.innerHTML = `Created by ${setouLink} and ${azizLink} under the ${mitLink}`;

  footer.append(licenceText);

  // renderMarquee();	
};

module.exports = renderFooter;
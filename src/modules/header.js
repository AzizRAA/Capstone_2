const Logo = require('./artwork/pixelplanetlogo.png');

renderHeader = () => {
	const theLogo = new Image();
	theLogo.src = Logo;
	theLogo.style.width = '35vw';

	const navItems = document.createElement('div');
	const emojisNav = document.createElement('a');
	const aboutNav = document.createElement('a');
	const contactNav = document.createElement('a');

	theLogo.classList.add('theLogo');
	navItems.classList.add('navItems');
	emojisNav.classList.add('navItems-item');
	aboutNav.classList.add('navItems-item');
	contactNav.classList.add('navItems-item');

	emojisNav.innerText = 'Emojis';
	aboutNav.innerText = 'About';
	contactNav.innerText = 'Contact';

	navItems.append(emojisNav, aboutNav, contactNav);

	theLogo.addEventListener('click', () => {
		window.location.reload();
	});

	const header = document.querySelector('#header');
	header.innerHTML = '';
	console.log('running');
	header.append(theLogo, navItems);
};

module.exports = renderHeader;
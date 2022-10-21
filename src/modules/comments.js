const getData = require('./getData.js');

const mainContainer = document.querySelector('#commentsPopup');

const renderCommentsPopup = async (index = 0) => {
	const arrEmojis = await getData();

	mainContainer.innerHTML = `
	<h2 class="" id="exitCommentsPopup">X</h2>
	<h2 id="cp-icon">${arrEmojis[index].htmlCode}</h2>
	<h2 id="cp-title">${arrEmojis[index].name}</h2>

	<div id="cp-attrDiv">
		<p id="cp-attrDiv-categoryP" class="cp-attrDiv-node">category: ${arrEmojis[index].category}</p>
		<p id="cp-attrDiv-groupP" class="cp-attrDiv-node">group: ${arrEmojis[index].group}</p>
		<p id="cp-attrDiv-htmlCodeP" class="cp-attrDiv-node">htmlCode: ${arrEmojis[index].htmlCode}</p>
		<p id="cp-attrDiv-unicodeP" class="cp-attrDiv-node">unicode: ${arrEmojis[index].unicode}</p>
	</div>

	<div id="cp-commentsDiv">
		<h3 id="cp-commentsDiv-title">Comments (2)</h3>

		<div id="cp-commentsDiv-displayDiv">
			<p>28/07/2022 Botlhale: Now this one, I like!</p>
			<p>29/07/2022 Aziz: Yep, pretty awesome.</p>
			<p>28/07/2022 Botlhale: Now this one, I like!</p>
			<p>29/07/2022 Aziz: Yep, pretty awesome.</p>
		</div>

		<h4 id="cp-commentsDiv-addCommentTitle">Add comment</h4>
		<input id="cp-nameInput" type="text" placeholder="Your name" aria-placeholder="Your name">
		<textarea name="commentTA" id="cp-commentTA" cols="30" rows="10" placeholder="Your insights" aria-placeholder="Your insights"></textarea>
		<button id="commentButton" type="button">Comment</button>
	</div>
	`;
	
	
	const exitBtn = document.querySelector('#exitCommentsPopup');
	exitBtn.addEventListener('click', () => {
		mainContainer.style.top = '-100vh';
	});
};

module.exports = renderCommentsPopup;
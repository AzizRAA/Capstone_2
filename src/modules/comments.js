const addComment = require('./addComment.js');
const updateViewer = require('./viewer.js');

const mainContainer = document.querySelector('#commentsPopup');

const renderCommentsPopup = async (emoji_obj = {}, eNum = 0) => {
	// Render comments popup structure
	mainContainer.style.top = 0;
	mainContainer.innerHTML = `
	<h2 class="" id="exitCommentsPopup">X</h2>
	<h2 id="cp-icon">${emoji_obj.htmlCode[0]}</h2>
	<h2 id="cp-title">${emoji_obj.name}</h2>

	<div id="cp-attrDiv">
		<p id="cp-attrDiv-categoryP" class="cp-attrDiv-node">category: ${emoji_obj.category}</p>
		<p id="cp-attrDiv-groupP" class="cp-attrDiv-node">group: ${emoji_obj.group}</p>
		<p id="cp-attrDiv-htmlCodeP" class="cp-attrDiv-node">htmlCode: ${emoji_obj.htmlCode[0]}</p>
		<p id="cp-attrDiv-unicodeP" class="cp-attrDiv-node">unicode: ${emoji_obj.unicode}</p>
		</div>
		
		<div id="cp-commentsDiv">
		<h3 id="cp-commentsDiv-title">Comments (2)</h3>
		
		<div id="cp-commentsDiv-displayDiv">
		</div>
		
		<h4 id="cp-commentsDiv-addCommentTitle">Add comment</h4>
		<input id="cp-nameInput" type="text" placeholder="Your name" aria-placeholder="Your name">
		<textarea name="commentTA" id="cp-commentTA" cols="30" rows="10" placeholder="Your insights" aria-placeholder="Your insights"></textarea>
		<button id="commentButton" type="button">Comment</button>
		</div>
	`;	
		
	// Load X button behaviour
	const exitBtn = document.querySelector('#exitCommentsPopup');
	exitBtn.addEventListener('click', () => {
		mainContainer.style.top = '-100vh';
	});
	
	// Load/Render emoji comments
	await updateViewer(eNum);
	
	// Load comment button behaviour
	const commentBtnx = document.querySelector('#commentButton');
	commentBtnx.addEventListener('click', async () => {
		const nameInput = document.querySelector('#cp-nameInput');
		const commentTA = document.querySelector('#cp-commentTA');
		console.log('button clicked');
		
		await addComment({
			item_id: eNum,
    	username: nameInput.value,
    	comment: commentTA.value,			
		});
		
		nameInput.value = '';
		commentTA.value = '';
		
		await updateViewer(eNum);
	});

};

module.exports = renderCommentsPopup;
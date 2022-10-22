const getData = require('./getData.js');
const renderCommentsPopup = require('./comments.js');
const mainDiv = document.querySelector('main');

const renderMain = async () => {
  const emojiDB = await getData();

  for (let i = 0; i < emojiDB.length; i += 1) {
    mainDiv.innerHTML += `
    <div class="emojiCard">
    <h2 class="emojiCard-icon">${emojiDB[i].htmlCode[0]}</h2>
    <h3 class="emojiCard-title">${emojiDB[i].name}</h3>

    <div class="emojiCard-likeDiv">
      <p class="emojiCard-like">&#10084;</p>
      <p class="emojiCard-likeDesc">4 likes</p>
    </div>

    <button class="commentsBtn" id="${i}" type="button">Comment</button>
    </div>
    `;
  };

  const allCommentBtns = document.querySelectorAll('.commentsBtn');

  allCommentBtns.forEach((btn) => {
    btn.addEventListener('click', async () => {
      const index = parseInt(btn.id);

      await renderCommentsPopup(emojiDB[index], index);
    });
  });
};

module.exports = renderMain;
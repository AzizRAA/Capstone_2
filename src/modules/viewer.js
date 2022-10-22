const getComments = require('./involvement.js');
const countComments = require('./countComments.js');

const updateViewer = async (emojiID = 0) => {
  const comCount = document.querySelector('#comCount');
  const viewer = document.querySelector('#cp-commentsDiv-displayDiv');
  viewer.innerHTML = '';

  const raw = await getComments(emojiID);
  const commentsDB = Array.from(raw);

  comCount.innerHTML = `(${countComments(commentsDB)})`;

  if (commentsDB.length === 0) {
    viewer.innerHTML = 'Hi there 👋 - be the first to comment on this emoji';
    viewer.style.color = 'yellow';
  } else {
    commentsDB.forEach(commentObj => {
      viewer.innerHTML += `<p>${commentObj.creation_date} ${commentObj.username}: ${commentObj.comment}</p>`;
		});
  };
};

module.exports = updateViewer;
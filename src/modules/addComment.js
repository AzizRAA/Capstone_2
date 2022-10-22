const addComment = async (data) => {
  const clink = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/Wabvv9xOPozDkba4yUVs/comments';

  await fetch(clink, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json; charset= UTF-8',
    },
    body: JSON.stringify(data),
  });
};

module.exports = addComment;
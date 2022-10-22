const getComments = async (itemID = 0) => {
  const link = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/Wabvv9xOPozDkba4yUVs/comments?item_id=${itemID}`;

  const response = await fetch(link);
  const result = await response.json();

  return result;
};

module.exports = getComments;
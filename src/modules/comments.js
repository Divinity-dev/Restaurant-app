import { url3 } from './url.js';

export const postComment = async (MealId, name, message) => {
  if (name.value && message.value) {
   const postStatus = await fetch(url3, {
      method: 'post',
      body: JSON.stringify({
        item_id: MealId,
        username: name.value,
        comment: message.value,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    }).then(() => true)
      .catch(() => false);

    return postStatus;
  }
};

export const getComments = async (mealId) => {
  const commentLink = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/rOpkEBLjDARrzi6r3P9W/comments'?item_id=${mealId}`;
  const response = await fetch(commentLink).then((response) => response.json()).catch(() => []);
//   return response;
  console.log(response);
};
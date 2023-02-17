import { url3 } from './url.js';

export const postComment = async (MealId, name, message) => {
    console.log('MEAL MEAL: ',MealId + name.value + message.value);
    const postStatus = await fetch(url3, {
        method: 'POST',
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
//   if (name.value && message.value) {
   
//   }
};

export const getComments = async (mealId) => {
  const getStatus = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/rOpkEBLjDARrzi6r3P9W/comments?item_id=${mealId}`, {
    method: 'GET',
  });
  const commentResponse = await getStatus.json();
  return commentResponse;
};

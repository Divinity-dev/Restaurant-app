import { url3 } from './url.js';

const sendComment = async (mealobj) => {
  await fetch(url3, {
    method: 'POST',
    body: JSON.stringify(mealobj),
    headers: { 'Content-Type': 'application/json' },
  }).then((res) => res.json);
  return sendComment;
};

// export const showComment = () => {
//     document.querySelector('.all-comments').innerHTML =
// }

export const getComment = async () => {
  await fetch(url3).then((res) => res.json());
};

export default sendComment;

// const getAllLikes = async () => {
//     const x = await fetch(url2).then((res) => res.json());
//     return x;
//   };

//   const displayLikes = async (likeNode, mealId) => {
//     const likes = await getAllLikes();
//     const likearr = likes.filter((like) => parseInt(like.item_id, 10) === parseInt(mealId, 10));
//     likeNode.innerHTML = likearr[0].likes;
//   };

// exports = {
//     sendComment, getComment
// }
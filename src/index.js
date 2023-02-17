import './style.css';
import logo from './images/logo.jpg';
import domDisplay from './modules/dom.js';
import { url, url2 } from './modules/url.js';
import send from './modules/send.js';
import { getComments, postComment } from './modules/comments.js';

const foods = document.querySelector('.foods');
const desc = document.querySelector('.description');
const image = document.querySelector('.logo');
const commentBtn = document.querySelector('.comment-btn');

image.src = logo;
domDisplay();

const getTotalComments = (commentsArray) => commentsArray.length;

const showComments = async (mealId) => {
  const comments = await getComments(mealId);
  if (comments.length > 0) {
    document.querySelector('.all-comments').innerHTML = '';
    comments.forEach((list) => {
      document.querySelector('.all-comments').innerHTML += `<li>${list.creation_date} ${list.username}: ${list.comment}</li>`;
    });

    document.querySelector('.counter').innerHTML = getTotalComments(comments);
  }
};

const Details = async (lists, id) => {
  const list = lists.find((list) => list.idMeal === id);
  foods.src = list.strMealThumb;
  desc.innerHTML = list.strMeal;
  commentBtn.setAttribute('data-index', list.idMeal);
  showComments(list.idMeal);
};

const getAllLikes = async () => {
  const x = await fetch(url2).then((res) => res.json());
  return x;
};

const displayLikes = async (likeNode, mealId) => {
  const likes = await getAllLikes();
  const likearr = likes.filter((like) => parseInt(like.item_id, 10) === parseInt(mealId, 10));
  likeNode.innerHTML = likearr[0].likes;
};

const displayDetails = async (e) => {
  await fetch(url).then((res) => res.json()).then((json) => Details(json.meals, e.target.getAttribute('id')));
};

document.getElementById('content').onclick = (e) => {
  if (e.target.className === 'comment') {
    document.querySelector('.popup').style.display = 'flex';
    displayDetails(e);
  } else if (e.target.className === 'fa fa-heart-o') {
    send({
      item_id: e.target.getAttribute('id'),
    });
    const likenode = e.target.previousElementSibling;
    displayLikes(likenode, e.target.getAttribute('id'));
  }
};

document.querySelector('.close-btn').addEventListener('click', () => {
  document.querySelector('.popup').style.display = 'none';
});

const nameElement = document.querySelector('.name');
const commentElement = document.querySelector('.text-area');

const submitComment = async (mealId) => {
  const posted = await postComment(mealId, nameElement, commentElement);
  if (posted) {
    showComments(mealId);
  } else {
    console.log('submission failed');
  }
};

commentBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const mealId = e.target.getAttribute('data-index');
  submitComment(mealId);

  nameElement.value = '';
  commentElement.value = '';
});

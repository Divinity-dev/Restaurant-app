import './style.css';
import logo from './images/logo.jpg';
import domDisplay from './modules/dom.js';
import { url, url2 } from './modules/url.js';
import send from './modules/send.js';
import sendComment from './modules/comment.js';

const foods = document.querySelector('.foods');
const desc = document.querySelector('.description');
const image = document.querySelector('.logo');
const commentBtn = document.querySelector('comment-btn');
const name = document.querySelector('.name');
const insights = document.querySelector('.text-area');

image.src = logo;
domDisplay();

const Details = (lists, id) => {
  const list = lists.find((list) => list.idMeal === id);
  foods.src = list.strMealThumb;
  desc.innerHTML = list.strMeal;
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

commentBtn.addEventListener('click', (e) => {
  sendComment({
    item_id: e.idMeal,
    username: name.value,
    comment: insights.value,
  });
});
import './style.css';
import logo from './images/logo.jpg';
import domDisplay from './modules/dom.js';
import url from './modules/url.js';

const foods = document.querySelector('.foods');
const desc = document.querySelector('.description');
const image = document.querySelector('.logo');
image.src = logo;
domDisplay();

const Details = (lists, id) => {
  const list = lists.find((list) => list.idMeal === id);
  foods.src = list.strMealThumb;
  desc.innerHTML = list.strMeal;
};

const displayDetails = async (e) => {
  await fetch(url).then((res) => res.json()).then((json) => Details(json.meals, e.target.getAttribute('id')));
};

document.getElementById('content').onclick = (e) => {
  if (e.target.className === 'comment') {
    document.querySelector('.popup').style.display = 'flex';
    displayDetails(e);
  }
};

document.querySelector('.close-btn').addEventListener('click', () => {
  document.querySelector('.popup').style.display = 'none';
});

import './style.css';
import logo from './images/logo.jpg';
import domDisplay from './modules/dom.js';
import url from './modules/url.js';

const food = document.querySelector('.food');
const desc = document.querySelector('.description');
const image = document.querySelector('.logo');
image.src = logo;
domDisplay();

const Details = (lists, id) => {
  const list = lists.find(() => lists.idmeal === id);
  food.src = list.strMealThumb;
  desc.innerHTML = list.strMeal;
};

const displayDetails = async (e) => {
  await fetch(url).then((res) => res.json()).then((json) => Details(json.meals, e.target.id));
};

document.getElementById('content').onclick = (e) => {
  if (e.target.className === 'comment') {
    displayDetails();
    document.querySelector('.popup').style.display = 'flex';
  }
};

document.querySelector('.close-btn').addEventListener('click', () => {
  document.querySelector('.popup').style.display = 'none';
});

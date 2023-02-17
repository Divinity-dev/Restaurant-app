import { url } from './url.js';

const content = document.getElementById('content');
function show(meal) {
  content.innerHTML += `<div class="content-child">
<div class="content-grandchild ">
    <img src=${meal.strMealThumb} alt="">
    <div class="food">
        <h3>${meal.strMeal}</h3>
        <div class="span">
        <span class="likes"></span>
        <i class="fa fa-heart-o" aria-hidden="true" id=${meal.idMeal}></i>
    </div>
    </div>
    <button class="comment" id=${meal.idMeal}>Comments</button>
</div>
</div>`;
}
const mealDisplay = (list) => {
  list.forEach((item, index) => {
    show(item, index);
    document.querySelector('.count').innerHTML = getTotalMeal(list);
  });
};

const getTotalMeal = mealArray => mealArray.length;

const domDisplay = async () => {
  await fetch(url).then((res) => res.json()).then((json) => mealDisplay(json.meals));
};

export default domDisplay;
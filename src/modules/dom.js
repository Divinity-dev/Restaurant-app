import { url, url2 } from './url.js';
import { getTotalMeal } from './mealcounter.js';

const content = document.getElementById('content');
const show = (meal) => {
  content.innerHTML += `<div class="content-child">
<div class="content-grandchild ">
    <img src=${meal.strMealThumb} alt="">
    <div class="food">
        <h3>${meal.strMeal}</h3>
        <div class="span">
        <span class="likes" data-index=${meal.idMeal}></span>
        <i class="fa fa-heart-o" aria-hidden="true" id=${meal.idMeal}></i>
    </div>
    </div>
    <button class="comment" id=${meal.idMeal}>Comments</button>
</div>
</div>`;
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
const mealDisplay = async (list) => {
  await list.forEach((item, index) => {
    show(item, index);
    document.querySelector('.count').innerHTML = getTotalMeal(list);
  });
};

const domDisplay = async () => {
  await fetch(url).then((res) => res.json()).then((json) => mealDisplay(json.meals));
  const arrlikes = document.querySelectorAll('.likes');
  Array.from(arrlikes).forEach((element) => {
    const mealId = element.getAttribute('data-index');
    displayLikes(element, mealId);
  });
};

export { domDisplay, displayLikes };

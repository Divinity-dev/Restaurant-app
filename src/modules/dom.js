import url from './url.js';

const content = document.getElementById('content');
function show(meal) {
  content.innerHTML += `<div class="conten-child">
<div class="content-grandchild ">
    <img src=${meal.strMealThumb} alt="">
    <div class="food">
        <h3>${meal.strMeal}</h3>
        <div class="span">
        <span>5</span>
        <i class="fa fa-heart-o" aria-hidden="true"></i>
    </div>
    </div>
    <h2 class="comment">Comments</h2>
</div>
</div>`;
}
const mealdisplay = (list) => {
  list.forEach((item, index) => {
    show(item, index);
  });
};
const domdisplay = async () => {
  await fetch(url).then((res) => res.json()).then((json) => mealdisplay(json.meals));
};

export default domdisplay;
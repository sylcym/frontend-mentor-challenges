console.log('hej');
const points = document.querySelectorAll('.card__number');
const scoreElement = document.querySelector('.score');
const submitBtn = document.querySelector('.btn');
const reqContainer = document.querySelector('.card__container--feedback');
const reqThanks = document.querySelector('.card__container--thanks');
let score = 0;

points.forEach((point) => {
  point.addEventListener('click', () => {
    points.forEach((point) => point.classList.remove('active'));
    point.classList.add('active');

    score = point.getAttribute('data-point');
  });
});

submitBtn.addEventListener('click', () => {
  scoreElement.textContent = score;
  reqContainer.classList.add('card__container--hidden');
  reqThanks.classList.remove('card__container--hidden');
  console.log(score);
});

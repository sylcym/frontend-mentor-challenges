const btnPrev = document.querySelectorAll('.btn-prev');
const btnNext = document.querySelectorAll('.btn-next');

const slideOne = document.querySelector('.slide-one');
const slideTwo = document.querySelector('.slide-two');

let active = 0;

const slideLeft = () => {
  if (slideOne.classList.contains('active')) return;
  else {
    slideTwo.classList.remove('active');
    slideOne.classList.add('active');
  }
};
const slideRight = () => {
  if (slideTwo.classList.contains('active')) return;
  else {
    slideOne.classList.remove('active');
    slideTwo.classList.add('active');
  }
};

btnPrev.forEach((btn) => btn.addEventListener('click', slideLeft));

btnNext.forEach((btn) => btn.addEventListener('click', slideRight));

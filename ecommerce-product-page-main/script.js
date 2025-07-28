// header
const btnOpen = document.querySelector('.btn-open');
const btnClose = document.querySelector('.btn-close');
const nav = document.querySelector('.navigation');
const overlay = document.querySelector('.overlay');


btnOpen.addEventListener('click', () => {
  nav.classList.add('navigation-open');
  overlay.classList.add('overlay-show');
});

btnClose.addEventListener('click', () => {
  nav.classList.remove('navigation-open')
  overlay.classList.remove('overlay-show');
})

// overlay.addEventListener('click', () => {
//   nav.classList.remove('navigation-open');
//   overlay.classList.remove('overlay-show');
// });
console.log('ok')

// carousel
const track = document.querySelector(".carousel-track");
const slides = [...document.querySelectorAll(".carousel-slide")];
const nextBtn = document.querySelector(".carousel-btn.next");
const prevBtn = document.querySelector(".carousel-btn.prev");
let currentInd = 0;

function updateSlidePosition() {
  const slideWidth = slides[0].clientWidth;
  track.style.transform = `translateX(-${slideWidth * currentInd}px)`;
}

function goToNextSlide() {
  if (currentInd < slides.length - 1) {
    currentInd++;
    updateSlidePosition();
  }
}

function goToPrevSlide() {
  if (currentInd > 0) {
    currentInd--;
    updateSlidePosition();
  }
}

nextBtn.addEventListener("click", goToNextSlide);
prevBtn.addEventListener("click", goToPrevSlide);
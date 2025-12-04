const btnOpen = document.querySelector(".btn-open");
const btnClose = document.querySelector(".btn-close");
const nav = document.querySelector(".navigation");
const overlay = document.querySelector("#overlay");

const form = document.querySelector(".newsletter");
const input = document.querySelector(".input");
const errorMessage = document.querySelector(".error-message");

const track = document.querySelector('.carousel-track');
const testimonials = Array.from(track.children);
const dots = Array.from(document.querySelectorAll('.dot'));

let currentIndex = 0;


function goToSlide(index) {
  const slide = testimonials[index];
  slide.scrollIntoView({
    behavior: 'smooth',
    inline: 'center',
    block: 'nearest'
  });

  dots.forEach(dot => dot.classList.remove('active'));
  dots[index].classList.add('active');

  currentIndex = index;
}

dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    goToSlide(index);
  });
});

goToSlide(0);


btnOpen.addEventListener("click", () => {
  nav.classList.add("active");
  overlay.classList.add("show");
  btnClose.classList.add("active");
  btnOpen.classList.add("hidden");
});

btnClose.addEventListener("click", () => {
  nav.classList.remove("active");
  overlay.classList.remove("show");
  btnClose.classList.remove("active");
  btnOpen.classList.remove("hidden");
});

overlay.addEventListener("click", () => {
  nav.classList.remove("active");
  overlay.classList.remove("show");
  btnClose.classList.remove("active");
  btnOpen.classList.remove("hidden");
});


form.addEventListener("submit", function (e) {
  e.preventDefault();

  const emailValue = input.value.trim();
  const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue);

  if (!validEmail) {
    input.classList.add("error");
    errorMessage.hidden = false;
    input.value = "";
    input.focus();
  } else {
    input.classList.remove("error");
    errorMessage.hidden = true;

    console.log("Email OK:", emailValue);
  }
});




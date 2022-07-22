const shareBtns = document.querySelectorAll('.btn');
const socialContainer = document.querySelector('.social-container');

const showSocials = () => {
  socialContainer.classList.toggle('open');
};

shareBtns.forEach((btn) => {
  btn.addEventListener('click', showSocials);
});

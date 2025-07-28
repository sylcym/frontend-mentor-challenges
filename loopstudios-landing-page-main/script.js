const btnOpen = document.querySelector('.btn-open');
const btnClose = document.querySelector('.btn-close');
const nav = document.querySelector('.navigation');

btnOpen.addEventListener('click', () => {
  nav.classList.add('navigation-open');
});

btnClose.addEventListener('click', () => {
  nav.classList.remove('navigation-open')
})
console.log('click')
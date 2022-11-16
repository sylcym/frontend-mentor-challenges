const btnMenu = document.querySelector('.nav-btn-menu');
const btnClose = document.querySelector('.nav-btn-close');
const navMenu = document.querySelector('.nav-link-header');
// const menu = document.querySelector('.nav-link-container');
const overlay = document.querySelector('.overlay');

function showMenu() {
  navMenu.classList.add('open');
  overlay.classList.add('open');
}

function hideMenu() {
  navMenu.classList.remove('open');
  overlay.classList.remove('open');
}

btnMenu.addEventListener('click', showMenu);
btnClose.addEventListener('click', hideMenu);

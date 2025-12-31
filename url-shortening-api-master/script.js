const btn = document.querySelector('.btn-open');
const nav = document.getElementById('main-nav');
const menuLink = document.querySelectorAll('.menu-link');

btn.addEventListener('click', () => {
  const isOpen = nav.getAttribute('aria-hidden') === 'false';

  nav.setAttribute('aria-hidden', String(isOpen));
  btn.classList.toggle('is-open', !isOpen);
});

menuLink.forEach(link => {
  link.addEventListener('click', () => {
    nav.setAttribute('aria-hidden', 'true');
    btn.classList.remove('is-open');
  })
})

document.addEventListener('click', (e) => {
  const isOpen = nav.getAttribute('aria-hidden') === 'false';
  const isClickInside =
    nav.contains(e.target) || btn.contains(e.target);

  if (isOpen && !isClickInside) {
    nav.setAttribute('aria-hidden', 'true');
    btn.classList.remove('is-open');
  }
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    nav.setAttribute('aria-hidden', 'true');
    btn.classList.remove('is-open');
  }
});



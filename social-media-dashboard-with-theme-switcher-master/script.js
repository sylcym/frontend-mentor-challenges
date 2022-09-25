const body = document.querySelector('body');
const themeSwitcherBtn = document.querySelector('.theme-switcher');
const darkTheme = localStorage.getItem('darkTheme');

if (darkTheme === 'false') {
  body.classList.remove('darkMode');
  body.classList.add('lightMode');
  themeSwitcherBtn.classList.add('off');
}

themeSwitcherBtn.addEventListener('click', () => {
  themeSwitcherBtn.classList.toggle('off');

  if (themeSwitcherBtn.classList.contains('off')) {
    body.classList.remove('darkMode');
    body.classList.add('lightMode');
    localStorage.setItem('darkTheme', 'false');
  } else {
    body.classList.add('darkMode');
    body.classList.remove('lightMode');
    localStorage.setItem('darkTheme', 'true');
  }
});

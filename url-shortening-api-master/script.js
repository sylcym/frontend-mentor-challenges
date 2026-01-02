const btn = document.querySelector('.btn-open');
const nav = document.getElementById('main-nav');
const menuLink = document.querySelectorAll('.menu-link');

const form = document.querySelector('.shorten-form');
const input = document.querySelector('.input');
const errorMessage = form.querySelector('.error-message');
const linksContainer = document.querySelector('.shortened-links');
// const links = [];
const links = [
  {
    original: 'https://www.frontendmentor.io',
    short: 'https://rel.ink/k4lKyk'
  },
  {
    original: 'https://twitter.com/frontendmentor',
    short: 'https://rel.ink/gxOXp9'
  }
];


form.addEventListener('submit', (e) => {
  e.preventDefault();

  const originalUrl = input.value.trim();

  if (!originalUrl) {
    input.classList.add('error');
    errorMessage.classList.add('show');
    return;
  }
  input.classList.remove('error');
  errorMessage.classList.remove('show');

  const shortUrl = `https://rel.ink/${Math.random().toString(36).slice(2, 8)}`;


  links.unshift({
    original: originalUrl,
    short: shortUrl
  });

  input.value = '';
  renderLinks();
});



// form.addEventListener('submit', (e) => {
//   e.preventDefault();

//   const originalUrl = input.value.trim();

//   if (!originalUrl) return;

//   const shortUrl = 'https://rel.ink/' + Math.random().toString(36).slice(2, 8);

//   links.unshift({
//     original: originalUrl,
//     short: shortUrl
//   });

//   input.value = '';
//   renderLinks();
// });

function renderLinks() {
  linksContainer.innerHTML = '';

  links.forEach(link => {
    const article = document.createElement('article');
    article.className = 'shortened-link';

    article.innerHTML = `
      <p class="original-url">${link.original}</p>
      <a href="${link.short}" class="short-link" target="_blank">
        ${link.short}
      </a>
      <button class="btn-copy">Copy</button>
    `;

    linksContainer.appendChild(article);
  });
}

linksContainer.addEventListener('click', (e) => {
  if (!e.target.classList.contains('btn-copy')) return;

  const button = e.target;
  const shortLink = button.previousElementSibling.textContent;

  document.querySelectorAll('.btn-copy').forEach(btn => {
    btn.textContent = 'Copy';
    btn.classList.remove('copied');
  });

  navigator.clipboard.writeText(shortLink);

  button.textContent = 'Copied!';
  button.classList.add('copied');

  setTimeout(() => {
    button.textContent = 'Copy';
    button.classList.remove('copied');
  }, 2000);
});

renderLinks();





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



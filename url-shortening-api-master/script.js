
const btn = document.querySelector('.btn-open');
const nav = document.getElementById('main-nav');
const menuLinks = document.querySelectorAll('.menu-link');
// URL SHORTENER
const form = document.querySelector('.shorten-form');
const input = document.querySelector('.input');
const errorMessage = document.querySelector('.error-message');
const linksContainer = document.querySelector('.shortened-links');

const links = [];

btn.addEventListener('click', () => {
  const isOpen = nav.getAttribute('aria-hidden') === 'false';
  nav.setAttribute('aria-hidden', isOpen ? 'true' : 'false');
  btn.classList.toggle('is-open', !isOpen);
});

menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    nav.setAttribute('aria-hidden', 'true');
    btn.classList.remove('is-open');
  });
});

document.addEventListener('click', (e) => {
  const isOpen = nav.getAttribute('aria-hidden') === 'false';
  const isClickInside = nav.contains(e.target) || btn.contains(e.target);

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




function saveLinks() {
  localStorage.setItem('shortenedLinks', JSON.stringify(links));
}

function loadLinks() {
  const stored = localStorage.getItem('shortenedLinks');
  if (stored) {
    links.push(...JSON.parse(stored));
  }
}

loadLinks();
renderLinks();


function isValidUrl(url) {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}

function showError(msg) {
  input.classList.add('error');
  errorMessage.textContent = msg;
  errorMessage.classList.add('show');
}

function clearError() {
  input.classList.remove('error');
  errorMessage.classList.remove('show');
}

input.addEventListener('input', () => {
  clearError();
});

form.addEventListener('submit', async e => {
  e.preventDefault();
  const originalUrl = input.value.trim();

  if (!originalUrl) {
    showError('Please add a link');
    return;
  }

  if (!isValidUrl(originalUrl)) {
    showError('Please add a valid link (include https://)');
    return;
  }

  clearError();

  try {
    const response = await fetch(
      `https://tinyurl.com/api-create.php?url=${encodeURIComponent(originalUrl)}`
    );
    const shortUrl = await response.text();

    links.unshift({ original: originalUrl, short: shortUrl });
    saveLinks();
    renderLinks();

    input.value = '';
  } catch (err) {
    showError('Network error. Try again.');
  }
});

function renderLinks() {
  linksContainer.innerHTML = '';
  links.forEach(link => {
    const article = document.createElement('article');
    article.className = 'shortened-link';
    article.innerHTML = `
      <p class="original-url">${link.original}</p>
      <a href="${link.short}" class="short-link" target="_blank" rel="noopener noreferrer">${link.short}</a>
      <button class="btn-copy">Copy</button>
    `;
    linksContainer.appendChild(article);
  });
}

linksContainer.addEventListener('click', e => {
  if (!e.target.classList.contains('btn-copy')) return;

  const button = e.target;
  const shortLink = button.previousElementSibling.textContent.trim();

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


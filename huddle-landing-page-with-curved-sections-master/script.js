const inputAccess = document.querySelector('.input');
const btn = document.querySelector('.btn');

let patternEmail = /^[a-zA-Z0-9-]{3,}@[a-zA-Z0-9-]{3,}[.]{1}[a-zA-Z]{2,}/i;

const checkEmail = (e) => {
  e.preventDefault();
  const access = inputAccess.value;

  if (!patternEmail.test(access.trim())) {
    inputAccess.classList.add('error');
    document.querySelector('.error-info').classList.remove('error-hidden');
  } else {
    inputAccess.classList.remove('error');
    document.querySelector('.error-info').classList.add('error-hidden');
  }
};

btn.addEventListener('click', checkEmail);

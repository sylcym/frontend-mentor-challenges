const btnStart = document.querySelector('.btn-start');
const btnFree = document.querySelector('.btn-free');
const inputStarted = document.querySelector('.input-get-started');
const inputAccess = document.querySelector('.input-get-access');

let patternEmail = /^[a-zA-Z0-9-]{3,}@[a-zA-Z0-9-]{3,}[.]{1}[a-zA-Z]{2,}/i;

const checkDate = (e) => {
  e.preventDefault();

  const input = inputStarted.value;

  if (!patternEmail.test(input.trim())) {
    inputStarted.classList.add('error');
    document.querySelector('.error-info').classList.remove('error-hide');
  } else {
    inputStarted.classList.remove('error');
    document.querySelector('.error-info').classList.add('error-hide');
  }
};

const checkEmail = (e) => {
  e.preventDefault();
  const access = inputAccess.value;

  if (!patternEmail.test(access.trim())) {
    inputAccess.classList.add('error');
    document.querySelector('.error-access').classList.remove('error-hide');
  } else {
    inputAccess.classList.remove('error');
    document.querySelector('.error-access').classList.add('error-hide');
  }
};

btnStart.addEventListener('click', checkDate);
btnFree.addEventListener('click', checkEmail);

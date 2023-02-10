const inputEmail = document.querySelector('#email');
const inputEmailError = document.querySelector('.error');
const btn = document.querySelector('.btn-free');

let regexEmail = /^[-\w\.]+@([-\w]+\.)+[a-z]+$/i;

const checkEmail = () => {
  const email = inputEmail.value;

  if (!regexEmail.test(email.trim())) inputEmailError.classList.add('show');
  else inputEmailError.classList.remove('show');
};

btn.addEventListener('click', checkEmail);

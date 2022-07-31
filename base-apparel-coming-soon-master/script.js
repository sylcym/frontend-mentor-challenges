const inputEmail = document.querySelector('#email');
const btn = document.querySelector('.btn');

let regexEmail = /^[-\w\.]+@([-\w]+\.)+[a-z]+$/i;

const checkEmail = () => {
  const email = inputEmail.value;

  if (!regexEmail.test(email.trim())) inputEmail.classList.add('error');
  else inputEmail.classList.remove('error');
};

btn.addEventListener('click', checkEmail);

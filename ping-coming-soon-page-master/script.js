const inputEmail = document.querySelector('#email');
const btn = document.querySelector('.btn');
const regexEmail = /^[-\w\.]+@([-\w]+\.)+[a-z]+$/i;

const checkEmail = () => {
  const email = inputEmail.value;
  if (regexEmail.test(email.trim())) inputEmail.classList.add('error');
  else inputEmail.classList.remove('error');

  console.log(email, 'ok');
};

btn.addEventListener('click', checkEmail);

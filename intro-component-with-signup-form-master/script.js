const inputFirstName = document.querySelector('#first-name');
const inputLastName = document.querySelector('#last-name');
const inputEmail = document.querySelector('#email');
const inputPassword = document.querySelector('#password');
const btn = document.querySelector('.btn');
let regexEmail = /^[-\w\.]+@([-\w]+\.)+[a-z]+$/i;
// let regexEmail = /^[a-z\d]+[\w\d.-]*@(?:[a-z\d]+[a-z\d-]+\.){1,5}[a-z]{2,6}$/i;

const checkData = () => {
  const firstName = inputFirstName.value;
  const lastName = inputLastName.value;
  const email = inputEmail.value;
  const password = inputPassword.value;

  if (firstName.trim() === '') inputFirstName.classList.add('error');
  else inputFirstName.classList.remove('error');

  if (lastName.trim() === '') inputLastName.classList.add('error');
  else inputLastName.classList.remove('error');

  if (!regexEmail.test(email.trim())) inputEmail.classList.add('error');
  else inputEmail.classList.remove('error');

  if (password.length < 5) inputPassword.classList.add('error');
  else inputPassword.classList.remove('error');

  console.log(firstName, lastName, email, password);
};

btn.addEventListener('click', checkData);

const inputFirstName = document.querySelector('#first-name');
const inputLastName = document.querySelector('#last-name');
const inputEmail = document.querySelector('#email');
const inputRadio = document.querySelector('.input-radio');
const inputGeneral = document.querySelector('#general');
const inputSupport = document.querySelector('#support');
const textMessage = document.querySelector('#message');
const inputConsent = document.querySelector('#consent');
const btnSubmit = document.querySelector('.btn-submit');
const modal = document.querySelector('.modal');
console.log('ok')

let regexEmail = /^[-\w\.]+@([-\w]+\.)+[a-z]+$/i;

const checkDate = (e) => {
  e.preventDefault();

  const firstName = inputFirstName.value;
  const lastName = inputLastName.value;
  const email = inputEmail.value;
  const message = textMessage.value;

  if (firstName.trim() === '') inputFirstName.parentElement.classList.add('show-error');
  else inputFirstName.parentElement.classList.remove('show-error');

  if (lastName.trim() === '') inputLastName.parentElement.classList.add('show-error');
  else inputLastName.parentElement.classList.remove('show-error');

  if (!regexEmail.test(email.trim())) inputEmail.parentElement.classList.add('show-error');
  else inputEmail.parentElement.classList.remove('show-error');

  if (!inputGeneral.checked && !inputSupport.checked) inputRadio.parentElement.classList.add('show-error');
  else inputRadio.parentElement.classList.remove('show-error');

  if (message.trim() === '') textMessage.parentElement.classList.add('show-error');
  else textMessage.parentElement.classList.remove('show-error');

  if (!inputConsent.checked) inputConsent.parentElement.parentElement.classList.add('show-error');
  else inputConsent.parentElement.parentElement.classList.remove('show-error');

  if (firstName && lastName && email && (inputGeneral.checked || inputSupport.checked) && message && inputConsent.checked) {
    modal.setAttribute('open', true);
  }
}

btnSubmit.addEventListener('click', checkDate)
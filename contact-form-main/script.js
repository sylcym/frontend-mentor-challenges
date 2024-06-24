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
  const general = inputGeneral.value;
  const support = inputSupport.value;
  const message = textMessage.value;
  const consent = inputConsent.value;

  if (firstName.trim() === '') inputFirstName.parentElement.classList.add('show-error');
  else inputFirstName.parentElement.classList.remove('show-error');

  if (lastName.trim() === '') inputLastName.parentElement.classList.add('show-error');
  else inputLastName.parentElement.classList.remove('show-error');

  if (!regexEmail.test(email.trim())) inputEmail.parentElement.classList.add('show-error');
  else inputEmail.parentElement.classList.remove('show-error');

  if (general || support) inputRadio.parentElement.classList.add('show-error');
  else inputRadio.parentElement.classList.remove('show-error');

  if (message.trim() === '') textMessage.parentElement.classList.add('show-error');
  else textMessage.parentElement.classList.remove('show-error');

  if (consent) inputConsent.classList.add('error-consent');
  else inputConsent.classList.remove('error-consent');
  consent.setAttribute(checked)
  console.log('ok')

  if (firstName && lastName && email && (general || support) && message && consent) {
    modal.setAttribute('open', true);
  }
}



btnSubmit.addEventListener('click', checkDate)
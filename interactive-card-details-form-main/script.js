const numberCard = document.querySelector('.number-card');
const ownerCard = document.querySelector('.owner-card');
const validityMonth = document.querySelector('.validity-month');
const validityYear = document.querySelector('.validity-year');
const validityNumberCvc = document.querySelector('.validity-number-cvc');
const inputCardholderName = document.querySelector('.cardholder-name');
const inputNumber = document.querySelector('.card-number');
const inputValidityMonth = document.querySelector('.month');
const inputValidityYear = document.querySelector('.year');
const inputValidityCvc = document.querySelector('.number-cvc');
const btnConfirm = document.querySelector('.btn-confirm');
const btnContinue = document.querySelector('.btn-continue');
const cardholderMessageError = document.querySelector('.error-cardholder');
const cardNumberMessageError = document.querySelector('.error-card-number');
const monthMessageError = document.querySelector('.error-date');
const yearMessageError = document.querySelector('.error-date');
const cvcMessageError = document.querySelector('.error-cvc');

inputCardholderName.addEventListener('input', () => {
  inputCardholderName.value = inputCardholderName.value.replace(/[^a-zA-Z]/g, '').trim();
  ownerCard.textContent = inputCardholderName.value;
});

inputNumber.addEventListener('input', () => {
  inputNumber.value = inputNumber.value
    .replace(/\D+/g, '')
    .replace(/(.{4})/g, '$1 ')
    .trim();
  numberCard.textContent = inputNumber.value;
});

inputValidityMonth.addEventListener('input', () => {
  inputValidityMonth.value = inputValidityMonth.value.replace(/\D+/g, '');
  validityMonth.textContent = inputValidityMonth.value;
});

inputValidityYear.addEventListener('input', () => {
  inputValidityYear.value = inputValidityYear.value.replace(/\D+/g, '');
  validityYear.textContent = inputValidityYear.value;
});

inputValidityCvc.addEventListener('input', () => {
  inputValidityCvc.value = inputValidityCvc.value.replace(/\D+/g, '');
  validityNumberCvc.textContent = inputValidityCvc.value;
});

btnConfirm.addEventListener('click', (e) => {
  e.preventDefault();

  checkCardholderName();
  checkCardNumber();
  checkMonth();
  checkYear();
  checkCvc();

  if (checkCardholderName() && checkCardNumber() && checkMonth() && checkYear() && checkCvc()) {
    const form = document.querySelector('.form');
    const followUp = document.querySelector('.follow-up');

    form.classList.remove('show');
    followUp.classList.add('show');
  }
});

function checkCardholderName() {
  const cardholderName = inputCardholderName.value;

  if (cardholderName.length < 3 || cardholderName.length > 24) {
    inputCardholderName.classList.add('show-error');
    cardholderMessageError.classList.add('show');
    return false;
  } else {
    inputCardholderName.classList.remove('show-error');
    cardholderMessageError.classList.remove('show');
    return true;
  }
}

function checkCardNumber() {
  const cardNumber = inputNumber.value;

  if (cardNumber.length !== 19) {
    inputNumber.classList.add('show-error');
    cardNumberMessageError.classList.add('show');
    return false;
  } else {
    inputNumber.classList.remove('show-error');
    cardNumberMessageError.classList.remove('show');
    return true;
  }
}

function checkMonth() {
  const month = inputValidityMonth.value;

  if (month.length < 0 || month < 1 || month > 12) {
    inputValidityMonth.classList.add('show-error');
    monthMessageError.classList.add('show');
    return false;
  } else {
    inputValidityMonth.classList.remove('show-error');
    monthMessageError.classList.remove('show');
    return true;
  }
}

function checkYear() {
  const year = inputValidityYear.value;

  if (year.length < 0 || year < 22) {
    inputValidityYear.classList.add('show-error');
    yearMessageError.classList.add('show');
    return false;
  } else {
    inputValidityYear.classList.remove('show-error');
    yearMessageError.classList.remove('show');
    return true;
  }
}

function checkCvc() {
  const cvc = inputValidityCvc.value;

  if (cvc.length !== 3) {
    inputValidityCvc.classList.add('show-error');
    cvcMessageError.classList.add('show');
    return false;
  } else {
    inputValidityCvc.classList.remove('show-error');
    cvcMessageError.classList.remove('show');
    return true;
  }
}

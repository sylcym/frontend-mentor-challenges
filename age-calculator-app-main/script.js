const inputDay = document.querySelector('#day');
const inputMonth = document.querySelector('#month');
const inputYear = document.querySelector('#year');

const labelDay = document.querySelector('.label-day');
const labelMonth = document.querySelector('.label-month');
const labelYear = document.querySelector('.label-year');

const resultDays = document.querySelector('.result-span-days');
const resultMonth = document.querySelector('.result-span-month');
const resultYears = document.querySelector('.result-span-year');

const messageErrorDay = document.querySelector('.error-day');
const messageErrorMonth = document.querySelector('.error-month');
const messageErrorYear = document.querySelector('.error-year');

const btnEvent = document.querySelector('.separating-btn');

let inputDayValue = '';
let inputMonthValue = '';
let inputYearValue = '';

function checkDay() {
  inputDayValue = inputDay.value;

  if (inputDayValue.length < 0 || +inputDayValue < 1 || +inputDayValue > 31) {
    inputDay.classList.add('error');
    messageErrorDay.classList.add('show');
    labelDay.classList.add('error')
    return false
  } else {
    inputDay.classList.remove('error');
    messageErrorDay.classList.remove('show');
    labelDay.classList.remove('error')
    return true;
  }
}

function checkMonth() {
  inputMonthValue = inputMonth.value;

  if (inputMonthValue.length < 0 || +inputMonthValue < 1 || +inputMonthValue > 12) {
    inputMonth.classList.add('error');
    messageErrorMonth.classList.add('show');
    labelMonth.classList.add('error');
    return false;
  } else {
    inputMonth.classList.remove('error')
    messageErrorMonth.classList.remove('show')
    labelMonth.classList.remove('error')
    return true
  }
}

function checkYear() {
  inputYearValue = inputYear.value;

  if (inputYearValue.length < 4 || +inputYearValue < 0 || +inputYearValue > 2023) {
    inputYear.classList.add('error');
    messageErrorYear.classList.add('show');
    labelYear.classList.add('show');
    return false;
  } else {
    inputYear.classList.remove('error');
    messageErrorYear.classList.remove('show');
    labelYear.classList.remove('error');
    return true;
  }
}

function ageCalculator() {
  const birthDate = new Date(
    inputYearValue,
    inputMonthValue - 1,
    inputDayValue
  );

  const currentDate = new Date();

  const age = currentDate - birthDate;

  const ageInDays = age / (1000 * 60 * 60 * 24);
  const ageInMonths = Math.floor(ageInDays / 30.4375);
  const ageInYears = Math.floor(ageInMonths / 12);

  const remainingMonths = ageInMonths % 12;
  const remainingDays = Math.floor(ageInDays % 30.4375);

  resultDays.textContent = remainingDays;
  resultMonth.textContent = remainingMonths;
  resultYears.textContent = ageInYears;
}


btnEvent.addEventListener('click', (e) => {
  e.preventDefault();

  if (checkDay() && checkMonth() && checkYear()) {
    ageCalculator();
  }
})
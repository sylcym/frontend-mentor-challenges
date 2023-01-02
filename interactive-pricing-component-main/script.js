const pageViewInfo = document.querySelector('.span-heading');
const price = document.querySelector('.price-fix');
const priceView = document.querySelector('.price-month');
const inputRange = document.querySelector('.input-progress');
const inputCheckbox = document.querySelector('input[type="checkbox"]');

let priceValue1 = 0;
let priceValue2 = 0;
let priceValue3 = 0;
let priceValue4 = 0;
let priceValue5 = 0;

function upPrice() {
  if (+inputRange.value === 1) {
    priceValue1 = !inputCheckbox.checked ? 8 : priceViewUpdate(8);
  } else if (+inputRange.value === 2) {
    priceValue2 = !inputCheckbox.checked ? 12 : priceViewUpdate(12);
  } else if (+inputRange.value === 3) {
    priceValue3 = !inputCheckbox.checked ? 16 : priceViewUpdate(16);
  } else if (+inputRange.value === 4) {
    priceValue4 = !inputCheckbox.checked ? 24 : priceViewUpdate(24);
  } else if (+inputRange.value === 5) {
    priceValue5 = !inputCheckbox.checked ? 36 : priceViewUpdate(36);
  }

  updateView();
}

function priceViewUpdate(inputRange) {
  return (inputRange - inputRange * 0.25) * 12;
}

function updateView() {
  if (+inputRange.value === 1) {
    price.textContent = priceValue1;
    pageViewInfo.textContent = '10K';
  } else if (+inputRange.value === 2) {
    price.textContent = priceValue2;
    pageViewInfo.textContent = '50K';
  } else if (+inputRange.value === 3) {
    price.textContent = priceValue3;
    pageViewInfo.textContent = '100K';
  } else if (+inputRange.value === 4) {
    price.textContent = priceValue4;
    pageViewInfo.textContent = '500K';
  } else if (+inputRange.value === 5) {
    price.textContent = priceValue5;
    pageViewInfo.textContent = '1M';
  }
}

function changeView() {
  if (inputCheckbox.checked) priceView.textContent = '/year';
  else priceView.textContent = '/month';

  upPrice();
}

inputRange.addEventListener('input', upPrice);
inputCheckbox.addEventListener('change', changeView);

// let heading = document.querySelector('.span-heading');
// let inputRange = document.querySelector('.input-progress');
// let price = document.querySelector('.price-fix');
// let priceView = document.querySelector('.price-month');
// let checkbox = document.querySelector('input[type="checkbox"]');

// function upPrice() {
//   // console.log(inputRange.value);
//   if (+inputRange.value === 1) {
//     price.textContent = '8';
//     heading.textContent = '10 K';
//   } else if (+inputRange.value === 2) {
//     price.textContent = '12';
//     heading.textContent = '50 K';
//   } else if (+inputRange.value === 3) {
//     price.textContent = '16';
//     heading.textContent = '100 K';
//   } else if (+inputRange.value === 4) {
//     price.textContent = '24';
//     heading.textContent = '500 K';
//   } else if (+inputRange.value === 5) {
//     price.textContent = '36';
//     heading.textContent = '1 M';
//   }
// }

// function priceViewUpdate(inputRange) {
//   // console.log(inputRange);
//   if (+inputRange === 1) {
//     price.textContent = `${(8 - 8 * 0.25) * 12}`;
//   } else if (+inputRange === 2) {
//     price.textContent = `${(12 - 12 * 0.25) * 12}`;
//   } else if (+inputRange === 3) {
//     price.textContent = `${(16 - 16 * 0.25) * 12}`;
//   } else if (+inputRange === 4) {
//     price.textContent = `${(24 - 24 * 0.25) * 12}`;
//   } else if (+inputRange === 5) {
//     price.textContent = `${(36 - 36 * 0.25) * 12}`;
//   }
// }

// function changeView() {
//   if (inputCheckbox.checked) {
//     priceView.textContent = '/year';
//     priceViewUpdate(+inputRange.value);
//   } else {
//     priceView.textContent = '/month';
//     upPrice();
//   }

//   console.log(inputCheckbox.checked);
// }

// inputRange.addEventListener('input', upPrice);
// inputCheckbox.addEventListener('change', changeView);

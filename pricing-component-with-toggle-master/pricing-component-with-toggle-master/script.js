const checkBox = document.querySelector('#check');
const monthlyPrices = document.querySelectorAll('.monthly-price');
const annualPrices = document.querySelectorAll('.annual-price');

function changePrice() {
  if (checkBox.checked) {
    monthlyPrices.forEach((monthlyPrice) => monthlyPrice.classList.add('price-hidden'));
    annualPrices.forEach((annualPrice) => annualPrice.classList.remove('price-hidden'));
  } else {
    monthlyPrices.forEach((monthlyPrice) => monthlyPrice.classList.remove('price-hidden'));
    annualPrices.forEach((annualPrice) => annualPrice.classList.add('price-hidden'));
  }
}

checkBox.addEventListener('click', changePrice);

function recordKey(e) {
  console.log(e.keyCode, e.which);
  if (e.keyCode === 37) {
    checkBox.checked = false;
    changePrice();
  } else if (e.keyCode === 39) {
    checkBox.checked = true;
    changePrice();
  }
}

document.addEventListener('keydown', recordKey);

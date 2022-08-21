const billInput = document.querySelector('#bill');
const billError = document.querySelector('.bill-wrapper .error');
const btnTip = document.querySelectorAll('.btn-tip');
const customTip = document.querySelector('.btn-tip-custom');
const peopleInput = document.querySelector('#people');
const peopleError = document.querySelector('.people-wrapper .error');
const displayTipAmount = document.querySelector('.display-result-tip');
const displayTotalAmount = document.querySelector('.display-result-total');
const btnReset = document.querySelector('.btn-reset');

let btnTipPercentage;

btnReset.addEventListener('click', resetData);
billInput.addEventListener('input', calculateTip);
peopleInput.addEventListener('input', calculateTip);
customTip.addEventListener('input', calculateTip);

btnTip.forEach((btn) => {
  btn.addEventListener('click', () => {
    btnTip.forEach((btn) => btn.classList.remove('active'));
    btn.classList.add('active');
    customTip.value = '';
    btnTipPercentage = btn.dataset.tip;
    calculateTip();
  });
});

function calculateTip() {
  const billValue = +billInput.value;
  const customTipValue = +customTip.value;
  const btnTipValue = +btnTipPercentage;
  const peopleNumber = +peopleInput.value;

  if (billValue === '' || billValue <= 0) {
    billError.classList.add('show');
    billInput.classList.add('outline-error');
    return;
  } else if (btnTipValue === 0 && customTipValue <= 0) {
    return;
  } else if (peopleNumber === '' || peopleNumber <= 0) {
    peopleError.classList.add('show');
    peopleInput.classList.add('outline-error');
    return;
  } else {
    billError.classList.remove('show');
    peopleError.classList.remove('show');
    billInput.classList.remove('outline-error');
    peopleInput.classList.remove('outline-error');
    btnReset.disabled = false;

    const tipPerPerson = ((billValue * (customTipValue > 0 ? customTipValue : btnTipValue)) / 100 / peopleNumber).toFixed(2);
    const totalPerPerson = (+(billValue / peopleNumber) + +tipPerPerson).toFixed(2);

    if (isFinite(tipPerPerson) && isFinite(totalPerPerson)) displayResult(tipPerPerson, totalPerPerson);
  }
}

function resetData() {
  billInput.value = '';
  customTip.value = '';
  peopleInput.value = '';
  billError.classList.remove('show');
  peopleError.classList.remove('show');
  billInput.classList.remove('outline-error');
  peopleInput.classList.remove('outline-error');
  btnReset.disabled = true;

  btnTip.forEach((btn) => btn.classList.remove('active'));

  displayResult('0.00', '0.00');
}

function displayResult(tipPerPerson, totalPerPerson) {
  displayTipAmount.textContent = `$${tipPerPerson}`;
  displayTotalAmount.textContent = `$${totalPerPerson}`;
}

const modals = document.querySelectorAll('.container-modal');
const modal1 = document.querySelector('.wrapper-modal-1');
const modal2 = document.querySelector('.wrapper-modal-2');
const containerBookmark = document.querySelector('.container-bookmark');
const btnBookmark = document.querySelector('.btn-bookmark');
const iconBookmark = document.querySelector('.icon-bookmark');
const btnEntry = document.querySelector('.btn-entry');
const btnGot = document.querySelector('.btn-got');
const btnCloseModal = document.querySelector('.icon-close-modal');
const btnProject = document.querySelectorAll('.project-input');
const btnSelectReward = document.querySelectorAll('.btn-select');
const btnContinue = document.querySelectorAll('.btn-continue');
const containersPrice = document.querySelectorAll('.container-price');
const overlay = document.querySelector('.overlay');

const resetAll = () => {
  modal1.classList.remove('show');
  overlay.classList.remove('show');
  modals.forEach(modal => modal.classList.remove('selected'));
  containersPrice.forEach(container => container.classList.remove('show'));
  btnProject.forEach(btn => btn.checked = false);
}

const removeClass = () => {
  modals.forEach(modal => modal.classList.remove('selected'));
  containersPrice.forEach(container => container.classList.remove('show'));
}

const showModal1 = () => {
  modal1.classList.add('show');
  overlay.classList.add('show');
}

const showModal2 = () => {
  modal2.classList.add('show');
  overlay.classList.add('show');
}

btnEntry.addEventListener('click', showModal1);
btnCloseModal.addEventListener('click', resetAll);
overlay.addEventListener('click', resetAll);

btnProject.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    removeClass();
    btn.closest('.container-modal').classList.add('selected');
    containersPrice[index].classList.add('show');
  })
})

btnSelectReward.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    removeClass();
    showModal1();
    btnProject[index + 1].click();
  })
})

btnContinue.forEach((btn) => {
  btn.addEventListener('click', () => {
    resetAll();
    showModal2();
  })
})

btnGot.addEventListener('click', () => {
  modal2.classList.remove('show');
  overlay.classList.remove('show');
  containerBookmark.classList.add('bookmarked');
  btnBookmark.classList.add('bookmarked');
  btnBookmark.textContent = 'Bookmarked';
  iconBookmark.src = 'images/icon-bookmark-green.svg';
})

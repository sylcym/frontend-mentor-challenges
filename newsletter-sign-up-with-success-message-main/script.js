const emailInput = document.querySelector("#email");
const formError = document.querySelector(".form-error")
const subscribeButton = document.querySelector(".btn-subscribe");
const main = document.querySelector('.main');
const modal = document.querySelector('.modal');
const modalButton = document.querySelector('.btn-modal');

const emailRegex = /^[-\w\.]+@([-\w]+\.)+[a-z]+$/i;

const checkEmail = () => {
  const email = emailInput.value;

  if (!emailRegex.test(email.trim())) {
    emailInput.classList.add("error");
    formError.classList.add("show");
  } else {
    emailInput.value = '';
    emailInput.classList.remove('error');
    formError.classList.remove('show')
    modal.classList.remove('hidden');
    main.classList.add('hidden')
  }
};

const dismissModal = () => {
  modal.classList.add('hidden');
  main.classList.remove('hidden');
}

subscribeButton.addEventListener('click', checkEmail);
modalButton.addEventListener('click', dismissModal);
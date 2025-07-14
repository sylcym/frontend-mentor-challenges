console.log('ok')
const form = document.querySelector('.form');
const input = document.querySelector('.input-email');
const btnForm = document.querySelector('.btn-form');
const error = document.querySelector('.form-error');
const success = document.querySelector('.form-success');

const regex = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/;

btnForm.addEventListener('click', (event) => {
  event.preventDefault();

  if (input.value === '' || !regex.test(input.value)) {
    error.classList.add('show');
    success.classList.remove('show');
  } else {
    error.classList.remove('show');
    success.classList.add('show');
    input.value = '';
  }

  setTimeout(() => {
    error.classList.remove('show')
    success.classList.remove('show');
  }, 3000);
})
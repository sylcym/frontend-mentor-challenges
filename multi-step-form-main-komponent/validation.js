export function validateStep1(nameInputEl, emailInputEl, phoneInputEl) {
  let isValid = true;

  const phoneRegex = /^[0-9+\s()\-]{6,}$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  function showFieldError(input, message) {
    const error = input.parentElement.querySelector('.error-message');
    input.classList.add('is-error');
    error.textContent = message;
    error.style.display = 'block';
  }

  if (nameInputEl.value.trim() === '') {
    showFieldError(nameInputEl, 'Name is required');
    isValid = false;
  }

  const emailValue = emailInputEl.value.trim();
  if (emailValue === '') {
    showFieldError(emailInputEl, 'Email is required');
    isValid = false;
  } else if (!emailRegex.test(emailValue)) {
    showFieldError(emailInputEl, 'Enter a valid email address');
    isValid = false;
  }

  const phoneValue = phoneInputEl.value.trim();
  if (phoneValue === '') {
    showFieldError(phoneInputEl, 'Phone number is required');
    isValid = false;
  } else if (!phoneRegex.test(phoneValue)) {
    showFieldError(phoneInputEl, 'Enter a valid phone number');
    isValid = false;
  }

  return isValid;
}

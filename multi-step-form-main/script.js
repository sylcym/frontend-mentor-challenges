const formSteps = document.querySelectorAll(".form-step");
const nextBtns = document.querySelectorAll(".btn-next");
const backBtns = document.querySelectorAll(".btn-back");
const stepsSidebar = document.querySelectorAll(".step");

const step1 = document.querySelector('.form-step[data-step="1"]');
const nameInput = step1.querySelector('#name');
const emailInput = step1.querySelector('#email');
const phoneInput = step1.querySelector('#phone');

const billingToggle = document.getElementById('billing');

const addonInputs = document.querySelectorAll('input[name="addons"]');

const planInputs = document.querySelectorAll('input[name="plan"]');

const btnConfirm = document.querySelector('.btn-confirm');

let currentStep = 1;

const formData = {
  plan: "Arcade",
  billing: 'monthly',
  addons: []
};



// Sidebar
function updateFormSteps() {
  const stepEl = document.querySelector(`.form-step[data-step="${currentStep}"]`);
  const sidebarEl = document.querySelector(`.step[data-step="${currentStep}"]`);

  if (!stepEl) return;

  formSteps.forEach(step => step.classList.remove("is-active"));
  stepsSidebar.forEach(step => step.classList.remove("is-active"));

  stepEl.classList.add("is-active");

  if (sidebarEl) {
    sidebarEl.classList.add("is-active");
  }

  if (currentStep === 2 || currentStep === 3) {
    updatePricesUI();
  }

  if (currentStep === 4) {
    buildSummary();
  }
}


nextBtns.forEach(btn => {
  btn.addEventListener('click', () => {

    if (currentStep === 1) {
      const ok = validateStep1();
      if (!ok) return;
    }

    if (currentStep === 2) {
      if (!formData.plan) {
        alert('Please select a plan');
        return;
      }
    }

    if (currentStep < formSteps.length) {
      currentStep++;
      updateFormSteps();
    }
  });
});


backBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (currentStep > 1) {
      currentStep--;
      updateFormSteps();
    }
  });
});

// Validation Step 1
function showFieldError(input, message) {
  const error = input.parentElement.querySelector('.error-message');
  input.classList.add('is-error');
  error.textContent = message;
  error.style.display = 'block';
}

function clearFieldError(input) {
  const error = input.parentElement.querySelector('.error-message');
  input.classList.remove('is-error');
  error.textContent = '';
  error.style.display = 'none';
}

function validateStep1() {
  let isValid = true;

  if (nameInput.value.trim() === '') {
    showFieldError(nameInput, 'Name is required');
    isValid = false;
  }

  const emailValue = emailInput.value.trim();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (emailValue === '') {
    showFieldError(emailInput, 'Email is required');
    isValid = false;
  } else if (!emailRegex.test(emailValue)) {
    showFieldError(emailInput, 'Enter a valid email address');
    isValid = false;
  }

  const phoneValue = phoneInput.value.trim();

  const phoneRegex = /^[0-9+\s()-]{6,}$/;

  if (phoneValue === '') {
    showFieldError(phoneInput, 'Phone number is required');
    isValid = false;
  } else if (!phoneRegex.test(phoneValue)) {
    showFieldError(phoneInput, 'Enter a valid phone number');
    isValid = false;
  }

  return isValid;
}

[nameInput, emailInput, phoneInput].forEach(input => {
  input.addEventListener('input', () => {
    clearFieldError(input);
  });
});


function updatePricesUI() {
  const priceEls = document.querySelectorAll('[data-monthly]');
  const bonusEls = document.querySelectorAll('.plan-bonus');

  priceEls.forEach(el => {
    const price = el.dataset[formData.billing];
    const suffix = formData.billing === 'monthly' ? 'mo' : 'yr';

    if (el.classList.contains('addon-price')) {
      el.textContent = `+$${price}/${suffix}`;
    } else {
      el.textContent = `$${price}/${suffix}`;
    }
  });

  bonusEls.forEach(el => {
    el.style.display = formData.billing === 'yearly' ? 'block' : 'none';
  });
}

billingToggle.addEventListener('change', () => {
  formData.billing = billingToggle.checked ? 'yearly' : 'monthly';
  updatePricesUI();
});



// step 3
addonInputs.forEach(input => {
  input.addEventListener('change', () => {
    if (input.checked) {
      if (!formData.addons.includes(input.value)) {
        formData.addons.push(input.value);
      }
    } else {
      formData.addons = formData.addons.filter(a => a !== input.value);
    }
  });
});

// step 4 summary
planInputs.forEach(input => {
  input.addEventListener('change', () => {
    formData.plan = input.value;
  });
});

const labels = {
  arcade: "Arcade",
  advanced: "Advanced",
  pro: "Pro",
  online: "Online service",
  storage: "Larger storage",
  profile: "Customizable profile"
};


const prices = {
  arcade: { monthly: 9, yearly: 90 },
  advanced: { monthly: 12, yearly: 120 },
  pro: { monthly: 15, yearly: 150 },

  online: { monthly: 1, yearly: 10 },
  storage: { monthly: 2, yearly: 20 },
  profile: { monthly: 2, yearly: 20 }
};

function buildSummary() {
  if (!formData.plan) return;

  const summary = document.querySelector('.summary');
  summary.innerHTML = '';

  let total = 0;
  const suffix = formData.billing === 'monthly' ? 'mo' : 'yr';

  const box = document.createElement('div');
  box.classList.add('summary-box');
  summary.appendChild(box);

  //PLAN 
  const planPrice = prices[formData.plan][formData.billing];
  total += planPrice;

  const planTop = document.createElement('div');
  planTop.classList.add('summary-plan-top');

  planTop.innerHTML = `
    <div class="summary-plan-left">
      <span class="summary-plan-name">
        ${labels[formData.plan]} (${formData.billing})
      </span>
      <button type="button" class="summary-change">Change</button>
    </div>
    <span class="summary-plan-price">$${planPrice}/${suffix}</span>
  `;

  box.appendChild(planTop);

  //  DIVIDER
  const divider = document.createElement('div');
  divider.classList.add('summary-divider');
  box.appendChild(divider);

  // ADD-ONS 
  formData.addons.forEach(addon => {
    const addonPrice = prices[addon][formData.billing];
    total += addonPrice;

    const addonDiv = document.createElement('div');
    addonDiv.classList.add('summary-addon');
    addonDiv.innerHTML = `
      <span>${labels[addon]}</span>
      <span>+$${addonPrice}/${suffix}</span>
    `;

    box.appendChild(addonDiv);
  });

  const totalDiv = document.createElement('div');
  totalDiv.classList.add('total');
  totalDiv.innerHTML = `
    <span>Total (per ${formData.billing === 'monthly' ? 'month' : 'year'})</span>
    <span>$${total}/${suffix}</span>
  `;

  summary.appendChild(totalDiv);
}
document.addEventListener('click', (e) => {
  if (e.target.classList.contains('summary-change')) {
    currentStep = 2;
    updateFormSteps();

    planInputs.forEach(input => {
      input.checked = input.value.toLowerCase() === formData.plan.toLowerCase();
    });

    updatePricesUI();
  }
});



btnConfirm.addEventListener('click', (e) => {
  e.preventDefault();
  currentStep++;
  updateFormSteps();
});

updatePricesUI();
updateFormSteps();













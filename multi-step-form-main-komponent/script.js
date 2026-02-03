
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

const state = {
  step: 1,
  plan: null,
  billing: "monthly",
  addons: []
};

const PRICES = {
  arcade: { monthly: 9, yearly: 90 },
  advanced: { monthly: 12, yearly: 120 },
  pro: { monthly: 15, yearly: 150 },
  online: { monthly: 1, yearly: 10 },
  storage: { monthly: 2, yearly: 20 },
  profile: { monthly: 2, yearly: 20 }
};

const LABELS = {
  arcade: "Arcade",
  advanced: "Advanced",
  pro: "Pro",
  online: "Online service",
  storage: "Larger storage",
  profile: "Customizable profile"
};

function formatPrice(value, billing, isAddon = false) {
  const suffix = billing === "monthly" ? "mo" : "yr";
  const sign = isAddon ? "+" : "";
  return `${sign}$${value}/${suffix}`;
}

function calculateTotal(state) {
  if (!state.plan) return 0;

  let total = PRICES[state.plan][state.billing];

  state.addons.forEach(addon => {
    total += PRICES[addon][state.billing];
  });

  return total;
}

// RENDER 
function renderStep() {
  formSteps.forEach(step => step.classList.remove("is-active"));
  stepsSidebar.forEach(step => step.classList.remove("is-active"));

  const activeForm = document.querySelector(`.form-step[data-step="${state.step}"]`);
  const activeSidebar = document.querySelector(`.step[data-step="${state.step}"]`);

  if (activeForm) activeForm.classList.add("is-active");
  if (activeSidebar) activeSidebar.classList.add("is-active");
}

function updatePricesUI() {
  const priceEls = document.querySelectorAll('[data-monthly]');
  const bonusEls = document.querySelectorAll('.plan-bonus');

  priceEls.forEach(el => {
    const price = el.dataset[state.billing];
    const isAddon = el.classList.contains('addon-price');
    el.textContent = formatPrice(Number(price), state.billing, isAddon);
  });

  bonusEls.forEach(el => {
    el.style.display = state.billing === 'yearly' ? 'block' : 'none';
  });
}

function renderPlans() {
  planInputs.forEach(input => {
    input.checked = input.value === state.plan;
  });
}

function renderAddons() {
  addonInputs.forEach(input => {
    input.checked = state.addons.includes(input.value);
  });
}

//  SUMMARY 
function renderSummaryPlan(container) {
  if (!state.plan) return;

  const planPrice = PRICES[state.plan][state.billing];
  const planTop = document.createElement('div');
  planTop.classList.add('summary-plan-top');

  planTop.innerHTML = `
    <div class="summary-plan-left">
      <span class="summary-plan-name">
        ${LABELS[state.plan]} (${state.billing})
      </span>
      <button type="button" class="summary-change">Change</button>
    </div>
    <span class="summary-plan-price">${formatPrice(planPrice, state.billing)}</span>
  `;
  container.appendChild(planTop);

  const divider = document.createElement('div');
  divider.classList.add('summary-divider');
  container.appendChild(divider);
}

function renderSummaryAddons(container) {
  state.addons.forEach(addon => {
    const addonPrice = PRICES[addon][state.billing];
    const addonDiv = document.createElement('div');
    addonDiv.classList.add('summary-addon');
    addonDiv.innerHTML = `
      <span>${LABELS[addon]}</span>
      <span>${formatPrice(addonPrice, state.billing, true)}</span>
    `;
    container.appendChild(addonDiv);
  });
}

function renderSummaryTotal(summaryRoot) {
  const total = calculateTotal(state);
  const suffix = state.billing === 'monthly' ? 'mo' : 'yr';

  const totalDiv = document.createElement('div');
  totalDiv.classList.add('total');
  totalDiv.innerHTML = `
    <span>Total (per ${state.billing === 'monthly' ? 'month' : 'year'})</span>
    <span>$${total}/${suffix}</span>
  `;
  summaryRoot.appendChild(totalDiv);
}

function buildSummary() {
  const summary = document.querySelector('.summary');
  summary.innerHTML = '';

  const box = document.createElement('div');
  box.classList.add('summary-box');
  summary.appendChild(box);

  renderSummaryPlan(box);
  renderSummaryAddons(box);
  renderSummaryTotal(summary);
}

// STEP
function goToStep(nextStep) {
  if (state.step === 1 && nextStep > 1) {
    if (!validateStep1()) return;
  }
  if (state.step === 2 && nextStep > 2) {
    if (!state.plan) {
      alert("Please select a plan");
      return;
    }
  }
  state.step = nextStep;
  render();
}

// EVENTY 
nextBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    goToStep(state.step + 1);
  });
});

backBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    if (state.step > 1) goToStep(state.step - 1);
  });
});

billingToggle.addEventListener('change', () => {
  state.billing = billingToggle.checked ? 'yearly' : 'monthly';
  render();
});

addonInputs.forEach(input => {
  input.addEventListener('change', () => {
    if (input.checked) {
      if (!state.addons.includes(input.value)) state.addons.push(input.value);
    } else {
      state.addons = state.addons.filter(a => a !== input.value);
    }
    render();
  });
});

planInputs.forEach(input => {
  input.addEventListener('change', () => {
    state.plan = input.value;
    render();
  });
});

btnConfirm.addEventListener('click', e => {
  e.preventDefault();
  goToStep(state.step + 1);
});

document.addEventListener('click', e => {
  if (e.target.classList.contains('summary-change')) {
    goToStep(2);
  }
});

//  STEP 1
const phoneRegex = /^[0-9+\s()\-]{6,}$/;

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
  input.addEventListener('input', () => clearFieldError(input));
});

// RENDER 
function render() {
  renderStep();
  updatePricesUI();
  renderPlans();
  renderAddons();
  buildSummary();
}

//  START
render();




const form = document.querySelector(".form");
const inputs = document.querySelectorAll(".input-conf");
const radioInputs = document.querySelectorAll(".input-radio-conf");
const submitBtn = document.querySelector(".btn-primary");

function validateForm() {
  let isValid = true;

  inputs.forEach(input => {
    const wrapper = input.closest(".input-wrapper");
    const errorMsg = input.closest(".form-field").querySelector(".error");

    if (input.value.trim() === "") {
      wrapper.classList.add("error-state");
      if (errorMsg) errorMsg.classList.add("active");
      isValid = false;
    } else {
      wrapper.classList.remove("error-state");
      if (errorMsg) errorMsg.classList.remove("active");
    }
  });

  const radioChecked = Array.from(radioInputs).some(r => r.checked);
  const radioError = document.querySelector(".form-radio .error");
  if (!radioChecked) {
    if (radioError) radioError.classList.add("active");
    isValid = false;
  } else if (radioError) {
    radioError.classList.remove("active");
  }

  return isValid;
}

//submit
form.addEventListener("submit", function (e) {
  e.preventDefault();
  if (validateForm()) {
    console.log("Formularz poprawny – można liczyć 🚀");
    const shownWrapper = document.querySelector(".shown-wrapper");
    const resultsWrapper = document.querySelector(".results-wrapper");

    shownWrapper.classList.add("results-active");
    resultsWrapper.classList.add("results-active");


    const amount = parseFloat(document.querySelector("#amount").value) || 0;
    const term = parseFloat(document.querySelector("#term").value) || 0;
    const rate = parseFloat(document.querySelector("#rate").value) || 0;


    const repaymentEl = document.querySelector(".repayment.amount");
    const totalEl = document.querySelector(".total.amount");
    const monthlyRate = rate / 100 / 12;
    const totalMonths = term * 12;

    const mortgageType = document.querySelector("input[name='mortgage_type']:checked").value;

    let monthlyRepayment, totalRepayment;

    if (mortgageType === "repayment") {
      // standardowa rata
      monthlyRepayment =
        amount *
        monthlyRate *
        Math.pow(1 + monthlyRate, totalMonths) /
        (Math.pow(1 + monthlyRate, totalMonths) - 1);

      totalRepayment = monthlyRepayment * totalMonths;
    } else {
      // interest only
      monthlyRepayment = amount * monthlyRate; // tylko odsetki
      totalRepayment = (monthlyRepayment * totalMonths) + amount; // odsetki + kapitał na końcu
    }





    // const monthlyRepayment = (amount * monthlyRate * Math.pow(1 + monthlyRate, totalMonths) / (Math.pow(1 + monthlyRate, totalMonths) - 1));
    // const totalRepayment = monthlyRepayment * term * 12;

    // Wstawiamy do HTML z formatowaniem
    repaymentEl.textContent = `£${monthlyRepayment.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
    totalEl.textContent = `£${totalRepayment.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;


  }
});

inputs.forEach(input => {
  input.addEventListener("input", () => {
    const wrapper = input.closest(".input-wrapper");
    const errorMsg = input.closest(".form-field").querySelector(".error");

    if (input.value.trim() !== "") {
      wrapper.classList.remove("error-state");
      if (errorMsg) errorMsg.classList.remove("active");
    }
  });
});

radioInputs.forEach(radio => {
  radio.addEventListener("change", () => {
    const radioError = document.querySelector(".form-radio .error");
    if (radioError) radioError.classList.remove("active");
  });
});

const clearBtn = document.querySelector(".clear");
clearBtn.addEventListener("click", () => {
  inputs.forEach(input => {
    input.value = "";
    const wrapper = input.closest(".input-wrapper");
    wrapper.classList.remove("error-state");
  });

  radioInputs.forEach(r => r.checked = false);
  const allErrors = document.querySelectorAll(".error");
  allErrors.forEach(err => err.classList.remove("active"));
});





// // radio
// const radios = document.querySelectorAll('.radio');
// const inputs = document.querySelectorAll('.input-conf');
// console.log(radios, inputs)

// function validateForm() {
//   let allFilled = true;

//   inputs.forEach(input => {
//     if (!input.value.trim()) {
//       allFilled = false;
//     }
//   })

//   radios.forEach(radio => {
//     radio.disabled = !allFilled;
//   })
// }

// inputs.forEach(input => {
//   input.addEventListener('input', validateForm);
// });
// console.log(inputs, 'ok')
// validateForm();
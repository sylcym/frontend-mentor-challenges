const resultsReal = document.querySelector('.results:not(.loading)');
const resultsLoader = document.querySelector('.loading');
const errorSection = document.querySelector('.error');
const notFoundSection = document.querySelector('.not-found');
const btnSearch = document.querySelector('.btn-search');



// hiding/showing
function hideErrorAndNotFound() {
  if (errorSection) errorSection.classList.add('hidden');
  if (notFoundSection) notFoundSection.classList.add('hidden');
}

function showLoader() {
  resultsLoader.classList.remove('hidden');
  resultsReal.classList.add('hidden');
  hideErrorAndNotFound();
}

function showResults() {
  resultsLoader.classList.add('hidden');
  resultsReal.classList.remove('hidden');
  hideErrorAndNotFound();
}

function showError() {
  if (errorSection) errorSection.classList.remove('hidden');
  hideAllExcept(errorSection);
}

function showNotFound() {
  if (notFoundSection) notFoundSection.classList.remove('hidden');
  hideAllExcept(notFoundSection);
}
// retrieving data from the API
async function fetchWeatherData() {
  showLoader();

  try {
    const response = await fetch(
      'https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m&daily=temperature_2m_max,temperature_2m_min&current_weather=true&timezone=Europe/Berlin'
    );

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    console.log("API data:", data);

    const temp = data.current_weather.temperature;
    console.log("Temperatura:", temp, data.current_weather.time);

    const tempEl = document.querySelector('.sing');
    tempEl.textContent = temp + "°";

    showResults();
  } catch (error) {
    console.error(error);
    showError();
  }
}


btnSearch.addEventListener('click', () => {
  console.log('Przycisk kliknięty');
  fetchWeatherData();
});
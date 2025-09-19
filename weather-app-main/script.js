const resultsReal = document.querySelector('.results:not(.loading)');
const resultsLoader = document.querySelector('.loading');
const errorSection = document.querySelector('.error');
const notFoundSection = document.querySelector('.not-found');
const searchInput = document.querySelector('.search-input');
const searchBtn = document.querySelector('.btn-light');

const tempEl = document.querySelector('.sing');
const infoCity = document.querySelector('.info.info-city');
const dateEl = document.querySelector('.date');

const feelsLikeEl = document.querySelector('.feels-like');
const humidityEl = document.querySelector('.humidity');
const windEl = document.querySelector('.wind');
const precipitationEl = document.querySelector('.precipitation');




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

// rendering temperature, date, and location
function renderWeather(geo, data) {
  if (tempEl && data.current_weather) {
    tempEl.textContent = `${Math.round(data.current_weather.temperature)}°`;
  }

  if (infoCity) {
    const parts = [];
    if (geo.name) parts.push(geo.name);
    if (geo.country) parts.push(geo.country);
    infoCity.textContent = parts.join(', ');
  }

  // 3️⃣ Data
  if (dateEl && data.current_weather && data.current_weather.time) {
    const d = new Date(data.current_weather.time);
    const options = { month: 'short', day: 'numeric', year: 'numeric' };
    const formattedDate = `${d.toLocaleDateString('en-GB', { weekday: 'long' })}, ${d.toLocaleDateString(undefined, options)}`;
    dateEl.textContent = formattedDate;
  }

  if (feelsLikeEl && data.current_weather) {
    feelsLikeEl.textContent = `${Math.round(data.current_weather.apparent_temperature)}°`;
  }

  if (humidityEl && data.hourly && data.hourly.relativehumidity_2m) {
    humidityEl.textContent = `${data.hourly.relativehumidity_2m[0]}%`;
  }

  if (windEl && data.current_weather) {
    windEl.textContent = `${Math.round(data.current_weather.windspeed)} km/h`;
  }

  if (precipitationEl && data.daily && data.daily.precipitation_sum) {
    precipitationEl.textContent = `${data.daily.precipitation_sum[0]} mm`;
  }

}


// retrieving data from the API
// geo object (open-meteo geocoding)
async function geocodeCity(name) {
  const base = 'https://geocoding-api.open-meteo.com/v1/search';
  const url = `${base}?name=${encodeURIComponent(name)}&count=1&language=en`;

  const res = await fetch(url);
  if (!res.ok) throw new Error('Geocoding request failed');

  const json = await res.json();
  if (!json.results || json.results.length === 0) return null;

  return json.results[0];
}
async function fetchWeatherData(geo) {
  showLoader();

  try {
    const params = new URLSearchParams({
      latitude: geo.latitude,
      longitude: geo.longitude,
      current_weather: 'true',
      hourly: 'temperature_2m',
      daily: 'temperature_2m_max,temperature_2m_min',
      timezone: 'auto'
    });


    const url = `https://api.open-meteo.com/v1/forecast?${params.toString()}`;
    const res = await fetch(url);
    if (!res.ok) throw new Error('Forecast request failed');

    const data = await res.json();
    console.log("Dane pogodowe:", data);

    renderWeather(geo, data);

    showResults();
  } catch (err) {
    console.error(err);
    showError();
  }
}



searchBtn.addEventListener('click', async () => {
  const cityName = searchInput.value.trim();
  if (!cityName) {
    console.log('Nic nie wpisano');
    return;
  }

  console.log('Szukam miasta:', cityName);

  try {
    const geo = await geocodeCity(cityName);
    if (!geo) {
      showNotFound();
      return;
    }

    const data = await fetchWeatherData(geo);
    console.log('Dane pogodowe:', data);
    showResults();
  } catch (err) {
    console.error('Błąd podczas wyszukiwania:', err);
    showError();
  }
});




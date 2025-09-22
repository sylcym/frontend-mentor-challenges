const weatherIcons = {
  // 🌞 Clear & Sunny
  0: 'icon-sunny.webp',
  1: 'icon-sunny.webp',

  // 🌤️ Partly cloudy / Overcast
  2: 'icon-party-cloudy.webp',
  3: 'icon-overcast.webp',

  // 🌫️ Fog
  45: 'icon-fog.webp',
  48: 'icon-fog.webp',

  // 🌧️ Drizzle
  51: 'icon-drizzle.webp',
  53: 'icon-drizzle.webp',
  55: 'icon-drizzle.webp',
  56: 'icon-drizzle.webp',
  57: 'icon-drizzle.webp',

  // 🌧️ Rain
  61: 'icon-rain.webp',
  63: 'icon-rain.webp',
  65: 'icon-rain.webp',
  66: 'icon-rain.webp',
  67: 'icon-rain.webp',

  // ❄️ Snow
  71: 'icon-snow.webp',
  73: 'icon-snow.webp',
  75: 'icon-snow.webp',
  77: 'icon-snow.webp',

  // 🌧️ Showers
  80: 'icon-rain.webp',
  81: 'icon-rain.webp',
  82: 'icon-rain.webp',
  85: 'icon-snow.webp',
  86: 'icon-snow.webp',

  // ⛈️ Thunderstorms
  95: 'icon-storm.webp',
  96: 'icon-storm.webp',
  99: 'icon-storm.webp',

  // 🔙 fallback
  default: 'icon-overcast.webp'
};




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

const dayList = document.querySelector('.day-list');

const hourList = document.querySelector('.hour-list');
const dayToggle = document.querySelector('.day-toggle');
const dayOptions = document.querySelectorAll('.btn-day');


let currentWeatherData = null;






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
function getWeatherIcon(code) {
  return weatherIcons[code] || weatherIcons.default;
}


function renderWeather(geo, data, idx = 0) {
  // 🌡️ temperatura główna
  if (tempEl && data.current_weather) {
    tempEl.textContent = `${Math.round(data.current_weather.temperature)}°`;
  }

  // 📍 miasto + kraj
  if (infoCity) {
    const parts = [];
    if (geo.name) parts.push(geo.name);
    if (geo.country) parts.push(geo.country);
    infoCity.textContent = parts.join(', ');
  }

  // 📅 data
  if (dateEl && data.current_weather?.time) {
    const d = new Date(data.current_weather.time);
    const options = { month: 'short', day: 'numeric', year: 'numeric' };
    const formattedDate = `${d.toLocaleDateString('en-GB', { weekday: 'long' })}, ${d.toLocaleDateString(undefined, options)}`;
    dateEl.textContent = formattedDate;
  }

  // 🤔 feels like (z hourly)
  if (feelsLikeEl && data.hourly?.apparent_temperature) {
    const feels = data.hourly.apparent_temperature[idx];
    feelsLikeEl.textContent = (feels != null) ? `${Math.round(feels)}°` : '–';
  }

  // 💧 wilgotność (z hourly)
  if (humidityEl && data.hourly?.relativehumidity_2m) {
    const hum = data.hourly.relativehumidity_2m[idx];
    humidityEl.textContent = (hum != null) ? `${Math.round(hum)}%` : '–';
  }

  // 🌬️ wiatr (jest w current_weather)
  if (windEl && data.current_weather) {
    windEl.textContent = `${Math.round(data.current_weather.windspeed)} km/h`;
  }

  // 🌧️ opady (najpierw hourly, potem fallback do daily)
  if (precipitationEl) {
    let precipText = '–';
    if (data.hourly?.precipitation?.[idx] != null) {
      precipText = `${data.hourly.precipitation[idx]} mm`;
    } else if (data.daily?.precipitation_sum?.[0] != null) {
      precipText = `${data.daily.precipitation_sum[0]} mm`;
    }
    precipitationEl.textContent = precipText;
  }

  // 🗓️ prognoza na 7 dni
  if (dayList && data.daily?.time) {
    dayList.innerHTML = ''; // wyczyść stare elementy

    for (let i = 0; i < data.daily.time.length; i++) {
      const d = new Date(data.daily.time[i]);
      const dayName = d.toLocaleDateString('en-GB', { weekday: 'short' });

      const max = data.daily.temperature_2m_max?.[i];
      const min = data.daily.temperature_2m_min?.[i];

      const code = data.daily.weathercode?.[i];
      const iconFile = getWeatherIcon(code);


      const li = document.createElement('li');
      li.classList.add('day-item');

      li.innerHTML = `
            <h3 class="day">${dayName}</h3>
            <img
              src="assets/images/${iconFile}"
              alt="Weather icon"
              class="icon-weather"
            />
            <div class="degrees-wrapper">
              <p class="value value-max">${Math.round(max)}<span class="degree">°</span></p>
              <p class="value value-min">${Math.round(min)}<span class="degree">°</span></p>
            </div>
      `;

      dayList.appendChild(li);
    }
  }



}



// DROPDOWN TOGGLE
dayToggle.addEventListener('click', () => {
  const optionsList = dayToggle.parentElement.querySelector('.day-options');
  const expanded = dayToggle.getAttribute('aria-expanded') === 'true';

  dayToggle.setAttribute('aria-expanded', !expanded);

  optionsList.classList.toggle('hidden', expanded);
});

dayOptions.forEach((btn, i) => {
  btn.addEventListener('click', () => {
    dayOptions.forEach(b => b.parentElement.classList.remove('active-day'));
    btn.parentElement.classList.add('active-day');

    dayToggle.textContent = btn.textContent;

    const optionsList = dayToggle.parentElement.querySelector('.day-options');
    optionsList.classList.add('hidden');
    dayToggle.setAttribute('aria-expanded', false);

    renderHourlyForecast(currentWeatherData, i);
  });
});

// HOUR RENDERING 
function renderHourlyForecast(data, selectedDayIdx = 0) {
  if (!hourList || !data?.hourly?.time) return;

  hourList.innerHTML = '';

  const dailyTimes = data.daily.time[selectedDayIdx];

  const dayHours = data.hourly.time
    .map((t, i) => ({ time: t, idx: i }))
    .filter(item => item.time.startsWith(dailyTimes))
    .slice(0, 8);


  dayHours.forEach(({ time, idx }) => {
    const d = new Date(time);
    let hourStr = d.getHours();
    let ampm = hourStr >= 12 ? 'pm' : 'am';
    hourStr = hourStr % 12 || 12;

    const temp = data.hourly.temperature_2m[idx];
    const code = data.hourly.weathercode[idx];

    if (temp == null || code == null) return;

    const iconFile = getWeatherIcon(code);

    const li = document.createElement('li');
    li.classList.add('hour-item');
    li.innerHTML = `
      <img src="assets/images/${iconFile}" alt="Weather icon" class="icon-hour" />
      <div class="content">
        <p class="hour">${hourStr}<span class="time">${ampm}</span></p>
        <p class="value value-hour">${Math.round(temp)}<span class="degree">°</span></p>
      </div>
    `;
    hourList.appendChild(li);
  });
}

// INITIALIZATION AFTER DATA LOAD
function initHourlyDropdown(data) {
  currentWeatherData = data;

  const firstBtn = dayOptions[0];
  firstBtn.parentElement.classList.add('active-day');
  dayToggle.textContent = firstBtn.textContent;

  const optionsList = dayToggle.parentElement.querySelector('.day-options');
  optionsList.classList.add('hidden');
  dayToggle.setAttribute('aria-expanded', false);

  renderHourlyForecast(data, 0);
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
      // hourly: 'temperature_2m,apparent_temperature,relativehumidity_2m,precipitation',
      hourly: 'temperature_2m,apparent_temperature,relativehumidity_2m,precipitation,weathercode',
      daily: 'temperature_2m_max,temperature_2m_min,precipitation_sum,weathercode',
      timezone: 'auto',
      temperature_unit: 'celsius',
      windspeed_unit: 'kmh',
      precipitation_unit: 'mm'
    });


    const url = `https://api.open-meteo.com/v1/forecast?${params.toString()}`;
    const res = await fetch(url);
    if (!res.ok) throw new Error('Forecast request failed');

    const data = await res.json();
    // console.log("Dane pogodowe:", data);
    console.log('ok', data.hourly)
    const currentTime = data.current_weather?.time;
    let idx = -1;
    if (currentTime && data.hourly && Array.isArray(data.hourly.time)) {
      idx = data.hourly.time.indexOf(currentTime);
      if (idx === -1) {
        const hourPrefix = currentTime.slice(0, 13);
        idx = data.hourly.time.findIndex(t => t.slice(0, 13) === hourPrefix);
      }
    }
    if (idx === -1) idx = 0;

    renderWeather(geo, data, idx);

    initHourlyDropdown(data);


    showResults();
    return data;


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




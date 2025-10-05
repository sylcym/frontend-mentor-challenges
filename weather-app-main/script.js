const weatherIcons = {
  // 🌞 Clear & Sunny
  0: 'icon-sunny.webp',
  1: 'icon-sunny.webp',

  // 🌤️ Partly cloudy / Overcast
  2: 'icon-partly-cloudy.webp',
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

const defaultUnits = {
  system: 'metric',
  temperature: 'C',
  wind: 'kmh',
  precipitation: 'mm'
};

const main = document.querySelector('.main');
const resultsReal = document.querySelector('.results:not(.loading)');
const resultsLoader = document.querySelector('.loading');
const errorSection = document.querySelector('.error');
const btnRetry = document.querySelector('.btn-retry');
const notFoundSection = document.querySelector('.not-found');

const searchBox = document.querySelector('.search-box');
const searchInput = document.querySelector('.search-input');
const searchBtn = document.querySelector('.btn-search');
const cityOptionsList = document.querySelector('.city-options');

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

const btnImperial = document.querySelector('.switch-imperial');
const btnMetric = document.querySelector('.switch-metric');
const unitsList = document.querySelector('.units-list');
const unitsPanel = document.querySelector('.units-panel');
const switchButtons = document.querySelectorAll('.units-list .switch');
const unitsContainer = document.querySelector('.units-container');
const unitsBtn = document.querySelector('.units-btn');

const body = document.body;
const themeToggleBtn = document.querySelector('.btn-theme');

let currentWeatherData = null;
let unitsSettings = JSON.parse(localStorage.getItem('unitsSettings')) || { ...defaultUnits };
let recentCities = JSON.parse(localStorage.getItem('recentCities')) || [];
let weatherData = {
  temperature: 20,
  feelsLike: 18,
  humidity: 46,
  wind: 14,
  precipitation: 0
};

themeToggleBtn.addEventListener('click', () => {
  body.classList.toggle('light-theme');
});

// HELPERS
function saveUnitsSettings() {
  localStorage.setItem('unitsSettings', JSON.stringify(unitsSettings));
}

// SWITCH IMPERIAL/METRIC
function updateSystemButtons() {
  if (!btnImperial || !btnMetric) return;

  if (unitsSettings.system === 'imperial') {
    btnImperial.classList.add('hidden');
    btnMetric.classList.remove('hidden');
  } else {
    btnMetric.classList.add('hidden');
    btnImperial.classList.remove('hidden');
  }
}

function applyUnitsSettings() {
  switchButtons.forEach(sw => {
    const parent = sw.closest('.units-item');
    const category = parent.querySelector('.switch-option').textContent.toLowerCase();

    let currentValue;
    if (category.includes('temperature')) currentValue = unitsSettings.temperature;
    else if (category.includes('wind')) currentValue = unitsSettings.wind;
    else if (category.includes('precipitation')) currentValue = unitsSettings.precipitation;

    sw.classList.toggle('active', sw.dataset.value === currentValue);
  });
}

//PANEL OPEN/CLOSE 
function openUnitsPanel() {
  if (!unitsPanel || !unitsBtn) return;
  unitsPanel.classList.remove('hidden');
  unitsBtn.setAttribute('aria-expanded', 'true');
}

function closeUnitsPanel() {
  if (!unitsPanel || !unitsBtn) return;
  unitsPanel.classList.add('hidden');
  unitsBtn.setAttribute('aria-expanded', 'false');
}

function toggleUnitsPanel(e) {
  if (e) e.stopPropagation();
  const expanded = unitsBtn.getAttribute('aria-expanded') === 'true';
  expanded ? closeUnitsPanel() : openUnitsPanel();
}

//INIT LISTENERS
if (unitsBtn) {
  unitsBtn.addEventListener('click', toggleUnitsPanel);
}

if (unitsPanel) {
  unitsPanel.addEventListener('click', e => e.stopPropagation()); // klik w panel nie zamyka
}

document.addEventListener('click', e => {
  if (unitsContainer && !unitsContainer.contains(e.target)) closeUnitsPanel();
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeUnitsPanel();
});

// C/F, kmh/mph, mm/in
switchButtons.forEach(sw => {
  sw.addEventListener('click', () => {
    const parent = sw.closest('.units-item');

    parent.querySelectorAll('.switch').forEach(s => s.classList.remove('active'));
    sw.classList.add('active');

    const category = parent.querySelector('.switch-option').textContent.toLowerCase();
    const value = sw.dataset.value;

    if (category.includes('temperature')) unitsSettings.temperature = value;
    else if (category.includes('wind')) unitsSettings.wind = value;
    else if (category.includes('precipitation')) unitsSettings.precipitation = value;

    saveUnitsSettings();
  });
});

// metric/imperial
if (btnImperial) {
  btnImperial.addEventListener('click', () => {
    unitsSettings.system = 'imperial';
    unitsSettings.temperature = 'F';
    unitsSettings.wind = 'mph';
    unitsSettings.precipitation = 'in';

    saveUnitsSettings();
    updateSystemButtons();
    applyUnitsSettings();
    closeUnitsPanel();
  });
}

if (btnMetric) {
  btnMetric.addEventListener('click', () => {
    unitsSettings.system = 'metric';
    unitsSettings.temperature = 'C';
    unitsSettings.wind = 'kmh';
    unitsSettings.precipitation = 'mm';

    saveUnitsSettings();
    updateSystemButtons();
    applyUnitsSettings();
    closeUnitsPanel();
  });
}

//INIT 
function initUnitsPanel() {
  if (!unitsSettings.system) {
    unitsSettings = { ...defaultUnits };
    saveUnitsSettings();
  }

  updateSystemButtons();
  applyUnitsSettings();

  if (unitsPanel) unitsPanel.classList.add('hidden');
  if (unitsBtn) unitsBtn.setAttribute('aria-expanded', 'false');
}

initUnitsPanel();

// CONVERSIONS
function cToF(celsius) {
  return (celsius * 9 / 5) + 32;
}

function fToC(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}

function kmhToMph(kmh) {
  return kmh / 1.609;
}

function mphToKmh(mph) {
  return mph * 1.609;
}

function mmToIn(mm) {
  return mm / 25.4;
}

function inToMm(inches) {
  return inches * 25.4;
}

// FORMATTER
function formatValue(category, value) {
  if (category === 'temperature') {
    return unitsSettings.temperature === 'C'
      ? `${Math.round(value)} °`
      : `${Math.round(cToF(value))} °`;
  }

  if (category === 'wind') {
    return unitsSettings.wind === 'kmh'
      ? `${Math.round(value)} km/h`
      : `${Math.round(kmhToMph(value))} mph`;
  }

  if (category === 'precipitation') {
    return unitsSettings.precipitation === 'mm'
      ? `${value.toFixed(1)} mm`
      : `${mmToIn(value).toFixed(2)} in`;
  }

  return value;
}

// RENDER ALL DATA
function renderAllData() {
  // 🌡️
  const tempEl = document.querySelector('.sing');
  if (tempEl) {
    tempEl.innerHTML = formatValue('temperature', weatherData.temperature)
      .replace(/(°[CF])/, '<span class="degree">$1</span>');
  }

  // 🤔 feels like (z hourly)
  const feelsEl = document.querySelector('.feels-like');
  if (feelsEl) {
    feelsEl.innerHTML = formatValue('temperature', weatherData.feelsLike)
      .replace(/(°[CF])/, '<span class="degree">$1</span>');
  }

  // 💧
  const humidityEl = document.querySelector('.humidity');
  if (humidityEl) {
    humidityEl.innerHTML = `${weatherData.humidity}<span class="percent">%</span>`;
  }

  // 🌬️
  const windEl = document.querySelector('.wind');
  if (windEl) {
    windEl.innerHTML = formatValue('wind', weatherData.wind)
      .replace(/(km\/h|mph)/, '<span class="speed">$1</span>');
  }

  // 🌧️
  const precEl = document.querySelector('.precipitation');
  if (precEl) {
    precEl.innerHTML = formatValue('precipitation', weatherData.precipitation)
      .replace(/(mm|in)/, '<span class="quantity">$1</span>');
  }
}

if (btnImperial) {
  btnImperial.addEventListener('click', () => {
    unitsSettings.system = 'imperial';
    unitsSettings.temperature = 'F';
    unitsSettings.wind = 'mph';
    unitsSettings.precipitation = 'in';
    saveUnitsSettings();

    updateSystemButtons();
    applyUnitsSettings();

    renderAllData();
    closeUnitsPanel();
  });
}

if (btnMetric) {
  btnMetric.addEventListener('click', () => {
    unitsSettings.system = 'metric';
    unitsSettings.temperature = 'C';
    unitsSettings.wind = 'kmh';
    unitsSettings.precipitation = 'mm';
    saveUnitsSettings();

    updateSystemButtons();
    applyUnitsSettings();

    renderAllData();
    closeUnitsPanel();
  });
}

function init() {
  if (!unitsSettings.system) {
    unitsSettings = { ...defaultUnits };
    saveUnitsSettings();
  }

  updateSystemButtons();
  applyUnitsSettings();
  renderAllData();
}

init();
renderAllData();

// search-city

cityOptionsList.classList.add('hidden');

function addCityToHistory(cityName) {
  if (!recentCities.includes(cityName)) {
    recentCities.unshift(cityName);
  }

  if (recentCities.length > 5) {
    recentCities.pop();
  }

  localStorage.setItem('recentCities', JSON.stringify(recentCities));
}

function renderCityHistory() {
  cityOptionsList.innerHTML = '';

  recentCities.forEach((city, index) => {
    const li = document.createElement('li');
    li.classList.add('item-city');
    li.setAttribute('role', 'option');

    if (index === 0) {
      li.classList.add('active-day');
    }

    li.innerHTML = `<button class="btn-day" data-value="${city}">${city}</button>`;
    cityOptionsList.appendChild(li);

    const btn = li.querySelector('button');

    btn.addEventListener('click', async () => {
      document.querySelectorAll('.city-options .item-city')
        .forEach(el => el.classList.remove('active-day'));

      li.classList.add('active-day');

      searchInput.value = city;
      cityOptionsList.classList.add('hidden');

      const geo = await geocodeCity(city);

      if (!geo) {
        showNotFound();
        return;
      }

      await fetchWeatherData(geo);
      showResults();
    });
  });
}

renderCityHistory();

searchInput.addEventListener('focus', () => {
  if (recentCities.length > 0) {
    cityOptionsList.classList.remove('hidden');
  }
});

document.addEventListener('click', (e) => {
  if (!searchInput.contains(e.target) && !cityOptionsList.contains(e.target)) {
    cityOptionsList.classList.add('hidden');
  }
});

searchBtn.addEventListener('click', async () => {
  const cityName = searchInput.value.trim();
  if (!cityName) return;

  const geo = await geocodeCity(cityName);
  if (!geo) {
    showNotFound();
    return;
  }

  await fetchWeatherData(geo);
  addCityToHistory(cityName);
});


// hiding/showing
function hideAllSections() {
  const sections = [resultsReal, resultsLoader, errorSection, notFoundSection];
  sections.forEach(s => s?.classList.add('hidden'));
}

function showOnly(section) {
  hideAllSections();
  if (section) section.classList.remove('hidden');
}

function showLoader() {
  showOnly(resultsLoader);
}

function showResults() {
  showOnly(resultsReal);
}

function showError() {
  main.classList.add('hidden')
  showOnly(errorSection);
}

function resetError() {
  main.classList.remove('hidden')
  errorSection.classList.add('hidden')
}

function showNotFound() {
  showOnly(notFoundSection);
}

function getWeatherIcon(code) {
  return weatherIcons[code] || weatherIcons.default;
}

function renderWeather(geo, data, idx = 0) {
  // 🌡️
  if (tempEl && data.current_weather) {
    tempEl.textContent = `${Math.round(data.current_weather.temperature)}°`;
  }

  // 📍 
  if (infoCity) {
    const parts = [];
    if (geo.name) parts.push(geo.name);
    if (geo.country) parts.push(geo.country);
    infoCity.textContent = parts.join(', ');
  }

  // 📅 
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

  // 💧 
  if (humidityEl && data.hourly?.relativehumidity_2m) {
    const hum = data.hourly.relativehumidity_2m[idx];
    humidityEl.textContent = (hum != null) ? `${Math.round(hum)}%` : '–';
  }

  // 🌬️ 
  if (windEl && data.current_weather) {
    windEl.textContent = `${Math.round(data.current_weather.windspeed)} km/h`;
  }

  // 🌧️ 
  if (precipitationEl) {
    let precipText = '–';
    if (data.hourly?.precipitation?.[idx] != null) {
      precipText = `${data.hourly.precipitation[idx]} mm`;
    } else if (data.daily?.precipitation_sum?.[0] != null) {
      precipText = `${data.daily.precipitation_sum[0]} mm`;
    }
    precipitationEl.textContent = precipText;
  }

  //  7 day
  if (dayList && data.daily?.time) {
    dayList.innerHTML = '';

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

btnRetry.addEventListener('click', () => {
  resetError();
})

// // DROPDOWN TOGGLE
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
      <img src="assets/images/${iconFile}" 
            alt="Weather icon" 
            class="icon-hour"
            onerror="this.src='assets/images/${weatherIcons.default}'" />
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

// retrieving data from the API  / geo object (open-meteo geocoding)
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
    showError();
  }
}

searchBtn.addEventListener('click', async () => {
  await handleCitySearch();
});

searchInput.addEventListener('keydown', async (e) => {
  if (e.key === 'Enter') {
    e.preventDefault();
    await handleCitySearch();
  }
});

async function handleCitySearch() {
  const cityName = searchInput.value.trim();

  if (!cityName) {
    return;
  }

  try {
    const geo = await geocodeCity(cityName);

    if (!geo) {
      showNotFound();
      return;
    }

    const data = await fetchWeatherData(geo);
    showResults();

    addCityToHistory(cityName);
    renderCityHistory();

    searchInput.value = '';
    searchInput.focus();
  } catch (err) {
    showError();
  }
}

const cardAdditional = document.querySelector('.card-categories');
const dailyBtn = document.querySelector('.btn-timeframe.daily');
const weeklyBtn = document.querySelector('.btn-timeframe.weekly');
const monthlyBtn = document.querySelector('.btn-timeframe.monthly');

async function getData() {
  const data = await fetch('data.json');
  const jsonData = await data.json();

  jsonData.forEach((data) => {
    addCard(data.title, data.timeframes);
  });
}

function addCard(title, timeframes) {
  const card = `
    <div class="card-category ${title.toLowerCase()}">
      <header class="card-category-header ${title.toLowerCase()}"></header>

      <div class="card-category-body">
        <div class="card-category-title">
          <h2 class="paragraph--md">${title}</h2>
          <div class="card-category-options"></div>
        </div>

        <div class="card-category-details">
          <h2 class="heading-secondary">
            <span class="current-time daily">${timeframes.daily.current}</span>
            <span class="current-time weekly active">${timeframes.weekly.current}</span>
            <span class="current-time monthly">${timeframes.monthly.current}</span>
          hrs</h2>

          <p class="paragraph--sm">Last week - 
            <span class="previous-time daily">${timeframes.daily.previous}</span>
            <span class="previous-time weekly active">${timeframes.weekly.previous}</span>
            <span class="previous-time monthly">${timeframes.monthly.previous}</span>
          hrs</p>
        </div>
      </div>
    </div>
  `;

  cardAdditional.insertAdjacentHTML('beforeend', card);
}

function updateView(timeframe) {
  const btns = document.querySelectorAll('.btn-timeframe');
  const currentTimeEl = document.querySelectorAll('.current-time');
  const previousTimeEl = document.querySelectorAll('.previous-time');

  btns.forEach((btn) => btn.classList.remove('btn-timeframe--active'));

  currentTimeEl.forEach((el) => {
    el.classList.remove('active');

    if (el.classList.contains(timeframe)) el.classList.add('active');
  });

  previousTimeEl.forEach((el) => {
    el.classList.remove('active');

    if (el.classList.contains(timeframe)) el.classList.add('active');
  });
}

dailyBtn.addEventListener('click', () => {
  updateView('daily');
  dailyBtn.classList.add('btn-timeframe--active');
});

weeklyBtn.addEventListener('click', () => {
  updateView('weekly');
  weeklyBtn.classList.add('btn-timeframe--active');
});

monthlyBtn.addEventListener('click', () => {
  updateView('monthly');
  monthlyBtn.classList.add('btn-timeframe--active');
});

getData();

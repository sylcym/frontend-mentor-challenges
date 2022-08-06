const chartContainer = document.querySelector('.chart-container');
const maxHeight = 15;

async function getData() {
  const data = await fetch('/data.json');
  const jsonData = await data.json();

  const maxAmount = Math.max(...jsonData.map((el) => el.amount));
  const percent = maxHeight / maxAmount;

  jsonData.forEach((element) => {
    const dayInfo = document.createElement('div');
    dayInfo.classList.add('dayInfo');

    const amount = document.createElement('span');
    amount.classList.add('amount');
    amount.textContent = `$${element.amount}`;

    const graph = document.createElement('span');
    graph.classList.add('graph');
    graph.style.height = `${percent * element.amount}rem `;
    if (element.amount === maxAmount) graph.classList.add('blue');

    const date = document.createElement('p');
    date.classList.add('weekday');
    date.textContent = element.day;

    dayInfo.appendChild(amount);
    dayInfo.appendChild(graph);
    dayInfo.appendChild(date);

    chartContainer.appendChild(dayInfo);
  });
}

getData();

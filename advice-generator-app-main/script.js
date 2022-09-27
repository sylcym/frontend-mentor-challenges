const adviceID = document.querySelector('.advice-id');
const adviceText = document.querySelector('.advice-text');
const btnAdvice = document.querySelector('.btn');

const adviceApiUrl = 'https://api.adviceslip.com/advice';

async function getNewAdviceFromAPI() {
  try {
    const adviceFromApi = await fetch(adviceApiUrl, { cache: 'no-cache' });
    const jsonAdviceFormat = await adviceFromApi.json();
    const { id, advice } = jsonAdviceFormat.slip;

    displayAdvice(id, advice);
  } catch (err) {
    console.error('💥 Ooops, an error occurred.');
  }
}

function displayAdvice(id, advice) {
  adviceID.textContent = id;
  adviceText.textContent = advice;
}

btnAdvice.addEventListener('click', getNewAdviceFromAPI);

getNewAdviceFromAPI();

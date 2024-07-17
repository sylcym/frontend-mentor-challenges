console.log('ok')
const cardContent = document.querySelector('.card-content');
const cardScore = document.querySelector('.card-score');
const point = document.querySelector('.point');
const span = document.querySelector('.span');
const reply = document.querySelector('.reply');
const replayingTo = document.querySelector('.card-replaying-to');
const cardDelete = document.querySelector('.card-delete');
const cardEdit = document.querySelector('.card-edit');
const message = document.querySelector('#message');
const btnSubmit = document.querySelector('.btn-submit');
const btnUpdate = document.querySelector('.btn-update');
const btnReplay = document.querySelector('.btn-replay');
const dialog = document.querySelector('.dialog');
const btnCancel = document.querySelector('.btn-cancel');
const btnDelete = document.querySelector('.btn-delete');

async function getData() {
  const res = await (fetch('./data.json'));
  try {
    const data = await res.json();

    console.log(data)
    return data;
  } catch (err) {
    console.timeLog(err)
  }
}

getData()


const main = document.querySelector('.main');
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

async function getData(e) {
  try {
    const res = await (fetch('./data.json'));
    console.log(res)
    const data = await res.json();
    console.log(data)

    showComments(data);
    return data;
  } catch (err) {
    console.error(`💥 ${err}`)
  }
}

function showComments(data) {
  const { comments } = data;

  const wrapper = document.createElement('div');
  wrapper.classList.add('wrapper');

  let commentHTML = '';
  let repliesHTML = '';

  comments.forEach((comment, index) => {
    const {
      content,
      createdAt,
      score,
      user: { image, username },
      replies
    } = comment;

    const cardWrapper = document.createElement('div');
    cardWrapper.classList.add('card-wrapper', `card-wrapper-${index + 1}`)

    commentHTML = `
      <div class="card">
        <div class="card-info">
          <img
            src="${image.webp}"
            class="avatar"
            alt="${username}"
          />
          <p class="card-name">${username}</p>
          <p class="card-date">${createdAt}</p>
        </div>
        <p class="card-content">
          ${content}
        </p>

        <div class="card-score">
          <img src="./images/icon-plus.svg" alt="Add point" class="point" />
          <span class="span">${score}</span>
          <img
            src="./images/icon-minus.svg"
            alt="Remove point"
            class="point"
          />
        </div>

        <button class="card-replay">
          <img src="./images/icon-reply.svg" alt="Replay" />
          <p class="reply">Reply</p>
        </button>
      </div>
    `;

    cardWrapper.insertAdjacentHTML('beforeend', commentHTML)

    if (replies.length > 0) {
      cardWrapper.appendChild(addReplies(replies))
    }

    wrapper.appendChild(cardWrapper)
  });

  main.insertAdjacentElement('afterbegin', wrapper)
  console.log(wrapper)
}

function addReplies(replies) {
  const replyWrapper = document.createElement('div');
  replyWrapper.classList.add('card-replies-wrapper')

  let replyHTML = '';

  replies.forEach(reply => {
    const {
      content,
      createdAt,
      replyingTo,
      score,
      user: { image, username },
    } = reply;

    replyHTML = `
      <div class="card">
        <div class="card-info">
          <img
            src="${image.webp}"
            class="avatar"
            alt="${username}"
          />
          <p class="card-name">${username}</p>
          <p class="card-date">${createdAt}</p>
        </div>
        <p class="card-content">
          <span class="card-replaying-to">@${replyingTo}</span>
          ${content}
        </p>
        <div class="card-score">
          <img
            src="./images/icon-plus.svg"
            alt="Add point"
            class="point"
          />
          <span class="span">${score}</span>
          <img
            src="./images/icon-minus.svg"
            alt="Remove point"
            class="point"
          />
        </div>

        <button class="card-replay">
          <img src="./images/icon-reply.svg" alt="Replay" />
          <p class="reply">Reply</p>
        </button>
      </div>
    `;

    replyWrapper.insertAdjacentHTML('beforeend', replyHTML)
  })

  return replyWrapper;
}

getData()

// main.addEventListener('click', getData)




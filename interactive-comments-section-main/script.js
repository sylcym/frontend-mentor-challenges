const main = document.querySelector('.main');
const commentsContainer = document.querySelector('.comments-container');
const formContainer = document.querySelector('.form-container');

let currentIndex = 0;
let currUser = '';

async function getData() {
  try {
    const res = await (fetch('./data.json'));
    const data = await res.json();

    const { comments, currentUser } = data;

    currUser = currentUser;

    showComments(comments);
    addForm(currentUser, formContainer);
    return data;
  } catch (err) {
    console.error(`💥 ${err}`);
  }
}

function showComments(comments) {
  const wrapper = document.createElement('div');
  wrapper.classList.add('wrapper');

  comments.forEach((comment, index) => {
    const {
      content,
      createdAt,
      score,
      user: { image, username },
      replies
    } = comment;

    const cardWrapper = commentCard(index, image, username, createdAt, content, score);

    if (replies.length > 0) {
      cardWrapper.appendChild(addReplies(replies));
    }

    wrapper.appendChild(cardWrapper);
    currentIndex = index;
  });

  commentsContainer.insertAdjacentElement('beforeEnd', wrapper);
}

function commentCard(index, image, username, createdAt, content, score = 0) {
  const cardWrapper = document.createElement('div');
  cardWrapper.classList.add('card-wrapper', `card-wrapper-${index + 1}`);

  let commentHTML = `
   <div class="card-cw">
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
          <button class="add-score">
            <img
              src="./images/icon-plus.svg"
              alt="Add point"
              class="point"
            />
          </button>
          <span class="span">${score}</span>
          <button class="remove-score">
            <img
              src="./images/icon-minus.svg"
              alt="Remove point"
              class="point"
            />
          </button>
        </div>

        <button class="card-reply">
          <img src="./images/icon-reply.svg" alt="reply" />
          <span class="reply">Reply</span>
        </button>
      </div>
    </div>
  `;

  cardWrapper.insertAdjacentHTML('beforeend', commentHTML);

  const replyBtns = cardWrapper.querySelectorAll('.card-reply');
  const cardScore = cardWrapper.querySelectorAll('.card-score');
  handleReply(replyBtns);
  handleScore(cardScore);

  return cardWrapper
}

function addReplies(replies) {
  const replyWrapper = document.createElement('div');
  replyWrapper.classList.add('card-replies-wrapper');

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
      <div class="card-rw">
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
            <span class="card-replying-to">@${replyingTo}</span>
            ${content}
          </p>
          <div class="card-score">
            <button class="add-score">
              <img
                src="./images/icon-plus.svg"
                alt="Add point"
                class="point"
              />
            </button>
            <span class="span">${score}</span>
            <button class="remove-score">
              <img
                src="./images/icon-minus.svg"
                alt="Remove point"
                class="point"
              />
            </button>
          </div>

          <button class="card-reply">
            <img src="./images/icon-reply.svg" alt="reply" />
            <span class="reply">Reply</span>
          </button>
        </div>
      </div>
    `;

    replyWrapper.insertAdjacentHTML('beforeend', replyHTML);
  })

  const replyBtns = replyWrapper.querySelectorAll('.card-reply');
  const cardScore = replyWrapper.querySelectorAll('.card-score');
  handleReply(replyBtns);
  handleScore(cardScore);

  return replyWrapper;
}

function addForm(currentUser, container, reply) {
  const form = document.createElement('form');
  form.classList.add('form')

  const { image, username } = currentUser;

  const fromHTML = `
    <form class="form">
      <textarea name="message" id="message" class="active" placeholder="Add a comment..." ></textarea>
      <div class="content-avatar">
        <img src="${image.webp}" class="avatar" alt="${username}" />
      </div>
      <button type="submit" class="btn btn-submit">Send</button>
    </form>
  `;

  container.insertAdjacentHTML('beforeEnd', fromHTML);
  handleFormSubmit(image, username, reply);
}

function handleFormSubmit(image, username, reply) {
  const form = document.querySelector('.form');
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const replyToReply = e.target.closest('.card-rw');
    const replyToComment = e.target.closest('.card-cw');

    const message = form.querySelector('#message').value;
    const createdAt = new Date().toLocaleDateString("en-EN", options);
    const score = 0;

    const newComment = commentCard(currentIndex, image, username, createdAt, message, score)

    if (replyToReply) {
      const replyForm = replyToReply.querySelector('.form');

      replyToReply.appendChild(newComment);
      replyToReply.removeChild(replyForm);
    } else if (replyToComment) {
      const replyForm = replyToComment.querySelector('.form');

      replyToComment.appendChild(newComment);
      replyToComment.removeChild(replyForm);
    } else {
      commentsContainer.appendChild(newComment);
    }

    if (reply) reply.disabled = false;
    form.querySelector('#message').value = '';
  })
}

function handleReply(replyBtns) {
  replyBtns.forEach(reply => {
    reply.addEventListener('click', (e) => {
      const replyToReply = e.target.closest('.card-rw');
      const replyToComment = e.target.closest('.card-cw');

      reply.disabled = true;

      if (replyToReply) {
        addForm(currUser, replyToReply, reply);
      } else {
        addForm(currUser, replyToComment, reply);
      }
    })
  })
}

function handleScore(cardScore) {
  cardScore.forEach(score => {
    const addScore = score.querySelector('.add-score');
    const removeScore = score.querySelector('.remove-score');
    const scoreSpan = score.querySelector('.span');

    addScore.addEventListener('click', () => {
      const currentScore = scoreSpan.textContent;
      scoreSpan.textContent = +currentScore + 1;
    })

    removeScore.addEventListener('click', () => {
      const currentScore = scoreSpan.textContent;
      scoreSpan.textContent = +currentScore - 1;
    })
  })
}

getData();

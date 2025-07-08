// const faqCards = document.querySelectorAll('.faq-card');
// console.log('ok');

// const firstCard = faqCards[0];
// const firstAnswer = firstCard.querySelector(".faq__answer");
// const firstPlus = firstCard.querySelector(".icon-plus");
// const firstMinus = firstCard.querySelector(".icon-minus");

// firstAnswer.style.display = "block";
// firstPlus.style.display = "none";
// firstMinus.style.display = "block";

// faqCards.forEach(card => {
//   const question = card.querySelector(".faq__question");
//   const answer = card.querySelector(".faq__answer");
//   const plusIcon = card.querySelector(".icon-plus");
//   const minusIcon = card.querySelector(".icon-minus");

//   question.addEventListener("click", () => {
//     const isOpen = answer.style.display === "block";

//     faqCards.forEach((otherCard) => {
//       otherCard.querySelector(".faq__answer").style.display = "none";
//       otherCard.querySelector(".icon-plus").style.display = "block";
//       otherCard.querySelector(".icon-minus").style.display = "none";
//     });

//     if (!isOpen) {
//       answer.style.display = "block";
//       plusIcon.style.display = "none";
//       minusIcon.style.display = "block";
//     }
//   });
// });

const faqCards = document.querySelectorAll('.faq-card');

faqCards.forEach((card, index) => {
  const answer = card.querySelector('.faq__answer');
  const plusIcon = card.querySelector('.icon-plus');
  const minusIcon = card.querySelector('.icon-minus');

  if (index === 0) {
    answer.style.display = 'block';
    plusIcon.style.display = 'none';
    minusIcon.style.display = 'block';
  } else {
    answer.style.display = 'none';
    plusIcon.style.display = 'block';
    minusIcon.style.display = 'none';
  }

  const container = card.querySelector('.faq-container');

  container.addEventListener('click', () => {
    const isOpen = answer.style.display === 'block';

    faqCards.forEach((otherCard) => {
      otherCard.querySelector('.faq__answer').style.display = 'none';
      otherCard.querySelector('.icon-plus').style.display = 'block';
      otherCard.querySelector('.icon-minus').style.display = 'none';
    });

    if (!isOpen) {
      answer.style.display = 'block';
      plusIcon.style.display = 'none';
      minusIcon.style.display = 'block';
    }
  });
});


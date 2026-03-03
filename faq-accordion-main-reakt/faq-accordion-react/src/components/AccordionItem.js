
function AccordionItem({ question, answer, isOpen, onClick }) {

  return (
    <li className={`faq__item ${isOpen ? "active" : ""}`}>
      <button
        className="faq__question"
        aria-expanded={isOpen}
        onClick={onClick}
      >
        <span className="faq__question-text">{question}</span>
        <span className="faq__icon faq__icon--plus" aria-hidden="true"></span>
        <span className="faq__icon faq__icon--minus" aria-hidden="true"></span>
      </button>

      <div className="faq__answer">
        <div className="faq__answer-inner">
          <p>{answer}</p>
        </div>
      </div>
    </li>
  );
}

export default AccordionItem;
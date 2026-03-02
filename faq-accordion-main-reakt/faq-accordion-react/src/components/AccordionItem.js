import { useState } from "react";

function AccordionItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <li className={`faq__item ${isOpen ? "active" : ""}`}>
      <button
        className="faq__question"
        aria-expanded={isOpen}
        onClick={toggle}
      >
        <span className="faq__question-text">{question}</span>
        <span className="faq__icon faq__icon--plus" aria-hidden="true"></span>
        <span className="faq__icon faq__icon--minus" aria-hidden="true"></span>
      </button>

      <div className="faq__answer">
        <p>{answer}</p>
      </div>
    </li>
  );
}

export default AccordionItem;
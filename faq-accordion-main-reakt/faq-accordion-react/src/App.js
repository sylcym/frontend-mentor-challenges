import AccordionItem from "./components/AccordionItem";
import "./style.css";

const faqData = [
  {
    question: "What is Frontend Mentor, and how will it help me?",
    answer:
      ` Frontend Mentor offers realistic coding challenges to help
                developers improve their frontend coding skills with projects in
                HTML, CSS, and JavaScript. It's suitable for all levels and
                ideal for portfolio building.`,
  },
  {
    question: "Is Frontend Mentor free?",
    answer:
      `Yes, Frontend Mentor offers both free and premium coding
                challenges, with the free option providing access to a range of
                projects suitable for all skill levels.`,
  },
  {
    question: "Can I use Frontend Mentor projects in my portfolio?",
    answer:
      `Yes, you can use projects completed on Frontend Mentor in your
                portfolio. It's an excellent way to showcase your skills to
                potential employers!`,
  },
  {
    question: "How can I get help if I'm stuck?",
    answer:
      `The best place to get help is inside Frontend Mentor's Discord
                community. There's a help channel where you can ask questions
                and seek support from other community members.`,
  },
];

function App() {
  return (
    <div>
      <main className="faq">
        <section className="faq__container">
          <h1 className="faq__title">FAQs</h1>

          <ul className="faq__list">
            {faqData.map((item, index) => (
              <AccordionItem
                key={index}
                question={item.question}
                answer={item.answer}
              />
            ))}
          </ul>
        </section>
      </main>
      <div className="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
        Coded by <a href="#">Your Name Here</a>.
      </div>

    </div>
  );
}

export default App;

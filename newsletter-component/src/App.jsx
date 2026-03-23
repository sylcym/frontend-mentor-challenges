import { useState } from "react";
import Newsletter from "./components/Newsletter";
import ThankYou from "./components/ThankYou";

function App() {
  const [subscribed, setSubscribed] = useState(false);
  const [email, setEmail] = useState("");

  return (
    <>
      <div className="app">
        {!subscribed ? (
          <Newsletter
            setSubscribed={setSubscribed}
            setEmail={setEmail}
          />
        ) : (
          <ThankYou
            email={email}
            onDismiss={() => setSubscribed(false)}
          />
        )}
      </div>
      <div className="attribution">
        Challenge by{" "}
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          rel="noreferrer"
        >
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a
          href="https://github.com/sylcym/frontend-mentor-challenges/tree/main/newsletter-component"
          target="_blank"
          rel="noreferrer"
        >
          Sylwia
        </a>
        .
      </div>
    </>
  );
}

export default App;
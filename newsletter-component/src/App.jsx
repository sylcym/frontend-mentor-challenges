import { useState } from "react";
import Newsletter from "./components/Newsletter";
import ThankYou from "./components/ThankYou";

function App() {
  const [subscribed, setSubscribed] = useState(false);
  const [email, setEmail] = useState("");

  return (
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
  );
}

export default App;
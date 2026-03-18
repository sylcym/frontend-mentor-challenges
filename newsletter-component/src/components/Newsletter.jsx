
import { useState, useEffect } from "react";
import "./Newsletter.css";

function Newsletter({ setSubscribed, setEmail }) {
  const [email, setEmailInput] = useState("");
  const [error, setError] = useState("");
  const [showMessage, setShowMessage] = useState(false);

  const validateEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setShowMessage(false);

    if (!validateEmail(email)) {
      setError("Please enter a valid email");
      setShowMessage(true);
      return;
    }

    setEmail(email);        // zapis globalnie
    setSubscribed(true);    // przejście do ThankYou
  };

  // fade-out tylko dla errora
  useEffect(() => {
    if (showMessage) {
      const timer = setTimeout(() => setShowMessage(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [showMessage]);

  return (
    <div className="newsletter">
      <h2>Stay Updated!</h2>
      <p>Subscribe to our newsletter to get the latest news and updates.</p>

      <form className="newsletter-form" onSubmit={handleSubmit} noValidate>
        <input
          type="email"
          placeholder="Email address"
          value={email}
          onChange={(e) => setEmailInput(e.target.value)}
        />
        <button type="submit">Subscribe</button>
      </form>

      <div className={`message ${showMessage ? "show" : ""}`}>
        {error && <p className="error">{error}</p>}
      </div>
    </div>
  );
}

export default Newsletter;
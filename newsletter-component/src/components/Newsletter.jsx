
import { useState, useEffect } from "react";

function Newsletter() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [showMessage, setShowMessage] = useState(false);

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setShowMessage(false);

    if (!validateEmail(email)) {
      setError("Please enter a valid email");
      setShowMessage(true);
      return;
    }

    setSuccess(`Thank you! Your email: ${email} has been submitted.`);
    setEmail("");
    setShowMessage(true);
  };

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
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Subscribe</button>
      </form>
      <div className={`message ${showMessage ? "show" : ""}`}>
        {error && <p className="error">{error}</p>}
        {success && <p className="success">{success}</p>}
      </div>
    </div>
  );
}

export default Newsletter;
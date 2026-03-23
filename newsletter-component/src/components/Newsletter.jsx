
import { useState, useEffect } from "react";
import "./Newsletter.css";
import PropTypes from "prop-types";
import bgMobile from "../assets/images/illustration-sign-up-mobile.svg";
import bgTablet from "../assets/images/illustration-sign-up-tablet.svg";
import bgDesktop from "../assets/images/illustration-sign-up-desktop.svg";
import iconSuccess from "../assets/images/icon-success.svg";


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

    setEmail(email);
    setSubscribed(true);
  };

  useEffect(() => {
    if (showMessage) {
      const timer = setTimeout(() => setShowMessage(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [showMessage]);
  return (
    <div className="newsletter">
      <div className="newsletter-wrapper">
        <div className="newsletter-bg">
          <picture>
            <source media="(min-width: 1024px)" srcSet={bgDesktop} />
            <source media="(min-width: 768px)" srcSet={bgTablet} />
            <img src={bgMobile} alt="Illustration" />
          </picture>
        </div>

        <div className="newsletter-content">
          <h1 className="newsletter-title">Stay updated!</h1>

          <p className="newsletter-text">
            Join 60,000+ product managers receiving monthly updates on:
          </p>

          <div className="success-list">
            <p className="newsletter-paragraph"><img src={iconSuccess} className="icon-success" alt="Success" /> Product discovery and building what matters</p>
            <p className="newsletter-paragraph"><img src={iconSuccess} className="icon-success" alt="Success" /> Measuring to ensure updates are a success</p>
            <p className="newsletter-paragraph"><img src={iconSuccess} className="icon-success" alt="Success" /> And much more!</p>
          </div>

          <form className="newsletter-form" onSubmit={handleSubmit} noValidate>
            <div className="label-row">
              <label htmlFor="email">Email address</label>
              {error && <span className="error">Valid email required</span>}
            </div>
            <input
              className={error ? "input-error" : ""}
              type="email"
              placeholder="email@company.com"
              value={email}
              onChange={(e) => setEmailInput(e.target.value)}
            />
            <button type="submit">Subscribe to monthly newsletter</button>
          </form>

        </div>
      </div>
    </div>
  );

}

export default Newsletter;
Newsletter.propTypes = {
  setSubscribed: PropTypes.func.isRequired,
  setEmail: PropTypes.func.isRequired,
};


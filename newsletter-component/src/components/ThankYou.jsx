import "./ThankYou.css";
import iconSuccess from "../assets/images/icon-success.svg";

function ThankYou({ email, onDismiss }) {
  return (
    <div className="thank-you">
      <div className="thank-you-icon">
        <img src={iconSuccess} alt="Success icon" />
      </div>

      {/* Tytuł */}
      <h2>Thanks for subscribing!</h2>

      {/* Tekst */}
      <p>
        A confirmation email has been sent to <strong>{email}</strong>.
        Please open it and click the button inside to confirm your subscription.
      </p>

      {/* Przycisk Dismiss */}
      <button onClick={onDismiss}>Dismiss message</button>
    </div>
  );
}

export default ThankYou;
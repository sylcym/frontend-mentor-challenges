import "./ThankYou.css";
import iconSuccess from "../assets/images/icon-success.svg";
import PropTypes from "prop-types";

function ThankYou({ email, onDismiss }) {
  return (
    <div className="thank-you ">
      <div className="thank-you-icon">
        <img src={iconSuccess} alt="Success" />
      </div>
      <h1>Thanks for subscribing!</h1>
      <p>
        A confirmation email has been sent to <strong>{email}</strong>.
        Please open it and click the button inside to confirm your subscription.
      </p>
      <button onClick={onDismiss}>Dismiss message</button>
    </div>
  );
}

export default ThankYou;
ThankYou.propTypes = {
  email: PropTypes.string.isRequired,
  onDismiss: PropTypes.func.isRequired,
};
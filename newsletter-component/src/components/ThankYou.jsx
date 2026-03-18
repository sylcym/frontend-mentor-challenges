import "./ThankYou.css";

function ThankYou({ email, onDismiss }) {
  return (
    <div className="thank-you">
      <h2>Thanks for subscribing!</h2>
      <p>
        A confirmation email has been sent to <strong>{email}</strong>.
        Please open it and click the button inside to confirm your subscription.
      </p>
      <button onClick={onDismiss}>Dismiss message</button>
    </div>
  );
}

export default ThankYou;
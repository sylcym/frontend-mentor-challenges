import PropTypes from "prop-types";
import "./ThankYouCard.css";

function ThankYouCard({ rating }) {
  return (
    <div className="thankyou-card">
      <h2>Thank you!</h2>
      <p>You selected {rating} out of 5</p>
    </div>
  );
}

export default ThankYouCard;

ThankYouCard.propTypes = {
  rating: PropTypes.number,
};
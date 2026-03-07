// import PropTypes from "prop-types";
// import illustration from "../assets/images/illustration-thank-you.svg";
// import "./ThankYouCard.css";

// function ThankYouCard({ rating }) {
//   return (
//     <div className="thankyou-card">
//       <img src={illustration} alt="thank you illustration" />
//       <h2>Thank you!</h2>
//       <p>You selected {rating} out of 5</p>
//     </div>
//   );
// }

// export default ThankYouCard;

// ThankYouCard.propTypes = {
//   rating: PropTypes.number,
// };
import PropTypes from "prop-types";
import illustration from "../assets/images/illustration-thank-you.svg";
import "./ThankYouCard.css";

function ThankYouCard({ rating }) {
  return (
    <div className="card thankyou-card">

      <img src={illustration} alt="thank you illustration" />

      <div className="selected-rating">
        You selected {rating} out of 5
      </div>

      <h2>Thank you!</h2>

      <p>
        We appreciate you taking the time to give a rating.
        If you ever need more support, don’t hesitate to get in touch!
      </p>

    </div>
  );
}

export default ThankYouCard;

ThankYouCard.propTypes = {
  rating: PropTypes.number,
};
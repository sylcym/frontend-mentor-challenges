import PropTypes from "prop-types";
import starIcon from '../assets/images/icon-star.svg';
import "./RatingCard.css";

function RatingCard({ rating, setRating, setSubmitted }) {
  return (
    <div className="card">

      <div className="star">
        <img src={starIcon} alt="star icon" />
      </div>

      <h2>How did we do?</h2>
      <p>
        Please let us know how we did with your support request.
        All feedback is appreciated to help us improve our offering!
      </p>

      <div className="numbers">
        {[1, 2, 3, 4, 5].map((num) => (
          <button
            key={num}
            onClick={() => setRating(num)}
            className={rating === num ? "selected" : ""}
          >
            {num}
          </button>
        ))}
      </div>

      <button
        className="submit"
        onClick={() => {
          if (rating !== null) setSubmitted(true);
          else alert("Please select a rating!");
        }}
      >
        Submit
      </button>
    </div>
  );
}

export default RatingCard;

RatingCard.propTypes = {
  rating: PropTypes.number,
  setRating: PropTypes.func.isRequired,
  setSubmitted: PropTypes.func.isRequired
};
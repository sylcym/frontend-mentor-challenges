
import { useState } from "react";
import RatingCard from "./components/RatingCard";
import ThankYouCard from "./components/ThankYouCard";

function App() {
  const [rating, setRating] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  return (
    <div>
      {submitted ? (
        <ThankYouCard rating={rating} />
      ) : (
        <RatingCard
          rating={rating}
          setRating={setRating}
          setSubmitted={setSubmitted}
        />
      )}
    </div>
  );
}

export default App;

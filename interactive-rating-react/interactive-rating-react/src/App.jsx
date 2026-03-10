import { useState } from "react";
import RatingCard from "./components/RatingCard";
import ThankYouCard from "./components/ThankYouCard";

function App() {
  const [rating, setRating] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="app">
      <div className="card-animation">
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
      <div className="attribution">
        Challenge by{" "}
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          rel="noreferrer"
        >
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a
          href=""
          target="_blank"
          rel="noreferrer"
        >
          Sylwia
        </a>
        .
      </div>
    </div>
  );
}

export default App;
// import { useState } from "react";
// import RatingCard from "./components/RatingCard";
// import ThankYouCard from "./components/ThankYouCard";

// function App() {
//   const [rating, setRating] = useState(null);
//   const [submitted, setSubmitted] = useState(false);

//   return (
//     <div>
//       {submitted ? (
//         <ThankYouCard rating={rating} />
//       ) : (
//         <RatingCard
//           rating={rating}
//           setRating={setRating}
//           setSubmitted={setSubmitted}
//         />
//       )}
//     </div>
//   );
// }

// export default App;

import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./CountryCard.css";

function CountryCard({ country }) {
  const {
    flags: { svg },
    name: { common },
    population,
    region,
    capital,
  } = country;

  return (
    <Link to={`/country/${common.toLowerCase()}`}>
      <article className="country-card">
        <img
          className="country-card-image"
          src={svg}
          alt={common}
        />

        <div className="country-card-content">
          <h2 className="country-card-title">
            {common}
          </h2>

          <div className="country-card-details">
            <p className="country-card-info">
              <strong>Population:</strong> {population.toLocaleString("en-US")}
            </p>

            <p className="country-card-info">
              <strong>Region:</strong> {region}
            </p>

            <p className="country-card-info">
              <strong>Capital:</strong> {capital?.[0] ?? "No capital"}
            </p>
          </div>
        </div>
      </article>
    </Link>
  );
}

CountryCard.propTypes = {
  country: PropTypes.object.isRequired,
};

export default CountryCard;
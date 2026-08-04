import PropTypes from "prop-types";
import "./CountryCard.css";

function CountryCard({
  flag,
  name,
  population,
  region,
  capital,
}) {
  return (
    <article className="country-card">
      <img
        className="country-card-image"
        src={flag}
        alt={name}
      />

      <div className="country-card-content">
        <h2 className="country-card-title">
          {name}
        </h2>

        <div className="country-card-details">
          <p className="country-card-info">
            <strong>Population:</strong> {population.toLocaleString("en-US")}
          </p>

          <p className="country-card-info">
            <strong>Region:</strong> {region}
          </p>

          <p className="country-card-info">
            <strong>Capital:</strong> {capital}
          </p>
        </div>
      </div>
    </article>
  );
}

CountryCard.propTypes = {
  flag: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  population: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]).isRequired,
  region: PropTypes.string.isRequired,
  capital: PropTypes.string.isRequired,
};

export default CountryCard;
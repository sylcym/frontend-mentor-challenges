import PropTypes from "prop-types";
import CountryCard from "../CountryCard/CountryCard";
import "./CountriesGrid.css";

function CountriesGrid({ countries }) {
  return (
    <section className="countries-grid">
      {countries.map((country) => (
        <CountryCard
          key={country.cca3}
          flag={country.flags.svg}
          name={country.name}
          population={country.population}
          region={country.region}
          capital={country.capital}
        />
      ))}
    </section>
  );
}

CountriesGrid.propTypes = {
  countries: PropTypes.arrayOf(
    PropTypes.shape({
      flag: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      population: PropTypes.number.isRequired,
      region: PropTypes.string.isRequired,
      capital: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default CountriesGrid;
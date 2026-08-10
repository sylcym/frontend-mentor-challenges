import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { getCountryByName } from "../../api/countriesApi.js";
import Header from "../../components/Header/Header";
import "./CountryDetails.css"

function CountryDetails({ countries }) {
  // console.log(countries[0])
  const [country, setCountry] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const { name } = useParams();
  const navigate = useNavigate();


  useEffect(() => {
    async function fetchCountry() {
      try {
        const data = await getCountryByName(name);

        setCountry(data[0]);
      } catch (error) {
        setError(error.message || "Something went wrong.");
      } finally {
        setLoading(false);
      }
    }

    fetchCountry();
  }, [name]);

  if (loading) return <p>Loading...</p>;

  if (error) return <p>{error}</p>;

  if (!country) return null;

  const nativeName = country.name.nativeName
    ? Object.values(country.name.nativeName)[0]
    : null;

  const borderCountries = countries.filter((item) =>
    country.borders.includes(item.cca3)
  );

  return (
    <>
      <Header />
      <main className="country-details-page">
        <div className="container">

          <button
            className="back-button"
            type="button"
            onClick={() => navigate(-1)}
          >
            Back
          </button>

          <section className="country-details">

            <div className="country-image">
              <img
                src={country.flags.svg}
                alt={country.name.common}
              />
            </div>

            <div className="country-content">

              <h1 className="country-title">
                {country.name.common}
              </h1>

              <div className="country-info">

                <div className="country-info-left">
                  <p >
                    <strong>Native Name:</strong> {nativeName?.common ?? "N/A"}
                  </p>

                  <p >
                    <strong>Population:</strong> {country.population.toLocaleString("en-US")}
                  </p>

                  <p>
                    <strong>Region:</strong> {country.region}
                  </p>

                  <p>
                    <strong>Sub Region:</strong> {country.subregion}
                  </p>

                  <p>
                    <strong>Capital:</strong> {country.capital?.[0] ?? "No capital"}
                  </p>
                </div>

                <div className="country-info-right">
                  <p>
                    <strong>Top Level Domain:</strong> {country.tld?.[0] ?? "N/A"}
                  </p>

                  <p>
                    <strong>Currencies:</strong>{" "}
                    {Object.values(country.currencies)[0].name}
                  </p>

                  <p>
                    <strong>Languages:</strong>{" "}
                    {Object.values(country.languages)[0]}
                  </p>
                </div>

              </div>

              <div className="border-countries">
                <h2 className="border-countries-title">
                  Border Countries:
                </h2>

                <div className="border-countries-list">
                  {borderCountries.map((item) => (
                    <Link
                      className="border-country"
                      key={item.cca3}
                      to={`/country/${item.name.common}`}
                    >
                      {item.name.common}
                    </Link>
                  ))}
                </div>
              </div>

            </div>

          </section>

        </div>
      </main>
    </>
  );
}

CountryDetails.propTypes = {
  countries: PropTypes.array.isRequired,
};

export default CountryDetails;
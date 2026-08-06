import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getCountryByName } from "../../api/countriesApi.js";

function CountryDetails() {
  const [country, setCountry] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const { name } = useParams();
  const navigate = useNavigate();
  console.log(country);


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

  return (
    <>
      <main className="country-details-page">
        <div className="container">

          <button
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

              <h1>{country.name.common}</h1>

              <div className="country-info">

                <div className="country-info-left">
                  <p>
                    <strong>Native Name:</strong> {nativeName?.common ?? "N/A"}
                  </p>

                  <p>
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

              </div>

            </div>

          </section>

        </div>
      </main>
    </>
  );
}

export default CountryDetails;
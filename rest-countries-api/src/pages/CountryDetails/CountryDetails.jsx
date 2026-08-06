import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getCountryByName } from "../../api/countriesApi.js";

function CountryDetails() {
  const [country, setCountry] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const { name } = useParams();



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


  return (
    <>
      <h1>Country Details</h1>

      <p>{country.name.common}</p>
      <p>{country.population}</p>
      <p>{country.region}</p>
    </>
  );
}

export default CountryDetails;
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Home from "./pages/Home/Home";
import CountryDetails from "./pages/CountryDetails/CountryDetails";
import { getCountries } from "./api/countriesApi";

function App() {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchCountries() {
      try {
        const data = await getCountries();

        setCountries(data);
      } catch (error) {
        setError(error.message || "Something went wrong.");
      } finally {
        setLoading(false);
      }
    }

    fetchCountries();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Home
            countries={countries}
            loading={loading}
            error={error}
          />
        }
      />
      <Route
        path="/country/:name"
        element={<CountryDetails />}
      />
    </Routes>
  );
}

export default App;
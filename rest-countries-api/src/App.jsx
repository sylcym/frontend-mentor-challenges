import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Home from "./pages/Home/Home";
import CountryDetails from "./pages/CountryDetails/CountryDetails";
import { getCountries } from "./api/countriesApi";

function App() {
  const [darkMode, setDarkMode] = useState(false);
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

  useEffect(() => {
    document.body.classList.toggle("dark-mode", darkMode);
  }, [darkMode]);

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
            darkMode={darkMode}
            setDarkMode={setDarkMode}
          />
        }
      />
      <Route
        path="/country/:code"
        element={
          <CountryDetails
            countries={countries}
            darkMode={darkMode}
            setDarkMode={setDarkMode}
          />
        }
      />
    </Routes>
  );
}

export default App;
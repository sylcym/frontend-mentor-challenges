import { useEffect, useState } from "react";
import { getCountries } from "../api/countriesApi";
import Header from "../components/Header/Header";
import SearchBar from "../components/SearchBar/SearchBar";
import Filter from "../components/Filter/Filter"
// import countries from "../data/countries";
import CountriesGrid from "../components/CountriesGrid/CountriesGrid";
import "./Home.css"

function Home() {
  const [countries, setCountries] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const filteredCountries = countries.filter((country) =>
    country.name.common
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );


  useEffect(() => {
    async function fetchCountries() {
      try {
        const data = await getCountries();

        setCountries(data);
      } catch (error) {
        setError(error.message);
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
    <>
      <Header />

      <main className="home">
        <div className="container">
          <section className="home-toolbar">
            <SearchBar
              searchTerm={searchTerm}
              onSearchChange={setSearchTerm}
            />
            <Filter />
          </section>

          {/* <CountriesGrid countries={countries} /> */}
          <CountriesGrid countries={filteredCountries} />
        </div>
      </main>
    </>
  );
}

export default Home;
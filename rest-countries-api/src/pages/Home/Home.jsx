import { useState } from "react";
import PropTypes from "prop-types";
import Header from "../../components/Header/Header";
import SearchBar from "../../components/SearchBar/SearchBar";
import Filter from "../../components/Filter/Filter"
// import countries from "../data/countries";
import CountriesGrid from "../../components/CountriesGrid/CountriesGrid";
import "./Home.css"

function Home({
  countries,
  loading,
  error,
  darkMode,
  setDarkMode
}) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");

  const filteredCountries = countries.filter((country) => {
    const matchesSearch = country.name.common
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesRegion =
      selectedRegion === "" || country.region === selectedRegion;

    return matchesSearch && matchesRegion;
  });


  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }


  return (
    <>
      <Header
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      <main className="home">
        <div className="container">
          <section className="home-toolbar">
            <SearchBar
              searchTerm={searchTerm}
              onSearchChange={setSearchTerm}
            />
            <Filter
              selectedRegion={selectedRegion}
              onRegionChange={setSelectedRegion}
            />
          </section>
          {/* <CountriesGrid countries={filteredCountries} /> */}
          {filteredCountries.length > 0 ? (
            <CountriesGrid countries={filteredCountries} />
          ) : (
            <h2 className="no-results">No countries found.</h2>
          )}
        </div>
      </main>
    </>
  );
}

Home.propTypes = {
  countries: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
  darkMode: PropTypes.bool.isRequired,
  setDarkMode: PropTypes.func.isRequired,
};

export default Home;
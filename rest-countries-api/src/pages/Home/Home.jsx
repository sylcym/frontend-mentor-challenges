import { useState } from "react";
import PropTypes from "prop-types";
import Header from "../../components/Header/Header";
import SearchBar from "../../components/SearchBar/SearchBar";
import Filter from "../../components/Filter/Filter"
import CountriesGrid from "../../components/CountriesGrid/CountriesGrid";
import Footer from "../../components/Footer/Footer";
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
          {filteredCountries.length > 0 ? (
            <CountriesGrid countries={filteredCountries} />
          ) : (
            <h2 className="no-results">No countries found.</h2>
          )}
        </div>
      </main>

      <Footer />
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
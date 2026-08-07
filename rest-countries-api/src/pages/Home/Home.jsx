import { useState } from "react";
import PropTypes from "prop-types";
import Header from "../../components/Header/Header";
import SearchBar from "../../components/SearchBar/SearchBar";
import Filter from "../../components/Filter/Filter"
// import countries from "../data/countries";
import CountriesGrid from "../../components/CountriesGrid/CountriesGrid";
import "./Home.css"

function Home({ countries, loading, error }) {
  // const [countries, setCountries] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState("");

  // const filteredCountries = countries.filter((country) =>
  //   country.name.common
  //     .toLowerCase()
  //     .includes(searchTerm.toLowerCase())
  // );
  const filteredCountries = countries.filter((country) => {
    const matchesSearch = country.name.common
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesRegion =
      selectedRegion === "" || country.region === selectedRegion;

    return matchesSearch && matchesRegion;
  });


  // useEffect(() => {
  //   async function fetchCountries() {
  //     try {
  //       const data = await getCountries();

  //       setCountries(data);
  //     } catch (error) {
  //       setError(error.message || "Something went wrong.");
  //     } finally {
  //       setLoading(false);
  //     }
  //   }

  //   fetchCountries();
  // }, []);

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
            <Filter
              selectedRegion={selectedRegion}
              onRegionChange={setSelectedRegion}
            />
          </section>
          <CountriesGrid countries={filteredCountries} />
        </div>
      </main>
    </>
  );
}

Home.propTypes = {
  countries: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,
};

export default Home;
import Header from "../components/Header/Header";
import SearchBar from "../components/SearchBar/SearchBar";
import Filter from "../components/Filter/Filter"
import countries from "../data/countries";
import CountriesGrid from "../components/CountriesGrid/CountriesGrid";

function Home() {
  return (
    <>
      <Header />
      <SearchBar />
      <Filter />
      <CountriesGrid countries={countries} />
    </>
  );
}

export default Home;
import Header from "../components/Header/Header";
import SearchBar from "../components/SearchBar/SearchBar";
import Filter from "../components/Filter/Filter"
import countries from "../data/countries";
import CountriesGrid from "../components/CountriesGrid/CountriesGrid";
import "./Home.css"

function Home() {
  return (
    <main className="home">
      <Header />

      <section className="home-toolbar">
        <SearchBar />
        <Filter />
      </section>

      <CountriesGrid countries={countries} />
    </main>
  );
}

export default Home;
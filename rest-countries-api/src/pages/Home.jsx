import Header from "../components/Header/Header";
import SearchBar from "../components/SearchBar/SearchBar";
import Filter from "../components/Filter/Filter"
import countries from "../data/countries";
import CountriesGrid from "../components/CountriesGrid/CountriesGrid";
import "./Home.css"

function Home() {
  return (
    <>
      <Header />

      <main className="home">
        <div className="container">
          <section className="home-toolbar">
            <SearchBar />
            <Filter />
          </section>

          <CountriesGrid countries={countries} />
        </div>
      </main>
    </>
  );
}

export default Home;
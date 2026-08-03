import Header from "../components/Header/Header";
import SearchBar from "../components/SearchBar/SearchBar";
import Filter from "../components/Filter/Filter"
import CountryCard from "../components/CountryCard/CountryCard";

function Home() {
  return (
    <>
      <Header />
      <SearchBar />
      <Filter />
      <CountryCard
        flag="https://flagcdn.com/w320/de.png"
        name="Germany"
        population={81770900}
        region="Europe"
        capital="Berlin"
      />
    </>
  );
}

export default Home;
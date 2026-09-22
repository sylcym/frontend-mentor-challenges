import Header from "../components/Header"
import SearchBar from "../components/SearchBar"
import InfoPanel from "../components/InfoPanel"
import Map from "../components/Map"
import "./Home.css"

function Home() {
  return (
    <main className="home">
      <Header />

      <section className="tracker-content">
        <SearchBar />
        <InfoPanel />
      </section>
      <Map />
    </main>
  )
}
export default Home
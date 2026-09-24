import { useEffect, useState } from "react"
import Header from "../components/Header"
import SearchBar from "../components/SearchBar"
import InfoPanel from "../components/InfoPanel"
import Map from "../components/Map"
import { getIpData } from "../services/ipApi"
import "./Home.css"

function Home() {
  const [ipData, setIpData] = useState(null)

  useEffect(() => {
    async function fetchIpData() {
      const data = await getIpData()

      setIpData(data)
    }

    fetchIpData()
  }, [])

  function handleSearch(searchValue) {
    console.log(searchValue)
  }

  return (
    <main className="home">
      <Header />

      <section className="tracker-content">
        <SearchBar onSearch={handleSearch} />
        {ipData && <InfoPanel ipData={ipData} />}
      </section>
      <Map />
    </main>
  )
}
export default Home
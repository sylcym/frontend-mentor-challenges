import { useEffect, useState } from "react"
import Header from "../components/Header"
import SearchBar from "../components/SearchBar"
import InfoPanel from "../components/InfoPanel"
import Map from "../components/Map"
import { getIpData } from "../services/ipApi"
import Attribution from "../components/Attribution"
import "./Home.css"

function Home() {
  const [ipData, setIpData] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  useEffect(() => {
    async function fetchIpData() {
      setIsLoading(true)
      setError("")

      try {
        const data = await getIpData("8.8.8.8")
        setIpData(data)
      } catch (error) {
        setError(error.message)
      } finally {
        setIsLoading(false)
      }
    }

    fetchIpData()
  }, [])

  async function handleSearch(searchValue) {
    setIsLoading(true)
    setError("")

    try {
      const data = await getIpData(searchValue)
      setIpData(data)
    } catch (error) {
      setError(error.message)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <main className="home">
      <Header />

      <section className="tracker-content">
        <SearchBar onSearch={handleSearch} />

        {isLoading && (
          <p className="status-message">Loading...</p>
        )}

        {error && (
          <p className="status-message status-error">{error}</p>
        )}

        {ipData && !isLoading && !error && (
          <InfoPanel ipData={ipData} />
        )}
      </section>

      {ipData && <Map ipData={ipData} />}
      <Attribution />
    </main>
  )
}

export default Home
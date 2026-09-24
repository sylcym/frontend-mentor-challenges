const BASE_URL = "https://geo.ipify.org/api/v2/country,city"

const API_KEY = import.meta.env.VITE_IPIFY_API_KEY

async function getIpData(ipAddress) {
  const response = await fetch(
    `${BASE_URL}?apiKey=${API_KEY}&ipAddress=${ipAddress}`
  )

  if (!response.ok) {
    throw new Error("Failed to fetch IP data.")
  }

  const data = await response.json()

  return data
}

export { getIpData }
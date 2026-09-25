const BASE_URL = "https://geo.ipify.org/api/v2/country,city"

const API_KEY = import.meta.env.VITE_IPIFY_API_KEY

async function getIpData(searchValue) {
  const isIpAddress = /^\d{1,3}(\.\d{1,3}){3}$/.test(searchValue)

  const parameter = isIpAddress ? "ipAddress" : "domain"

  const response = await fetch(
    `${BASE_URL}?apiKey=${API_KEY}&${parameter}=${searchValue}`
  )

  if (!response.ok) {
    throw new Error("Failed to fetch IP data.")
  }

  const data = await response.json()

  return data
}

export { getIpData }
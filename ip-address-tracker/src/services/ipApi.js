const BASE_URL = "https://geo.ipify.org/api/v2/country,city"

const API_KEY = import.meta.env.VITE_IPIFY_API_KEY

function isValidIpAddress(value) {
  const parts = value.split(".")

  if (parts.length !== 4) {
    return false
  }

  return parts.every((part) => {
    const number = Number(part)

    return (
      part !== "" &&
      /^\d+$/.test(part) &&
      number >= 0 &&
      number <= 255
    )
  })
}

async function getIpData(searchValue) {
  const isIpAddress = isValidIpAddress(searchValue)

  if (searchValue.includes(".") && !isIpAddress) {
    throw new Error("IP address or domain not found.")
  }

  const parameter = isIpAddress ? "ipAddress" : "domain"

  const response = await fetch(
    `${BASE_URL}?apiKey=${API_KEY}&${parameter}=${searchValue}`
  )

  if (!response.ok) {
    throw new Error("Invalid IP address or domain.")
  }

  const data = await response.json()

  return data
}

export { getIpData }


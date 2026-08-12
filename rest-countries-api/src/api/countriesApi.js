const BASE_URL = "https://restcountries.conventus.de/v3.1";


export async function getCountries() {
  const response = await fetch(
    `${BASE_URL}/all?fields=name,flags,population,region,capital,cca3`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch countries.");
  }

  return await response.json();
}

export async function getCountryByCode(code) {
  const url = `${BASE_URL}/alpha/${code}?fields=name,flags,population,region,subregion,capital,tld,currencies,languages,borders,cca3`;

  console.log("API URL:", url);

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Failed to fetch country.");
  }

  return await response.json();
}
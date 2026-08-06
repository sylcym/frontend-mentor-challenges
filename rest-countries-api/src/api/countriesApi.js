const BASE_URL = "https://restcountries.conventus.de/v3.1";


export async function getCountries() {
  const response = await fetch(
    `${BASE_URL}/all?fields=name,flags,population,region,capital`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch countries.");
  }

  return await response.json();
}

export async function getCountryByName(name) {
  const url = `${BASE_URL}/name/${name}?fields=name,flags,population,region,capital`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Failed to fetch country.");
  }

  return await response.json();
}
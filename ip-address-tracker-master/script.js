var map = L.map('map').setView([51.505, -0.09], 13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

const blackIcon = L.icon({
  iconUrl: './images/icon-location.svg',
  iconSize: [46, 56],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  shadowSize: [41, 41]
});


const API_KEY = config.ACCESS_TOKEN;
const form = document.querySelector(".form");
const input = document.querySelector("#ip-search");

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  const ip = input.value.trim();
  if (!ip) return;

  const url = `https://geo.ipify.org/api/v2/country,city?apiKey=${API_KEY}&ipAddress=${ip}`;

  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error('Error downloading data');

    const data = await res.json();
    updateUI(data);
    updateMap(data.location.lat, data.location.lng);
  } catch (err) {
    alert(err.message);
  }


});

function updateUI(data) {
  const details = document.querySelectorAll('.details-description');
  if (details.length < 4) return;

  const [ip, location, timezone, isp] = details;
  ip.textContent = data.ip;
  location.textContent = `${data.location.city}, ${data.location.country}`;
  timezone.textContent = data.location.timezone;
  isp.textContent = data.isp;

  console.log(ip, location, timezone, isp)
}

// updateUI({
//   ip: "213.25.23.33",
//   location: {
//     city: "Łódź",
//     country: "PL",
//     timezone: "+02:00",
//     lat: 51.7592,
//     lng: 19.4559,
//   },
//   isp: "Play",
// });

window.addEventListener("load", () => {
  fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=${API_KEY}`)
    .then((res) => res.json())
    .then((data) => {
      updateUI(data);
      updateMap(data.location.lat, data.location.lng);
    })
    .catch((err) => {
      console.error(err);
    });
});

let marker;

function updateMap(lat, lng) {
  map.setView([lat, lng], 12);

  if (marker) {
    marker.setLatLng([lat, lng]);
  } else {
    marker = L.marker([lat, lng], { icon: blackIcon }).addTo(map);
  }
}

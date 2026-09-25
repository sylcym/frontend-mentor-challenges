import { MapContainer, TileLayer, Marker } from "react-leaflet"
import "./Map.css"

function Map() {
  const position = [32.69922, -117.11281]

  return (
    <section className="map">
      <MapContainer
        className="map-container"
        center={position}
        zoom={13}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Marker position={position} />
      </MapContainer>
    </section>
  )
}

export default Map
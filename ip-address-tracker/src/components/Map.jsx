import { MapContainer, TileLayer, Marker } from "react-leaflet"
import PropTypes from "prop-types"
import "./Map.css"

function Map({ ipData }) {
  const position = [
    ipData.location.lat,
    ipData.location.lng,
  ]

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

Map.propTypes = {
  ipData: PropTypes.shape({
    location: PropTypes.shape({
      lat: PropTypes.number.isRequired,
      lng: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
}

export default Map
import PropTypes from "prop-types"
import "./InfoPanel.css"

function InfoPanel({ ipData }) {
  console.log(ipData)
  return (
    <section className="info-panel">
      <div className="info-item">
        <p className="info-label">IP Address</p>
        <p className="info-value">{ipData.ip}</p>
      </div>

      <div className="info-item">
        <p className="info-label">Location</p>
        <p className="info-value">
          {ipData.location.city}, {ipData.location.region}
        </p>
      </div>

      <div className="info-item">
        <p className="info-label">Timezone</p>
        <p className="info-value">  {ipData.location.timezone}</p>
      </div>

      <div className="info-item">
        <p className="info-label">ISP</p>
        <p className="info-value">  {ipData.isp}</p>
      </div>
    </section>
  )
}

InfoPanel.propTypes = {
  ipData: PropTypes.shape({
    ip: PropTypes.string.isRequired,

    location: PropTypes.shape({
      city: PropTypes.string.isRequired,
      region: PropTypes.string.isRequired,
      timezone: PropTypes.string.isRequired,
      lat: PropTypes.number.isRequired,
      lng: PropTypes.number.isRequired,
    }).isRequired,

    isp: PropTypes.string.isRequired,
  }).isRequired,
}

export default InfoPanel
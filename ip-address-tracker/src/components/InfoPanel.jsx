import "./InfoPanel.css"

function InfoPanel() {
  return (
    <section className="info-panel">
      <div className="info-item">
        <p className="info-label">IP Address</p>
        <p className="info-value">8.8.8.8</p>
      </div>

      <div className="info-item">
        <p className="info-label">Location</p>
        <p className="info-value">Mountain View, CA</p>
      </div>

      <div className="info-item">
        <p className="info-label">Timezone</p>
        <p className="info-value">UTC -07:00</p>
      </div>

      <div className="info-item">
        <p className="info-label">ISP</p>
        <p className="info-value">Google LLC</p>
      </div>
    </section>
  )
}

export default InfoPanel
import PropTypes from 'prop-types'

function BillFromSection({
  formData,
  handleChange,
}) {
  return (
    <section className="form-section">
      <h3 className="section-title">
        Bill From
      </h3>

      <div className="form-group">
        <label className="form-label">
          Street Address
        </label>

        <input
          className="form-input"
          type="text"
          name="street"
          value={formData.street}
          onChange={handleChange}
        />
      </div>

      <div className="form-row">
        <div className="form-group">
          <label className="form-label">
            City
          </label>

          <input
            className="form-input"
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label className="form-label">
            Post Code
          </label>

          <input
            className="form-input"
            type="text"
            name="postCode"
            value={formData.postCode}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="form-group">
        <label className="form-label">
          Country
        </label>

        <input
          className="form-input"
          type="text"
          name="country"
          value={formData.country}
          onChange={handleChange}
        />
      </div>
    </section>
  )
}

BillFromSection.propTypes = {
  formData: PropTypes.object,
  handleChange: PropTypes.func,
}

export default BillFromSection
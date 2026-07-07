import PropTypes from 'prop-types'

function BillFromSection({ formData, handleChange }) {
  return (
    <section className="form-section">
      <h3 className="section-title">Bill From</h3>

      <div className="form-group">
        <label>Street Address</label>
        <input
          name="street"
          value={formData.street}
          onChange={handleChange}
        />
      </div>

      <div className="form-row">
        <input
          name="city"
          value={formData.city}
          onChange={handleChange}
          placeholder="City"
        />

        <input
          name="postCode"
          value={formData.postCode}
          onChange={handleChange}
          placeholder="Post Code"
        />
      </div>

      <input
        name="country"
        value={formData.country}
        onChange={handleChange}
      />
    </section>
  )
}

BillFromSection.propTypes = {
  formData: PropTypes.object,
  handleChange: PropTypes.func,
}

export default BillFromSection
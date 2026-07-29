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
        <label
          htmlFor="senderStreet"
          className="form-label"
        >
          Street Address
        </label>

        <input
          id="senderStreet"
          className="form-input"
          type="text"
          name="street"
          value={formData.street}
          onChange={handleChange}
        />
      </div>

      <div className="form-row form-row-three">

        <div className="form-group">
          <label
            htmlFor="senderCity"
            className="form-label"
          >
            City
          </label>

          <input
            id="senderCity"
            className="form-input"
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label
            htmlFor="senderPostCode"
            className="form-label"
          >
            Post Code
          </label>

          <input
            id="senderPostCode"
            className="form-input"
            type="text"
            name="postCode"
            value={formData.postCode}
            onChange={handleChange}
          />
        </div>

        <div className="form-group country-group">
          <label
            htmlFor="senderCountry"
            className="form-label"
          >
            Country
          </label>

          <input
            id="senderCountry"
            className="form-input"
            type="text"
            name="country"
            value={formData.country}
            onChange={handleChange}
          />
        </div>

      </div>
    </section>

  )
}

BillFromSection.propTypes = {
  formData: PropTypes.object,
  handleChange: PropTypes.func,
}

export default BillFromSection
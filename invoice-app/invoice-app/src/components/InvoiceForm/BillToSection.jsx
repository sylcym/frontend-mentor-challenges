import PropTypes from 'prop-types'

function BillToSection({
  formData,
  handleChange,
  errors,
}) {
  return (
    <section className="form-section">
      <h3 className="section-title">
        Bill To
      </h3>

      <div className="form-group">
        <label className="form-label">
          Client Name
        </label>

        <input
          className="form-input"
          type="text"
          name="clientName"
          placeholder="Client Name"
          value={formData.clientName}
          onChange={handleChange}
        />

        {errors.clientName && (
          <p className="error-message">
            {errors.clientName}
          </p>
        )}
      </div>

      <div className="form-group">
        <label className="form-label">
          Client Email
        </label>

        <input
          className="form-input"
          type="email"
          name="clientEmail"
          placeholder="Client Email"
          value={formData.clientEmail}
          onChange={handleChange}
        />

        {errors.clientEmail && (
          <p className="error-message">
            {errors.clientEmail}
          </p>
        )}
      </div>

      <div className="form-group">
        <label className="form-label">
          Street Address
        </label>

        <input
          className="form-input"
          type="text"
          name="clientStreet"
          placeholder="Street Address"
          value={formData.clientStreet}
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
            name="clientCity"
            placeholder="City"
            value={formData.clientCity}
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
            name="clientPostCode"
            placeholder="Post Code"
            value={formData.clientPostCode}
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
          name="clientCountry"
          placeholder="Country"
          value={formData.clientCountry}
          onChange={handleChange}
        />
      </div>
    </section>
  )
}
BillToSection.propTypes = {
  formData: PropTypes.object,
  handleChange: PropTypes.func,
  errors: PropTypes.object,
}
export default BillToSection
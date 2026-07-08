import PropTypes from 'prop-types'

function InvoiceDetailsSection({
  formData,
  handleChange,
}) {
  return (
    <section className="form-section">
      <div className="form-group">
        <label className="form-label">
          Invoice Date
        </label>

        <input
          className="form-input"
          type="date"
          name="invoiceDate"
          value={formData.invoiceDate}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label className="form-label">
          Payment Terms
        </label>

        <select
          className="form-input"
          name="paymentTerms"
          value={formData.paymentTerms}
          onChange={handleChange}
        >
          <option value="1">Net 1 Day</option>
          <option value="7">Net 7 Days</option>
          <option value="14">Net 14 Days</option>
          <option value="30">Net 30 Days</option>
        </select>
      </div>

      <div className="form-group">
        <label className="form-label">
          Project Description
        </label>

        <input
          className="form-input"
          type="text"
          name="projectDescription"
          value={formData.projectDescription}
          onChange={handleChange}
          placeholder="e.g. Graphic Design Service"
        />
      </div>
    </section>
  )
}

InvoiceDetailsSection.propTypes = {
  formData: PropTypes.object,
  handleChange: PropTypes.func,
}

export default InvoiceDetailsSection
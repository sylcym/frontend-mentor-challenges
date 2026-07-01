import { useState } from 'react'
import PropTypes from 'prop-types'
import '../styles/InvoiceForm.css'

function InvoiceForm({ setShowInvoiceForm }) {
  const [formData, setFormData] = useState({
    street: '',
    city: '',
    postCode: '',
    country: '',
    clientName: '',
    clientEmail: '',
    clientStreet: '',
    clientCity: '',
    clientPostCode: '',
    clientCountry: '',
    invoiceDate: '',
    paymentTerms: '30',
    projectDescription: '',
  })

  function handleChange(e) {
    const { name, value } = e.target

    setFormData((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <>
      <div
        className="overlay"
        onClick={() => setShowInvoiceForm(false)}
      ></div>

      <aside className="invoice-form">
        <button
          className="close-button"
          onClick={() => setShowInvoiceForm(false)}
        >
          Close
        </button>

        <h2 className="form-title">
          New Invoice
        </h2>

        <form className="invoice-form-content">
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
                value={formData.clientName}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label className="form-label">
                Client Email
              </label>

              <input
                className="form-input"
                type="email"
                name="clientEmail"
                value={formData.clientEmail}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label className="form-label">
                Street Address
              </label>

              <input
                className="form-input"
                type="text"
                name="clientStreet"
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
                value={formData.clientCountry}
                onChange={handleChange}
              />
            </div>
          </section>

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
                <option value="1">
                  Net 1 Day
                </option>

                <option value="7">
                  Net 7 Days
                </option>

                <option value="14">
                  Net 14 Days
                </option>

                <option value="30">
                  Net 30 Days
                </option>
              </select>
            </div>
          </section>

          <section className="form-section">
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
        </form>
      </aside>
    </>
  )
}

InvoiceForm.propTypes = {
  setShowInvoiceForm: PropTypes.func,
}

export default InvoiceForm
import PropTypes from 'prop-types'

import '../styles/InvoiceForm.css'

function InvoiceForm({ setShowInvoiceForm }) {
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
              />
            </div>

            <div className="form-group">
              <label className="form-label">
                City
              </label>

              <input
                className="form-input"
                type="text"
              />
            </div>

            <div className="form-group">
              <label className="form-label">
                Post Code
              </label>

              <input
                className="form-input"
                type="text"
              />
            </div>

            <div className="form-group">
              <label className="form-label">
                Country
              </label>

              <input
                className="form-input"
                type="text"
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
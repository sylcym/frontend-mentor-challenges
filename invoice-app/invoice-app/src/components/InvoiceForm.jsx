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
      </aside>
    </>
  )
}

InvoiceForm.propTypes = {
  setShowInvoiceForm: PropTypes.func,
}

export default InvoiceForm
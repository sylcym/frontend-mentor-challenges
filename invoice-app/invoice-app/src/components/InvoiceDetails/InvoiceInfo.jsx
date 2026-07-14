import PropTypes from 'prop-types'
import '../../styles/InvoiceInfo.css'

function InvoiceInfo({ invoice }) {
  return (
    <section className="invoice-info">

      <div className="invoice-dates">

        <div>
          <p className="section-label">
            Invoice Date
          </p>

          <h3>
            {invoice.dueDate}
          </h3>
        </div>

        <div>
          <p className="section-label">
            Payment Due
          </p>

          <h3>
            {invoice.dueDate}
          </h3>
        </div>

      </div>

      <div className="bill-to-section">
        <p className="section-label">
          Bill To
        </p>

        <h3>
          {invoice.client}
        </h3>

        <p>{invoice.clientAddress.street}</p>
        <p>{invoice.clientAddress.city}</p>
        <p>{invoice.clientAddress.postCode}</p>
        <p>{invoice.clientAddress.country}</p>
      </div>

      <div className="send-to-section">
        <p className="section-label">
          Send To
        </p>

        <p>
          {invoice.clientAddress.email}
        </p>
      </div>

    </section>
  )
}

InvoiceInfo.propTypes = {
  invoice: PropTypes.object,
}

export default InvoiceInfo
import PropTypes from 'prop-types'

function InvoiceInfo({ invoice }) {
  return (
    <section className="invoice-info">

      <div className="sender-address">
        <p>
          {invoice.senderAddress.street}
        </p>

        <p>
          {invoice.senderAddress.city}
        </p>

        <p>
          {invoice.senderAddress.postCode}
        </p>

        <p>
          {invoice.senderAddress.country}
        </p>
      </div>


      <div className="bill-to-section">
        <p className="section-label">
          Bill To
        </p>

        <h3>
          {invoice.client}
        </h3>

        <p>
          {invoice.clientAddress.email}
        </p>

        <p>
          {invoice.clientAddress.street}
        </p>

        <p>
          {invoice.clientAddress.city}
        </p>

        <p>
          {invoice.clientAddress.postCode}
        </p>

        <p>
          {invoice.clientAddress.country}
        </p>
      </div>


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

    </section>
  )
}

InvoiceInfo.propTypes = {
  invoice: PropTypes.object,
}

export default InvoiceInfo
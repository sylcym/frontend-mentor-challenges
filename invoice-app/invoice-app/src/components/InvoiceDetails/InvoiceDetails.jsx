import PropTypes from 'prop-types'
import StatusBadge from './StatusBadge'
import ActionButtons from './ActionButtons'
import InvoiceItemsTable from './InvoiceItemsTable'
import InvoiceInfo from './InvoiceInfo'

function InvoiceDetails({
  invoice,
  onGoBack,
}) {
  return (
    <section className="invoice-details">

      <button
        className="go-back-button"
        onClick={onGoBack}
      >
        ← Go back
      </button>


      <div className="invoice-details-header">

        <div className="invoice-details-title">
          <h2>
            #{invoice.id}
          </h2>

          <p>
            {invoice.projectDescription}
          </p>
        </div>


        <div className="invoice-details-status">
          <p>
            Status
          </p>

          <StatusBadge
            status={invoice.status}
          />
        </div>

        <InvoiceInfo
          invoice={invoice}
        />

        {/* <div className="sender-address">
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

        </div> */}
        <InvoiceItemsTable
          items={invoice.items}
        />

      </div>


      <ActionButtons
        onEdit={() => console.log('edit')}
        onDelete={() => console.log('delete')}
        onMarkPaid={() => console.log('paid')}
      />


    </section>
  )
}


InvoiceDetails.propTypes = {
  invoice: PropTypes.object,
  onGoBack: PropTypes.func,
}


export default InvoiceDetails
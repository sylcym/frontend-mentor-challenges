import PropTypes from 'prop-types'
import StatusBadge from './StatusBadge'
import ActionButtons from './ActionButtons'

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
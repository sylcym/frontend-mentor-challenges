import PropTypes from 'prop-types'
import '../styles/InvoiceCard.css'

function InvoiceCard({
  id,
  client,
  dueDate,
  total,
  status,
}) {
  return (
    <article className="invoice-card">
      <div className="invoice-card-top">
        <h2 className="invoice-id">
          {id}
        </h2>

        <p className="invoice-client">
          {client}
        </p>
      </div>

      <p className="invoice-date">
        Due {dueDate}
      </p>

      <p className="invoice-price">
        {total}
      </p>

      <div className={`invoice-status ${status.toLowerCase()}`}>
        {status}
      </div>
    </article>
  )
}

InvoiceCard.propTypes = {
  id: PropTypes.string,
  client: PropTypes.string,
  dueDate: PropTypes.string,
  total: PropTypes.string,
  status: PropTypes.string,
}

export default InvoiceCard
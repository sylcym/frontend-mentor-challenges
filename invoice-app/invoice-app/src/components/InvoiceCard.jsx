import PropTypes from 'prop-types'
import ArrowRight from '../assets/icons/icon-arrow-right.svg'
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
          #{id}
        </h2>

        <p className="invoice-client">
          {client}
        </p>
      </div>

      <div className="invoice-card-middle">
        <div>
          <p className="invoice-date">
            Due {dueDate}
          </p>

          <p className="invoice-price">
            £ {Number(total).toFixed(2)}
          </p>
        </div>

        <div className={`invoice-status ${status.toLowerCase()}`}>
          {status}
        </div>
      </div>

      <img
        src={ArrowRight}
        alt=""
        className="invoice-arrow"
      />
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
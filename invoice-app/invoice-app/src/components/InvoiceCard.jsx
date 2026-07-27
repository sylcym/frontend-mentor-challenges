import PropTypes from 'prop-types'
import ArrowRight from '../assets/icons/icon-arrow-right.svg'
import '../styles/InvoiceCard.css'
import { formatCurrency } from '../utils/formatCurrency'
import StatusBadge from './InvoiceDetails/StatusBadge'

function InvoiceCard({
  id,
  client,
  dueDate,
  total,
  status,
  invoice,
  setSelectedInvoice,
}) {
  return (
    <article
      className="invoice-card"
      onClick={() => setSelectedInvoice(invoice)}
    >
      <div className="invoice-card-top">
        <h2 className="invoice-id">
          #{id}
        </h2>

        <p className="invoice-client">
          {client}
        </p>
      </div>

      <div className="invoice-card-middle">

        <div className="invoice-summary">
          <p className="invoice-date">
            Due {dueDate}
          </p>

          <p className="invoice-price">
            {formatCurrency(total)}
          </p>
        </div>

        <StatusBadge
          status={status}
        />

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
  // total: PropTypes.number,
  total: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  status: PropTypes.string,
  invoice: PropTypes.object,
  setSelectedInvoice: PropTypes.func,
}

export default InvoiceCard

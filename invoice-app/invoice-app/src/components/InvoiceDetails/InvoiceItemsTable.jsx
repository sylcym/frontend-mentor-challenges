import PropTypes from 'prop-types'
import '../../styles/InvoiceItemsTable.css'
import { formatCurrency } from '../../utils/formatCurrency'

function InvoiceItemsTable({ items }) {
  const total = items.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  )

  return (
    <section className="invoice-items">

      <div className="items-list">

        {items.map((item, index) => (
          <div
            className="invoice-item-row"
            key={index}
          >

            <div className="item-info">
              <h4>{item.name}</h4>

              <p className="item-details">
                {item.quantity} x {formatCurrency(item.price)}
              </p>
            </div>

            <p className="item-total">
              {formatCurrency(item.quantity * item.price)}
            </p>

          </div>
        ))}

      </div>

      <div className="amount-due">

        <p>Grand Total</p>

        <h3>
          {formatCurrency(total)}
        </h3>

      </div>

    </section>
  )
}

InvoiceItemsTable.propTypes = {
  items: PropTypes.array,
}

export default InvoiceItemsTable
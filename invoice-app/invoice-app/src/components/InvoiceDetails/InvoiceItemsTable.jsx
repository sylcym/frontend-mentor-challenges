import PropTypes from 'prop-types'

function InvoiceItemsTable({
  items,
}) {
  return (
    <section className="invoice-items">

      <div className="items-header">
        <p>
          Item Name
        </p>

        <p>
          Qty.
        </p>

        <p>
          Price
        </p>

        <p>
          Total
        </p>
      </div>


      {items.map((item, index) => (
        <div
          className="invoice-item-row"
          key={index}
        >

          <p>
            {item.name}
          </p>

          <p>
            {item.quantity}
          </p>

          <p>
            £{item.price.toFixed(2)}
          </p>

          <p>
            £{(item.quantity * item.price).toFixed(2)}
          </p>

        </div>
      ))}

    </section>
  )
}


InvoiceItemsTable.propTypes = {
  items: PropTypes.array,
}


export default InvoiceItemsTable
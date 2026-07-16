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

      {/* Mobile */}
      <div className="invoice-items-mobile">

        <div className="items-list">

          {items.map((item) => (
            <div
              className="invoice-item-row"
              key={item.id}
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

        <div className="grand-total">

          <p>Grand Total</p>

          <h3>
            {formatCurrency(total)}
          </h3>

        </div>

      </div>

      {/* Tablet / Desktop */}
      <table className="invoice-items-table">

        <thead>
          <tr>
            <th>Item Name</th>
            <th>QTY.</th>
            <th>Price</th>
            <th>Total</th>
          </tr>
        </thead>

        <tbody>

          {items.map((item) => (
            <tr key={item.id}>

              <td>{item.name}</td>

              <td>{item.quantity}</td>

              <td>{formatCurrency(item.price)}</td>

              <td>{formatCurrency(item.quantity * item.price)}</td>
            </tr>
          ))}

        </tbody>

        <tfoot>
          <tr>
            <td colSpan="3">
              Amount Due
            </td>

            <td>
              {formatCurrency(total)}
            </td>
          </tr>
        </tfoot>

      </table>

    </section >
  )
  //   return (
  //     <section className="invoice-items">

  //       <div className="items-list">

  //         {items.map((item) => (
  //           <div
  //             className="invoice-item-row"
  //             key={item.name}
  //           >

  //             <div className="item-info">
  //               <h4>{item.name}</h4>

  //               <p className="item-details">
  //                 {item.quantity} x {formatCurrency(item.price)}
  //               </p>
  //             </div>

  //             <p className="item-total">
  //               {formatCurrency(item.quantity * item.price)}
  //             </p>

  //           </div>
  //         ))}

  //       </div>

  //       <div className="grand-total">

  //         <p>Grand Total</p>

  //         <h3>
  //           {formatCurrency(total)}
  //         </h3>

  //       </div>

  //     </section>
  //   )
}

InvoiceItemsTable.propTypes = {
  items: PropTypes.array,
}


export default InvoiceItemsTable
import '../styles/InvoiceCard.css'

function InvoiceCard() {
  return (
    <article className="invoice-card">
      <div className="invoice-card-top">
        <h2 className="invoice-id">
          #RT3080
        </h2>

        <p className="invoice-client">
          Jensen Huang
        </p>
      </div>

      <p className="invoice-date">
        Due 19 Aug 2021
      </p>

      <p className="invoice-price">
        £1,800.90
      </p>

      <div className="invoice-status">
        Paid
      </div>
    </article>
  )
}

export default InvoiceCard
import '../styles/EmptyState.css'

function EmptyState() {
  return (
    <section className="empty-state">
      <div className="empty-image"></div>

      <h2 className="empty-title">
        No invoices found
      </h2>

      <p className="empty-description">
        Create a new invoice to get started.
      </p>
    </section>
  )
}

export default EmptyState
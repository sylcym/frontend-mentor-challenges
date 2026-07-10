import EmptyStateImage from '../assets/images/empty-state.svg'
import '../styles/EmptyState.css'

function EmptyState() {
  return (
    <section className="empty-state">
      <img
        src={EmptyStateImage}
        alt=""
        className="empty-image"
      />

      <h2 className="empty-title">
        There is nothing here
      </h2>

      <p className="empty-description">
        Create an invoice by clicking the
        <strong> New Invoice</strong> button and get started.
      </p>
    </section>
  )
}

export default EmptyState
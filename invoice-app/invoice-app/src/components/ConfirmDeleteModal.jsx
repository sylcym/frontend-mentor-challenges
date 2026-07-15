import PropTypes from 'prop-types'
import '../styles/ConfirmDeleteModal.css'

function ConfirmDelete({
  invoiceId,
  onCancel,
  onDelete,
}) {
  return (
    <>
      <div
        className="modal-overlay"
        onClick={onCancel}
      />

      <div className="confirm-delete">

        <h2>Confirm Deletion</h2>

        <p>
          Are you sure you want to delete invoice
          #{invoiceId}? This action cannot be undone.
        </p>

        <div className="confirm-delete-buttons">

          <button
            className="cancel-button"
            onClick={onCancel}
          >
            Cancel
          </button>

          <button
            className="delete-button"
            onClick={onDelete}
          >
            Delete
          </button>

        </div>

      </div>
    </>
  )
}

ConfirmDelete.propTypes = {
  invoiceId: PropTypes.string,
  onCancel: PropTypes.func,
  onDelete: PropTypes.func,
}

export default ConfirmDelete
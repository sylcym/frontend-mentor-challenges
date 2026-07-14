import PropTypes from 'prop-types'
import '../../styles/ActionButtons.css'

function ActionButtons({
  onEdit,
  onDelete,
  onMarkPaid,
}) {
  return (
    <footer className="action-buttons">

      <button
        type="button"
        className="edit-button"
        onClick={onEdit}
      >
        Edit
      </button>

      <button
        type="button"
        className="action-delete-button"
        onClick={onDelete}
      >
        Delete
      </button>

      <button
        type="button"
        className="paid-button"
        onClick={onMarkPaid}
      >
        Mark as Paid
      </button>

    </footer>
  )
}

ActionButtons.propTypes = {
  onEdit: PropTypes.func,
  onDelete: PropTypes.func,
  onMarkPaid: PropTypes.func,
}

export default ActionButtons
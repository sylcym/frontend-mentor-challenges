import PropTypes from 'prop-types'

function ActionButtons({
  onEdit,
  onDelete,
  onMarkPaid,
}) {
  return (
    <div className="action-buttons">

      <button
        type="button"
        className="edit-button"
        onClick={onEdit}
      >
        Edit
      </button>

      <button
        type="button"
        className="delete-button"
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

    </div>
  )
}

ActionButtons.propTypes = {
  onEdit: PropTypes.func,
  onDelete: PropTypes.func,
  onMarkPaid: PropTypes.func,
}

export default ActionButtons
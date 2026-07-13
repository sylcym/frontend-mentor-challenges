import PropTypes from 'prop-types'

function StatusBadge({ status }) {
  return (
    <div className={`invoice-status ${status.toLowerCase()}`}>
      {status}
    </div>
  )
}

StatusBadge.propTypes = {
  status: PropTypes.string,
}

export default StatusBadge
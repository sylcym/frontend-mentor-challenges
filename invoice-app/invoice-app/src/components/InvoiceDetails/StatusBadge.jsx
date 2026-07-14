import PropTypes from 'prop-types'
import '../../styles/StatusBadge.css'

function StatusBadge({ status }) {
  return (
    <div className={`invoice-status ${status.toLowerCase()}`}>
      <span className="status-dot"></span>

      <span>{status}</span>
    </div>
  )
}

StatusBadge.propTypes = {
  status: PropTypes.string,
}

export default StatusBadge
import PropTypes from 'prop-types'

function Input({
  label,
  type,
  name,
  value,
  onChange,
}) {
  return (
    <div className="input-group">
      <label className="input-label">{label}</label>

      <input
        className="input-field"
        type={type}
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  )
}

Input.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
}

export default Input
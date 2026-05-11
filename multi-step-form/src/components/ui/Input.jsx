import PropTypes from 'prop-types'

function Input({
  label,
  type,
  name,
  value,
  onChange,
}) {
  return (
    <div>
      <label>{label}</label>

      <input
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
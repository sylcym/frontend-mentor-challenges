import PropTypes from 'prop-types';
import '../../styles/Input.css';

function Input({
  label,
  type,
  name,
  value,
  onChange,
  placeholder,
  error,
}) {
  return (
    <div className="input-group">
      <label className="input-label">{label}</label>

      <input
        className={
          error
            ? 'input-field input-error'
            : 'input-field'
        }
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />

      {error && (
        <p className="error-message">
          This field is required
        </p>
      )}
    </div>
  )
}

Input.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  error: PropTypes.bool,
}

export default Input
import PropTypes from 'prop-types';
import Input from '../ui/Input';
import '../../styles/step.css';


function StepOne({ formData, setFormData, errors, setErrors }) {
  const handleChange = (event) => {
    const { name, value } = event.target

    setFormData({
      ...formData,
      [name]: value,
    })

    setErrors({
      ...errors,
      [name]: false,
    })
  }


  return (
    <div className="form-step">
      <h1 className="title">Personal info</h1>
      <p className="step-description">
        Please provide your name, email address,
        and phone number.
      </p>
      <Input
        label="Name"
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="e.g. Stephen King"
        error={errors.name}
      />

      <Input
        label="Email Address"
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="e.g. stephenking@lorem.com"
        error={errors.email}
      />

      <Input
        label="Phone Number"
        type="tel"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        placeholder="e.g. +1 234 567 890"
        error={errors.phone}
      />

    </div>
  )
}

StepOne.propTypes = {
  formData: PropTypes.object,
  setFormData: PropTypes.func,
  errors: PropTypes.object,
  setErrors: PropTypes.func,
}

export default StepOne
import PropTypes from 'prop-types';
import Input from '../ui/Input';


function StepOne({ formData, setFormData }) {
  const handleChange = (event) => {
    const { name, value } = event.target

    setFormData({
      ...formData,
      [name]: value,
    })
  }

  return (
    <div>
      <h1>Personal Info</h1>
      <Input
        label="Name"
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
      />

      <Input
        label="Email"
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />

      <Input
        label="Phone"
        type="tel"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
      />

    </div>
  )
}

StepOne.propTypes = {
  formData: PropTypes.object,
  setFormData: PropTypes.func,
}

export default StepOne
import PropTypes from 'prop-types'

function StepFour({ formData }) {
  return (
    <div>
      <h1>Summary</h1>

      <p>Name: {formData.name}</p>

      <p>Email: {formData.email}</p>

      <p>Phone: {formData.phone}</p>

      <p>Plan: {formData.plan}</p>

      <div>
        <h3>Add-ons</h3>

        {formData.addons.map((addon) => (
          <p key={addon}>{addon}</p>
        ))}
      </div>
    </div>
  )
}

StepFour.propTypes = {
  formData: PropTypes.object,
}

export default StepFour

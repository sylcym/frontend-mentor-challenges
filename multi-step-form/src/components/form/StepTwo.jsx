import PropTypes from 'prop-types'

function StepTwo({ formData, setFormData }) {
  const selectPlan = (plan) => {
    setFormData({
      ...formData,
      plan,
    })
  }

  return (
    <div>
      <h1>Select Plan</h1>

      {/* <div onClick={() => selectPlan('arcade')}>
        Arcade
      </div>

      <div onClick={() => selectPlan('advanced')}>
        Advanced
      </div>

      <div onClick={() => selectPlan('pro')}>
        Pro
      </div> */}
      <div
        onClick={() => selectPlan('arcade')}
        className={formData.plan === 'arcade' ? 'plan active' : 'plan'}
      >
        Arcade
      </div>

      <div
        onClick={() => selectPlan('advanced')}
        className={formData.plan === 'advanced' ? 'plan' : 'plan'}
      >
        Advanced
      </div>

      <div
        onClick={() => selectPlan('pro')}
        className={formData.plan === 'pro' ? 'plan active' : 'plan'}
      >
        Pro
      </div>

      <p>Selected: {formData.plan}</p>
    </div>
  )
}

StepTwo.propTypes = {
  formData: PropTypes.object,
  setFormData: PropTypes.func,
}

export default StepTwo
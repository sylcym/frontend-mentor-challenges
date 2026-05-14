import PropTypes from 'prop-types';
import '../../styles/step.css';

function StepTwo({ formData, setFormData }) {
  const selectPlan = (plan) => {
    setFormData({
      ...formData,
      plan,
    })
  }

  return (
    <div className="form-step">
      <h1 className="title">Select your plan</h1>

      <p className="step-description">
        You have the option of monthly or yearly billing.
      </p>

      {/* PLANS */}
      <div className="plans">

        {/* Arcade */}
        <div
          onClick={() => selectPlan('arcade')}
          className={formData.plan === 'arcade' ? 'plan active' : 'plan'}
        >
          <img src="/src/assets/icons/icon-arcade.svg" alt="Arcade" />

          <div>
            <h3>Arcade</h3>
            <p>
              {formData.billing === 'monthly' ? '$9/mo' : '$90/yr'}
            </p>
          </div>
        </div>

        {/* Advanced */}
        <div
          onClick={() => selectPlan('advanced')}
          className={formData.plan === 'advanced' ? 'plan active' : 'plan'}
        >
          <img src="/src/assets/icons/icon-advanced.svg" alt="Advanced" />

          <div>
            <h3>Advanced</h3>
            <p>
              {formData.billing === 'monthly' ? '$12/mo' : '$120/yr'}
            </p>
          </div>
        </div>

        {/* Pro */}
        <div
          onClick={() => selectPlan('pro')}
          className={formData.plan === 'pro' ? 'plan active' : 'plan'}
        >
          <img src="/src/assets/icons/icon-pro.svg" alt="Pro" />

          <div>
            <h3>Pro</h3>
            <p>
              {formData.billing === 'monthly' ? '$15/mo' : '$150/yr'}
            </p>
          </div>
        </div>

      </div>

      {/* TOGGLE */}
      <div className="toggle">
        <span
          className={
            formData.billing === 'monthly'
              ? 'toggle-label active'
              : 'toggle-label'
          }
        >
          Monthly
        </span>

        <label className="switch">
          <input
            type="checkbox"
            checked={formData.billing === 'yearly'}
            onChange={() =>
              setFormData({
                ...formData,
                billing:
                  formData.billing === 'monthly' ? 'yearly' : 'monthly',
              })
            }
          />

          <span className="slider"></span>
        </label>

        <span
          className={
            formData.billing === 'yearly'
              ? 'toggle-label active'
              : 'toggle-label'
          }
        >
          Yearly
        </span>
      </div>
    </div>
  )
}

StepTwo.propTypes = {
  formData: PropTypes.object,
  setFormData: PropTypes.func,
}

export default StepTwo
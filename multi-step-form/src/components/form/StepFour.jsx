import PropTypes from 'prop-types';
import '../../styles/stepFour.css';

function StepFour({ formData }) {
  const planPrices = {
    arcade: {
      monthly: 9,
      yearly: 90,
    },

    advanced: {
      monthly: 12,
      yearly: 120,
    },

    pro: {
      monthly: 15,
      yearly: 150,
    },
  }

  const addonsPrices = {
    'Online service': {
      monthly: 1,
      yearly: 10,
    },

    'Larger storage': {
      monthly: 2,
      yearly: 20,
    },

    'Customizable profile': {
      monthly: 2,
      yearly: 20,
    },
  }

  const billingType = formData.billing

  const planPrice =
    planPrices[formData.plan]?.[billingType] || 0

  const addonsTotal = formData.addons.reduce(
    (total, addon) =>
      total + addonsPrices[addon][billingType],
    0
  )

  const total = planPrice + addonsTotal

  return (
    <div className="form-step">
      <h1 className="title">Finishing up</h1>

      <p className="step-description">
        Double-check everything looks OK before confirming.
      </p>

      <div className="summary">
        <div className="summary-plan">
          <div>
            <h3 className="summary-plan-title">
              {formData.plan} (
              {billingType === 'monthly'
                ? 'Monthly'
                : 'Yearly'}
              )
            </h3>

            <button className="change-btn">
              Change
            </button>
          </div>

          <p className="summary-plan-price">
            ${planPrice}/
            {billingType === 'monthly'
              ? 'mo'
              : 'yr'}
          </p>
        </div>

        <div className="summary-addons">
          {formData.addons.map((addon) => (
            <div
              key={addon}
              className="summary-addon"
            >
              <p className="summary-addon-name">
                {addon}
              </p>

              <span className="summary-addon-price">
                +$
                {addonsPrices[addon][billingType]}/
                {billingType === 'monthly'
                  ? 'mo'
                  : 'yr'}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="summary-total">
        <p className="summary-total-text">
          Total (
          {billingType === 'monthly'
            ? 'per month'
            : 'per year'}
          )
        </p>

        <h2 className="summary-total-price">
          +${total}/
          {billingType === 'monthly'
            ? 'mo'
            : 'yr'}
        </h2>
      </div>
    </div>
  )
}

StepFour.propTypes = {
  formData: PropTypes.object,
}

export default StepFour

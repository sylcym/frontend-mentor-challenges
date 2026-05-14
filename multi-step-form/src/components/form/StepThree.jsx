import PropTypes from 'prop-types';
import '../../styles/stepThree.css';
import checkmarkIcon from '../../assets/icons/icon-checkmark.svg'

function StepThree({ formData, setFormData }) {
  const addonsList = [
    {
      title: 'Online service',
      description: 'Access to multiplayer games',
      monthlyPrice: '+$1/mo',
      yearlyPrice: '+$10/yr',
    },

    {
      title: 'Larger storage',
      description: 'Extra 1TB of cloud save',
      monthlyPrice: '+$2/mo',
      yearlyPrice: '+$20/yr',
    },

    {
      title: 'Customizable profile',
      description: 'Custom theme on your profile',
      monthlyPrice: '+$2/mo',
      yearlyPrice: '+$20/yr',
    },
  ]

  const handleAddon = (addon) => {
    const alreadySelected = formData.addons.includes(addon)

    if (alreadySelected) {
      setFormData({
        ...formData,
        addons: formData.addons.filter(
          (item) => item !== addon
        ),
      })
    } else {
      setFormData({
        ...formData,
        addons: [...formData.addons, addon],
      })
    }
  }

  return (
    <div className="form-step">
      <h1 className="title">Pick add-ons</h1>

      <p className="step-description">
        Add-ons help enhance your gaming experience.
      </p>

      <div className="addons">
        {addonsList.map((addon) => (
          <div
            key={addon.title}
            onClick={() => handleAddon(addon.title)}
            className={
              formData.addons.includes(addon.title)
                ? 'addon active'
                : 'addon'
            }
          >
            <div className="addon-left">
              {/* <input
                type="checkbox"
                checked={formData.addons.includes(addon.title)}
                readOnly
              /> */}
              <div
                className={
                  formData.addons.includes(addon.title)
                    ? 'custom-checkbox checked'
                    : 'custom-checkbox'
                }
              >
                {formData.addons.includes(addon.title) && (
                  <img src={checkmarkIcon} alt="" />
                )}
              </div>

              <div>
                <h3 className="addon-title">
                  {addon.title}
                </h3>

                <p className="addon-description">
                  {addon.description}
                </p>
              </div>
            </div>

            <p className="addon-price">
              {formData.billing === 'monthly'
                ? addon.monthlyPrice
                : addon.yearlyPrice}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
};

StepThree.propTypes = {
  formData: PropTypes.object,
  setFormData: PropTypes.func,
};

export default StepThree
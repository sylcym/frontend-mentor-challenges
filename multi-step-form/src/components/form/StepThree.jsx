import PropTypes from 'prop-types';
import '../../styles/step.css';

function StepThree({ formData, setFormData }) {
  const addonsList = [
    'Online service',
    'Larger storage',
    'Custom profile',
  ];

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
    <div>
      <h1>Add-ons</h1>

      {addonsList.map((addon) => (
        <div
          key={addon}
          onClick={() => handleAddon(addon)}
          className={
            formData.addons.includes(addon)
              ? 'plan active'
              : 'plan'
          }
        >
          {addon}
        </div>
      ))}
    </div>
  )
};

StepThree.propTypes = {
  formData: PropTypes.object,
  setFormData: PropTypes.func,
};

export default StepThree
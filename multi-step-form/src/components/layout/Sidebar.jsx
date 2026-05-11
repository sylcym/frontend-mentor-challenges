import PropTypes from 'prop-types';
import steps from '../../data/steps'

function Sidebar({ currentStep }) {
  return (
    <div>
      {steps.map((step) => (
        <div
          key={step.id}
          className={currentStep === step.id ? 'active-step' : ''}
        >
          <p>STEP {step.id}</p>
          <h3>{step.title}</h3>
        </div>
      ))}
    </div>
  )
}

Sidebar.propTypes = {
  currentStep: PropTypes.number
}
export default Sidebar

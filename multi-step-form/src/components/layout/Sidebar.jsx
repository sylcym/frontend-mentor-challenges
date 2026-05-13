import PropTypes from 'prop-types';
import steps from '../../data/steps';
import '../../styles/Sidebar.css';


function Sidebar({ currentStep }) {
  return (
    <div className="sidebar-content">
      {steps.map((step) => (
        <div key={step.id} className="step-item">
          <div
            className={
              currentStep === step.id
                ? 'step-circle active-step'
                : 'step-circle'
            }
          >
            {step.id}
          </div>

          <div className="step-text">
            <p className="step-number">STEP {step.id}</p>
            <h3 className="step-title">{step.title}</h3>
          </div>
        </div>
      ))}
    </div>
  )
}
Sidebar.propTypes = {
  currentStep: PropTypes.number
}
export default Sidebar

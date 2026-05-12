import PropTypes from 'prop-types';
import Sidebar from './Sidebar';

function MainLayout({
  children,
  currentStep,
  setCurrentStep,
}) {
  return (
    <div className="layout">
      <aside className="sidebar">
        <Sidebar currentStep={currentStep} />
      </aside>

      <main className="main">
        {children}
        <div className="buttons-wrapper">
          <div className="buttons">
            <button
              className="btn-go-back"
              onClick={() => setCurrentStep(currentStep - 1)}
              disabled={currentStep === 1}
            >
              Go Back
            </button>

            <button
              className="btn-next"
              onClick={() => setCurrentStep(currentStep + 1)}
              disabled={currentStep === 4}
            >
              Next Step
            </button>
          </div>
        </div>
      </main>
    </div>
  )
}

MainLayout.propTypes = {
  children: PropTypes.node,
  currentStep: PropTypes.number,
  setCurrentStep: PropTypes.func
}

export default MainLayout
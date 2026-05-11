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
        <div className="buttons">
          <button
            onClick={() => setCurrentStep(currentStep - 1)}
            disabled={currentStep === 1}
          >
            Go Back
          </button>

          <button
            onClick={() => setCurrentStep(currentStep + 1)}
            disabled={currentStep === 4}
          >
            Next Step
          </button>
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
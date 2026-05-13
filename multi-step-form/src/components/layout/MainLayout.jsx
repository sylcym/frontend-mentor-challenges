import PropTypes from 'prop-types';
import Sidebar from './Sidebar';


function MainLayout({
  children,
  currentStep,
  setCurrentStep,
  handleNextStep,
}) {
  return (
    <div className="layout">
      <aside className="sidebar">

        <Sidebar currentStep={currentStep} />
      </aside>

      <main className="main">
        {children}
        <div className="buttons-wrapper">
          <div className={`buttons step-${currentStep}`}>
            {currentStep !== 1 && (
              <button
                className="btn-go-back"
                onClick={() => setCurrentStep(currentStep - 1)}
              >
                Go Back
              </button>
            )}


            <button
              className="btn-next"
              // onClick={() => setCurrentStep(currentStep + 1)}
              onClick={handleNextStep}
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
  setCurrentStep: PropTypes.func,
  handleNextStep: PropTypes.func,
}

export default MainLayout

import PropTypes from 'prop-types';
import Sidebar from './Sidebar';
import '../../styles/MainLayout.css';

function MainLayout({
  children,
  currentStep,
  setCurrentStep,
  handleNextStep,
  setIsSubmitted,
  isSubmitted,
}) {
  return (
    <div className="layout">
      <aside className="sidebar">
        <Sidebar currentStep={currentStep} />
      </aside>

      <main className="main">
        {children}

        {!isSubmitted && (
          <div className="buttons-wrapper">
            <div className={`buttons step-${currentStep}`}>
              {currentStep !== 1 && (
                <button
                  className="btn-go-back"
                  onClick={() =>
                    setCurrentStep(currentStep - 1)
                  }
                >
                  Go Back
                </button>
              )}

              <button
                className="btn-next"
                onClick={() => {
                  if (currentStep === 4) {
                    setIsSubmitted(true)
                  } else {
                    handleNextStep()
                  }
                }}
              >
                {currentStep === 4
                  ? 'Confirm'
                  : 'Next Step'}
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  )
}

MainLayout.propTypes = {
  children: PropTypes.node,
  currentStep: PropTypes.number,
  setCurrentStep: PropTypes.func,
  handleNextStep: PropTypes.func,
  setIsSubmitted: PropTypes.func,
  isSubmitted: PropTypes.bool,
}

export default MainLayout
import { useState } from 'react';
import MainLayout from './components/layout/MainLayout';
import StepOne from './components/form/StepOne';
import StepTwo from './components/form/StepTwo';
import StepThree from './components/form/StepThree';
import StepFour from './components/form/StepFour';

function App() {
  const [currentStep, setCurrentStep] = useState(1)

  return (
    <MainLayout
      currentStep={currentStep}
      setCurrentStep={setCurrentStep}
    >
      {currentStep === 1 && <StepOne />}
      {currentStep === 2 && <StepTwo />}
      {currentStep === 3 && <StepThree />}
      {currentStep === 4 && <StepFour />}
    </MainLayout>
  )
}

export default App

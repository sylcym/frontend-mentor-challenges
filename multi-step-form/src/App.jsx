import { useState } from 'react';
import MainLayout from './components/layout/MainLayout';
import StepOne from './components/form/StepOne';
import StepTwo from './components/form/StepTwo';
import StepThree from './components/form/StepThree';
import StepFour from './components/form/StepFour';

function App() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    plan: '',
    addons: [],
  });
  const [errors, setErrors] = useState({})

  return (
    <MainLayout
      currentStep={currentStep}
      setCurrentStep={setCurrentStep}
    >
      {/* {currentStep === 1 && <StepOne />} */}
      <StepOne
        formData={formData}
        setFormData={setFormData}
        errors={errors}
        setErrors={setErrors}
      />

      {/* {currentStep === 2 && <StepTwo />} */}
      {currentStep === 2 && (
        <StepTwo
          formData={formData}
          setFormData={setFormData}
        />
      )}
      {/* {currentStep === 3 && <StepThree />} */}
      {currentStep === 3 && (
        <StepThree
          formData={formData}
          setFormData={setFormData}
        />
      )}
      {/* {currentStep === 4 && <StepFour />} */}
      {currentStep === 4 && (
        <StepFour formData={formData} />
      )}
    </MainLayout>
  )
}

export default App

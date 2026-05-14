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
    billing: 'monthly',
    addons: [],
  });
  const [errors, setErrors] = useState({})

  const handleNextStep = () => {
    if (currentStep === 1) {
      const newErrors = {}

      if (!formData.name.trim()) {
        newErrors.name = true
      }

      if (!formData.email.trim()) {
        newErrors.email = true
      }

      if (!formData.phone.trim()) {
        newErrors.phone = true
      }

      setErrors(newErrors)

      if (Object.keys(newErrors).length > 0) {
        return
      }
    }

    setCurrentStep(currentStep + 1)
  }

  return (
    <MainLayout
      currentStep={currentStep}
      setCurrentStep={setCurrentStep}
      handleNextStep={handleNextStep}
    >
      {currentStep === 1 && (
        <StepOne
          formData={formData}
          setFormData={setFormData}
          errors={errors}
          setErrors={setErrors}
        />
      )}

      {currentStep === 2 && (
        <StepTwo
          formData={formData}
          setFormData={setFormData}
        />
      )}

      {currentStep === 3 && (
        <StepThree
          formData={formData}
          setFormData={setFormData}
        />
      )}

      {currentStep === 4 && (
        <StepFour formData={formData} />
      )}
    </MainLayout>
  )
}

export default App

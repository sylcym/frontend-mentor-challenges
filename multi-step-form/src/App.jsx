import { useState } from 'react';
import MainLayout from './components/layout/MainLayout'

function App() {
  const [currentStep, setCurrentStep] = useState(1)

  return (
    <MainLayout
      currentStep={currentStep}
      setCurrentStep={setCurrentStep}
    >
      <h1>Multi Step Form</h1>
    </MainLayout>
  )
}

export default App

import { useState } from 'react'
import MortgageForm from './components/MortgageForm'
import Results from './components/Results'
import './../src/styles/index.css'


function App() {
  const [formData, setFormData] = useState({
    amount: '',
    term: '',
    rate: '',
    type: '',
  })
  return (
    <main className="app">
      <div className="calculator">
        <MortgageForm
          formData={formData}
          setFormData={setFormData}
        />
        <Results />
      </div>
    </main>
  )
}

export default App

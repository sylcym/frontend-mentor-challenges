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

  const [results, setResults] = useState(null)

  const [errors, setErrors] = useState({})

  return (
    <main className="app">
      <div className="calculator">
        <MortgageForm
          formData={formData}
          setFormData={setFormData}
          setResults={setResults}
          errors={errors}
          setErrors={setErrors}
        />
        <Results results={results} />
      </div>
    </main>
  )
}

export default App

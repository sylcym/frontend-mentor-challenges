import { useState } from 'react'
import MortgageForm from './components/MortgageForm'
import Results from './components/Results'
// import './../src/styles/index.css'
import './../src/styles/app.css'


function App() {
  const [formData, setFormData] = useState({
    amount: '',
    term: '',
    rate: '',
    type: '',
  })

  const [results, setResults] = useState(null)

  const [errors, setErrors] = useState({})

  const [loading, setLoading] = useState(false)

  return (
    <main className="app">
      <div className="calculator">
        <MortgageForm
          formData={formData}
          setFormData={setFormData}
          setResults={setResults}
          errors={errors}
          setErrors={setErrors}
          loading={loading}
          setLoading={setLoading}
        />
        <Results
          results={results}
          loading={loading}

        />
      </div>
      <div className="attribution">
        Challenge by{" "}
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          rel="noreferrer"
        >
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a
          href=""
          target="_blank"
          rel="noopener noreferrer"
        >
          sylcym
        </a>
      </div>
    </main>
  )
}

export default App

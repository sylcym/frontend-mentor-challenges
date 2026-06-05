import MortgageForm from './components/MortgageForm'
import Results from './components/Results'
import './styles/app.css'

function App() {
  return (
    <main className="app">
      <div className="calculator">
        <MortgageForm />
        <Results />
      </div>
    </main>
  )
}

export default App

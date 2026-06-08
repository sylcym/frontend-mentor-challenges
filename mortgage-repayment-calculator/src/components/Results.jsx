import './../styles/results.css'
import emptyIllustration from '../assets/images/illustration-empty.svg'

function Results({ results }) {
  if (!results) {
    return (
      <section className="results-section">
        <div className="results-empty">
          <img
            src={emptyIllustration}
            alt=""
          />

          <h2 className="results-title">
            Results shown here
          </h2>

          <p className="results-description">
            Complete the form and click
            “calculate repayments” to see
            what your monthly repayments
            would be.
          </p>
        </div>
      </section>
    )
  }

  return (
    <section className="results-section">
      <h2>Your results</h2>

      <p>
        Monthly:
        {results.monthlyRepayment.toFixed(2)}
      </p>

      <p>
        Total:
        {results.totalRepayment.toFixed(2)}
      </p>
    </section>
  )
}



export default Results
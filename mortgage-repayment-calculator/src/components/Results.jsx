import './../styles/results.css'
import emptyIllustration from '../assets/images/illustration-empty.svg'

function Results() {
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
          Complete the form and click “calculate
          repayments” to see what your monthly
          repayments would be.
        </p>
      </div>
    </section>
  )
}

export default Results
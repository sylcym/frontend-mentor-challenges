import PropTypes from 'prop-types'
import './../styles/results.css'
import emptyIllustration from '../assets/images/illustration-empty.svg'

function Results({ results, loading }) {

  if (loading) {
    return (
      <section className="results-section">
        <p>Calculating results...</p>
      </section>
    )
  }

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
      <div className="results-completed">
        <h2 className="results-title">
          Your results
        </h2>

        <p className="results-description">
          Your results are shown below based on
          the information you provided. To adjust
          the results, edit the form and click
          “calculate repayments” again.
        </p>

        <div className="repayment-card">
          <div className="monthly-result">
            <p className="result-label">
              Your monthly repayments
            </p>

            <h3 className="monthly-amount">
              £
              {results.monthlyRepayment.toLocaleString(
                'en-GB',
                {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                }
              )}
            </h3>
          </div>

          <div className="divider"></div>

          <div className="total-result">
            <p className="result-label">
              Total you'll repay over the term
            </p>

            <p className="total-amount">
              £
              {results.totalRepayment.toLocaleString(
                'en-GB',
                {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                }
              )}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
Results.propTypes = {
  results: PropTypes.object,
  loading: PropTypes.bool.isRequired,
}



export default Results
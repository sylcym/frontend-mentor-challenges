
import './../styles/mortgage-form.css'
import calculatorIcon from '../assets/images/icon-calculator.svg'
import PropTypes from 'prop-types'

function MortgageForm({ formData, setFormData }) {

  function handleChange(event) {
    const { name, value } = event.target

    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }))
  }

  function handleSubmit(event) {
    event.preventDefault()

    console.log(formData)
  }

  function clearForm() {
    setFormData({
      amount: '',
      term: '',
      rate: '',
      type: '',
    })
  }

  return (
    <section className="form-section">
      <div className="form-header">
        <h1 className="form-title">Mortgage Calculator</h1>

        <button
          type="button"
          className="clear-btn"
          onClick={clearForm}
        >
          Clear All
        </button>
      </div>

      <form className="mortgage-form"
        onSubmit={handleSubmit}
      >
        <div className="input-group">
          <label htmlFor="amount">Mortgage Amount</label>

          <div className="input-wrapper">
            <span className="input-prefix">£</span>

            <input
              type="number"
              id="amount"
              name="amount"
              value={formData.amount}
              onChange={handleChange}
              placeholder="300000"
            />
          </div>
        </div>

        <div className="form-row">
          <div className="input-group">
            <label htmlFor="term">Mortgage Term</label>

            <div className="input-wrapper">
              <input
                name="term"
                value={formData.term}
                onChange={handleChange}
                type="number"
                id="term"
                placeholder="25"
              />

              <span className="input-suffix">years</span>
            </div>
          </div>

          <div className="input-group">
            <label htmlFor="rate">Interest Rate</label>

            <div className="input-wrapper">
              <input
                name="rate"
                value={formData.rate}
                onChange={handleChange}
                type="number"
                id="rate"
                placeholder="5.25"
              />

              <span className="input-suffix">%</span>
            </div>
          </div>
        </div>
        <div className="input-group">
          <p className="input-label">Mortgage Type</p>

          <div className="radio-group">
            <label className="radio-option">
              <input
                type="radio"
                name="type"
                value="repayment"
                checked={formData.type === 'repayment'}
                onChange={handleChange}
              />

              <span>Repayment</span>
            </label>

            <label className="radio-option">
              <input
                type="radio"
                name="type"
                value="interest-only"
                checked={formData.type === 'interest-only'}
                onChange={handleChange}
              />

              <span>Interest Only</span>
            </label>
          </div>
        </div>

        <button className="calculate-btn" type="submit">
          <img
            src={calculatorIcon}
            alt=""
          />

          <span>Calculate Repayments</span>
        </button>
      </form>
    </section>
  )

}

MortgageForm.propTypes = {
  formData: PropTypes.object.isRequired,
  setFormData: PropTypes.func.isRequired,
}

export default MortgageForm
import PropTypes from 'prop-types'

import calculatorIcon from '../assets/images/icon-calculator.svg'

import '../styles/mortgage-form.css'

function MortgageForm({
  formData,
  setFormData,
  setResults,
  errors,
  setErrors,
  setLoading,
  loading,
}) {
  const isFormInvalid =
    !formData.amount ||
    !formData.term ||
    !formData.rate ||
    !formData.type

  function handleChange(event) {
    const { name, value } = event.target

    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }))
  }

  function handleSubmit(event) {
    event.preventDefault()

    setLoading(true)

    const newErrors = {}

    if (!formData.amount) {
      newErrors.amount = true
    }

    if (!formData.term) {
      newErrors.term = true
    }

    if (!formData.rate) {
      newErrors.rate = true
    }

    if (!formData.type) {
      newErrors.type = true
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    setErrors({})

    setTimeout(() => {

      const amount = Number(formData.amount)
      const term = Number(formData.term)
      const rate = Number(formData.rate)

      const monthlyRate = rate / 100 / 12
      const totalPayments = term * 12

      const monthlyRepayment =
        (amount *
          monthlyRate *
          Math.pow(1 + monthlyRate, totalPayments)) /
        (Math.pow(1 + monthlyRate, totalPayments) - 1)

      const totalRepayment =
        monthlyRepayment * totalPayments

      setResults({
        monthlyRepayment,
        totalRepayment,
      })

      setLoading(false)
    }, 800)
  }

  function clearForm() {
    setFormData({
      amount: '',
      term: '',
      rate: '',
      type: '',
    })

    setResults(null)
    setErrors({})
  }

  return (
    <section className="form-section">
      <div className="form-header">
        <h1 className="form-title">
          Mortgage Calculator
        </h1>

        <button
          type="button"
          className="clear-btn"
          onClick={clearForm}
        >
          Clear All
        </button>
      </div>

      <form
        className="mortgage-form"
        loading={loading}
        onSubmit={handleSubmit}
      >
        <div className="input-group">
          <label
            className="input-label"
            htmlFor="amount"
          >
            Mortgage Amount
          </label>

          <div
            className={`input-wrapper ${errors.amount
              ? 'input-error'
              : ''
              }`}
          >
            <span className="input-prefix">
              £
            </span>

            <input
              type="number"
              id="amount"
              name="amount"
              placeholder="300000"
              value={formData.amount}
              onChange={handleChange}
            />
          </div>
          {errors.amount && (
            <p className="error-message">
              This field is required
            </p>
          )}

        </div>

        <div className="form-row">
          <div className="input-group">
            <label
              className="input-label"
              htmlFor="term"
            >
              Mortgage Term
            </label>

            <div
              className={`input-wrapper ${errors.term
                ? 'input-error'
                : ''
                }`}
            >
              <input
                type="number"
                id="term"
                name="term"
                placeholder="25"
                value={formData.term}
                onChange={handleChange}
              />

              <span className="input-suffix">
                years
              </span>
            </div>

            {errors.term && (
              <p className="error-message">
                This field is required
              </p>
            )}
          </div>

          <div className="input-group">
            <label
              className="input-label"
              htmlFor="rate"
            >
              Interest Rate
            </label>

            <div
              className={`input-wrapper ${errors.rate
                ? 'input-error'
                : ''
                }`}
            >
              <input
                type="number"
                id="rate"
                name="rate"
                placeholder="5.25"
                value={formData.rate}
                onChange={handleChange}
              />

              <span className="input-suffix">
                %
              </span>
            </div>
          </div>

          {errors.rate && (
            <p className="error-message">
              This field is required
            </p>
          )}
        </div>

        <div className="input-group">
          <p className="input-label">
            Mortgage Type
          </p>

          <div
            className={`radio-group ${errors.type ? 'input-error' : ''
              }`}
          >
            <label
              className={`radio-option ${errors.type
                ? 'radio-error'
                : ''
                }`}
            >
              <input
                type="radio"
                name="type"
                value="repayment"
                checked={
                  formData.type ===
                  'repayment'
                }
                onChange={handleChange}
              />

              <span>Repayment</span>
            </label>

            <label
              className={`radio-option ${errors.type
                ? 'radio-error'
                : ''
                }`}
            >
              <input
                type="radio"
                name="type"
                value="interest-only"
                checked={
                  formData.type ===
                  'interest-only'
                }
                onChange={handleChange}
              />

              <span>Interest Only</span>
            </label>
            {errors.type && (
              <p className="error-message">
                This field is required
              </p>
            )}
          </div>
        </div>

        <button
          className="calculate-btn"
          type="submit"
          disabled={isFormInvalid || loading}
        >
          <img
            src={calculatorIcon}
            alt=""
          />

          <span>
            {loading
              ? 'Calculating...'
              : 'Calculate Repayments'}
          </span>
        </button>
      </form>
    </section>
  )
}


MortgageForm.propTypes = {
  formData: PropTypes.object.isRequired,
  setFormData: PropTypes.func.isRequired,
  setResults: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  setErrors: PropTypes.func.isRequired,
  // results: PropTypes.object,
  loading: PropTypes.bool.isRequired,
  setLoading: PropTypes.func.isRequired,
}

export default MortgageForm
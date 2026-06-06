import './../styles/mortgage-form.css'

function MortgageForm() {
  return (
    <section className="form-section">
      <div className="form-header">
        <h1 className="form-title">Mortgage Calculator</h1>

        <button className="clear-btn">Clear All</button>
      </div>

      <form className="mortgage-form">
        <div className="input-group">
          <label htmlFor="amount">Mortgage Amount</label>

          <div className="input-wrapper">
            <span className="input-prefix">£</span>

            <input
              type="number"
              id="amount"
              placeholder="300000"
            />
          </div>
        </div>

        <div className="form-row">
          <div className="input-group">
            <label htmlFor="term">Mortgage Term</label>

            <div className="input-wrapper">
              <input
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
                type="number"
                id="rate"
                placeholder="5.25"
              />

              <span className="input-suffix">%</span>
            </div>
          </div>
        </div>
      </form>
    </section>
  )
}


export default MortgageForm
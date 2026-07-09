import { useState } from 'react'
import PropTypes from 'prop-types'
import '../styles/Header.css'

function Header({
  selectedStatus,
  setSelectedStatus,
  invoiceCount,
  setShowInvoiceForm,
}) {
  const [showFilters, setShowFilters] = useState(false)


  return (
    <header className="header">
      <div>
        <h1 className="header-title">
          Invoices
        </h1>

        <p className="header-description">
          {invoiceCount === 0
            ? 'No invoices'
            : invoiceCount === 1
              ? '1 invoice'
              : `${invoiceCount} invoices`}
        </p>
      </div>

      <div className="header-actions">
        <div className="filter-container">
          <button
            className="filter-button"
            onClick={() => setShowFilters(!showFilters)}
          >
            Filter
          </button>

          {showFilters && (
            <div className="filter-dropdown">
              <button
                className={`filter-option ${selectedStatus === 'draft' ? 'active-filter' : ''
                  }`}
                onClick={() => {
                  setSelectedStatus('draft')
                  setShowFilters(false)
                }}
              >
                Draft
              </button>

              <button
                className={`filter-option ${selectedStatus === 'pending' ? 'active-filter' : ''
                  }`}
                onClick={() => {
                  setSelectedStatus('pending')
                  setShowFilters(false)
                }}


              >
                Pending
              </button>

              <button
                className={`filter-option ${selectedStatus === 'paid' ? 'active-filter' : ''
                  }`}
                onClick={() => {
                  setSelectedStatus('paid')
                  setShowFilters(false)
                }}


              >
                Paid
              </button>

              <button
                className={`filter-option ${selectedStatus === '' ? 'active-filter' : ''
                  }`}

                onClick={() => {
                  setSelectedStatus('')
                  setShowFilters(false)
                }}

              >
                Clear Filter
              </button>
            </div>
          )}
        </div>

        <button
          className="add-button"
          onClick={() => setShowInvoiceForm(true)}
        >
          <span className='add-button-plus'>+</span>
          New
        </button>
      </div>
    </header>
  )
}

Header.propTypes = {
  selectedStatus: PropTypes.string,
  setSelectedStatus: PropTypes.func,
  invoiceCount: PropTypes.number,
  setShowInvoiceForm: PropTypes.func,
}

export default Header
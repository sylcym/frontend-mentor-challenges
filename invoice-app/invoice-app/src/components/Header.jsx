import { useState } from 'react'
import PropTypes from 'prop-types'
import ArrowDown from '../assets/icons/icon-arrow-down.svg'
import PlusIcon from '../assets/icons/icon-plus.svg'
import '../styles/Header.css'

function Header({
  selectedStatus,
  setSelectedStatus,
  invoiceCount,
  setShowInvoiceForm,
}) {
  const [showFilters, setShowFilters] = useState(false)

  function handleFilter(status) {
    setSelectedStatus(status)
    setShowFilters(false)
  }


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
            <span>Filter</span>

            <img
              src={ArrowDown}
              alt=""
              className={`filter-arrow ${showFilters ? 'rotate' : ''
                }`}
            />
          </button>

          {showFilters && (
            <div className="filter-dropdown">
              <button
                className={`filter-option ${selectedStatus === 'draft' ? 'active-filter' : ''
                  }`}
                onClick={() => handleFilter('draft')}
              >
                Draft
              </button>

              <button
                className={`filter-option ${selectedStatus === 'pending' ? 'active-filter' : ''
                  }`}
                onClick={() => handleFilter('pending')}
              >
                Pending
              </button>

              <button
                className={`filter-option ${selectedStatus === 'paid' ? 'active-filter' : ''
                  }`}
                onClick={() => handleFilter('paid')}
              >
                Paid
              </button>

              <button
                className={`filter-option ${selectedStatus === '' ? 'active-filter' : ''
                  }`}
                onClick={() => handleFilter('')}
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
          <span className="add-button-icon">
            <img
              src={PlusIcon}
              alt=""
              className="plus-icon"
            />
          </span>

          <span className="add-button-text">
            <span className="mobile-text">
              New
            </span>

            <span className="desktop-text">
              New Invoice
            </span>
          </span>
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
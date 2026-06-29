import { useState } from 'react'
import PropTypes from 'prop-types'
import '../styles/Header.css'

function Header({
  selectedStatus,
  setSelectedStatus,
}) {
  const [showFilters, setShowFilters] = useState(false)


  return (
    <header className="header">
      <div>
        <h1 className="header-title">
          Invoices
        </h1>

        <p className="header-description">
          7 invoices
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
                className="filter-option"
                onClick={() => setSelectedStatus('draft')}
              >
                Draft
              </button>

              <button
                className="filter-option"
                onClick={() => setSelectedStatus('pending')}
              >
                Pending
              </button>

              <button
                className="filter-option"
                onClick={() => setSelectedStatus('paid')}
              >
                Paid
              </button>

              <button
                className="filter-option"
                onClick={() => setSelectedStatus('')}
              >
                Clear Filter
              </button>
            </div>
          )}
        </div>

        <button className="add-button">
          + New
        </button>
      </div>
    </header>
  )
}

Header.propTypes = {
  selectedStatus: PropTypes.string,
  setSelectedStatus: PropTypes.func,
}

export default Header
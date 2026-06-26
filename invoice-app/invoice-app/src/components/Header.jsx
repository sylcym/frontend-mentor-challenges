import { useState } from 'react'
import '../styles/Header.css'

function Header() {
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
              <label className="filter-option">
                <input type="checkbox" />
                Draft
              </label>

              <label className="filter-option">
                <input type="checkbox" />
                Pending
              </label>

              <label className="filter-option">
                <input type="checkbox" />
                Paid
              </label>
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

export default Header
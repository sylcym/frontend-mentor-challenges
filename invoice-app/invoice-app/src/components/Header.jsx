import { useEffect, useRef, useState } from 'react'
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
  const filterRef = useRef(null)

  function handleFilter(status) {
    if (selectedStatus === status) {
      setSelectedStatus('')
    } else {
      setSelectedStatus(status)
    }

    setShowFilters(false)
  }

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        filterRef.current &&
        !filterRef.current.contains(event.target)
      ) {
        setShowFilters(false)
      }
    }

    document.addEventListener(
      'mousedown',
      handleClickOutside
    )

    return () => {
      document.removeEventListener(
        'mousedown',
        handleClickOutside
      )
    }
  }, [])

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
        <div
          className="filter-container"
          ref={filterRef}
        >
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
              <label className="filter-option">
                <input
                  type="checkbox"
                  checked={selectedStatus === 'draft'}
                  onChange={() => handleFilter('draft')}
                />

                <span>Draft</span>
              </label>
              {/* <button
                className={`filter-option ${selectedStatus === 'draft' ? 'active-filter' : ''
                  }`}
                onClick={() => handleFilter('draft')}
              >
                Draft
              </button> */}
              <label className="filter-option">
                <input
                  type="checkbox"
                  checked={selectedStatus === 'pending'}
                  onChange={() => handleFilter('pending')}
                />

                <span>Pending</span>
              </label>

              {/* <button
                className={`filter-option ${selectedStatus === 'pending' ? 'active-filter' : ''
                  }`}
                onClick={() => handleFilter('pending')}
              >
                Pending
              </button> */}
              <label className="filter-option">
                <input
                  type="checkbox"
                  checked={selectedStatus === 'paid'}
                  onChange={() => handleFilter('paid')}
                />

                <span>Paid</span>
              </label>

              {/* <button
                className={`filter-option ${selectedStatus === 'paid' ? 'active-filter' : ''
                  }`}
                onClick={() => handleFilter('paid')}
              >
                Paid
              </button> */}
              <button
                className="filter-option "
                onClick={() => handleFilter('')}
              >
                Clear Filter
              </button>
              {/* <button
                className={`filter-option ${selectedStatus === '' ? 'active-filter' : ''
                  }`}
                onClick={() => handleFilter('')}
              >
                Clear Filter
              </button> */}
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
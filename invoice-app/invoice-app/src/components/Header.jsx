import { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import ArrowDown from '../assets/icons/icon-arrow-down.svg'
import PlusIcon from '../assets/icons/icon-plus.svg'
import '../styles/Header.css'

function Header({
  selectedStatus,
  setSelectedStatus,
  invoiceCount,
  onOpenInvoiceForm,
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

          <span className="mobile-description">
            {invoiceCount === 0
              ? 'No invoices'
              : invoiceCount === 1
                ? '1 invoice'
                : `${invoiceCount} invoices`}
          </span>

          <span className="desktop-description">
            {invoiceCount === 0
              ? 'No invoices'
              : invoiceCount === 1
                ? selectedStatus
                  ? `There is 1 ${selectedStatus} invoice`
                  : 'There is 1 total invoice'
                : selectedStatus
                  ? `There are ${invoiceCount} ${selectedStatus} invoices`
                  : `There are ${invoiceCount} total invoices`}
          </span>

        </p>
      </div>

      <div className="header-actions">
        <div
          className="filter-container"
          ref={filterRef}
        >
          <button
            type="button"
            className="filter-button"
            onClick={() => setShowFilters(!showFilters)}
          >

            <span className="filter-mobile">
              Filter
            </span>

            <span className="filter-tablet">
              Filter by status
            </span>

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

              <label className="filter-option">
                <input
                  type="checkbox"
                  checked={selectedStatus === 'pending'}
                  onChange={() => handleFilter('pending')}
                />

                <span>Pending</span>
              </label>

              <label className="filter-option">
                <input
                  type="checkbox"
                  checked={selectedStatus === 'paid'}
                  onChange={() => handleFilter('paid')}
                />

                <span>Paid</span>
              </label>

              <button
                type="button"
                className="filter-option "
                onClick={() => handleFilter('')}
              >
                Clear Filter
              </button>

            </div>
          )}
        </div>

        <button
          type="button"
          className="add-button"
          onClick={onOpenInvoiceForm}
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
  onOpenInvoiceForm: PropTypes.func,
}

export default Header
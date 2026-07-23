import { useState } from 'react'
import PropTypes from 'prop-types'
import ConfirmDelete from '../ConfirmDeleteModal'
import StatusBadge from './StatusBadge'
import ActionButtons from './ActionButtons'
import InvoiceItemsTable from './InvoiceItemsTable'
import InvoiceInfo from './InvoiceInfo'
import ArrowLeft from '../../assets/icons/icon-arrow-left.svg'
import '../../styles/InvoiceDetails.css'

function InvoiceDetails({
  invoice,
  onGoBack,
  onEdit,
  onMarkPaid,
  onDelete,
}) {
  const [showDeleteModal, setShowDeleteModal] =
    useState(false)

  return (
    <>
      <section className="invoice-details">

        <button
          className="go-back-button"
          onClick={onGoBack}
        >
          <img
            src={ArrowLeft}
            alt=""
          />

          Go back
        </button>

        <div className="invoice-details-header">

          <div className="invoice-details-status">
            <p>Status</p>

            <StatusBadge
              status={invoice.status}
            />
          </div>

          <div className="invoice-details-actions-desktop">

            <ActionButtons
              onEdit={onEdit}
              onDelete={() => setShowDeleteModal(true)}
              onMarkPaid={onMarkPaid}
            />

          </div>

        </div>

        <div className="invoice-details-card">

          <div className="invoice-details-top">

            <div className="invoice-details-title">
              <h2>
                #{invoice.id}
              </h2>

              <p>
                {invoice.projectDescription}
              </p>
            </div>

            <div className="sender-address">
              <p>{invoice.senderAddress.street}</p>
              <p>{invoice.senderAddress.city}</p>
              <p>{invoice.senderAddress.postCode}</p>
              <p>{invoice.senderAddress.country}</p>
            </div>
          </div>
          <InvoiceInfo
            invoice={invoice}
          />

          <InvoiceItemsTable
            items={invoice.items}
          />

        </div>

      </section>
      <div className="invoice-details-actions-mobile">
        <ActionButtons
          onEdit={onEdit}
          // onDelete={() => console.log('delete')}
          onDelete={() => setShowDeleteModal(true)}
          onMarkPaid={onMarkPaid}
        />
      </div>

      {showDeleteModal && (
        <ConfirmDelete
          invoiceId={invoice.id}
          onCancel={() => setShowDeleteModal(false)}
          onDelete={onDelete}
        />
      )}
    </>
  )

}


InvoiceDetails.propTypes = {
  invoice: PropTypes.object,
  onGoBack: PropTypes.func,
  onEdit: PropTypes.func,
  onMarkPaid: PropTypes.func,
  onDelete: PropTypes.func.isRequired,
}


export default InvoiceDetails
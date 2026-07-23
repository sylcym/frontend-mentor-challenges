
import { useState } from 'react'
import Header from '../components/Header'
import InvoiceCard from '../components/InvoiceCard'
import EmptyState from '../components/EmptyState'
// import InvoiceForm from '../components/InvoiceForm'
import InvoiceForm from '../components/InvoiceForm/InvoiceForm'
import InvoiceDetails from '../components/InvoiceDetails/InvoiceDetails'
import invoices from '../data/invoices'
import '../styles/Home.css'

function Home() {
  const [selectedStatus, setSelectedStatus] = useState('')
  const [showInvoiceForm, setShowInvoiceForm] = useState(false)
  const [invoiceList, setInvoiceList] = useState(invoices)
  const [selectedInvoice, setSelectedInvoice] = useState(null)
  const [invoiceToEdit, setInvoiceToEdit] = useState(null)

  function handleOpenInvoiceForm() {
    setSelectedInvoice(null)
    setShowInvoiceForm(true)
  }

  function handleEditInvoice(invoice) {
    setInvoiceToEdit(invoice)
    setSelectedInvoice(null)
    setShowInvoiceForm(true)
  }

  function handleMarkAsPaid(invoice) {
    setInvoiceList((prev) =>
      prev.map((item) =>
        item.id === invoice.id
          ? {
            ...item,
            status: 'paid',
          }
          : item
      )
    )
  }

  function handleDeleteInvoice(invoice) {
    setInvoiceList((prev) =>
      prev.filter((item) => item.id !== invoice.id)
    )

    setSelectedInvoice(null)
  }

  const filteredInvoices = selectedStatus
    ? invoiceList.filter(
      (invoice) =>
        invoice.status.toLowerCase() === selectedStatus
    )
    : invoiceList

  return (

    <div>

      {showInvoiceForm ? (

        <InvoiceForm
          setShowInvoiceForm={setShowInvoiceForm}
          setInvoiceList={setInvoiceList}
          invoiceToEdit={invoiceToEdit}
          setInvoiceToEdit={setInvoiceToEdit}
        />
      ) : selectedInvoice ? (

        <InvoiceDetails
          invoice={selectedInvoice}
          onGoBack={() => setSelectedInvoice(null)}
          onEdit={() => handleEditInvoice(selectedInvoice)}
          onMarkPaid={() => handleMarkAsPaid(selectedInvoice)}
          onDelete={() => handleDeleteInvoice(selectedInvoice)}
        />

      ) : (

        <div className="home-content">

          <Header
            selectedStatus={selectedStatus}
            setSelectedStatus={setSelectedStatus}
            invoiceCount={filteredInvoices.length}
            onOpenInvoiceForm={handleOpenInvoiceForm}
          />

          {filteredInvoices.length === 0 ? (

            <EmptyState />

          ) : (

            <div className="invoices-list">
              {filteredInvoices.map((invoice) => (
                <InvoiceCard
                  key={invoice.id}
                  id={invoice.id}
                  client={invoice.client}
                  dueDate={invoice.dueDate}
                  total={invoice.total}
                  status={invoice.status}
                  invoice={invoice}
                  setSelectedInvoice={setSelectedInvoice}
                />
              ))}
            </div>

          )}

        </div>

      )}

    </div>

  )

}


export default Home
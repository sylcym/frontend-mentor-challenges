
import { useState } from 'react'
import Header from '../components/Header'
import InvoiceCard from '../components/InvoiceCard'
import EmptyState from '../components/EmptyState'
// import InvoiceForm from '../components/InvoiceForm'
import InvoiceForm from '../components/InvoiceForm/InvoiceForm'
import invoices from '../data/invoices'
import '../styles/Home.css'

function Home() {
  const [selectedStatus, setSelectedStatus] = useState('')
  const [showInvoiceForm, setShowInvoiceForm] = useState(false)
  const [invoiceList, setInvoiceList] = useState(invoices)

  const filteredInvoices = selectedStatus
    ? invoiceList.filter(
      (invoice) =>
        invoice.status.toLowerCase() === selectedStatus
    )
    : invoiceList
  // const filteredInvoices = selectedStatus
  //   ? invoices.filter(
  //     (invoice) =>
  //       invoice.status.toLowerCase() === selectedStatus
  //   )
  //   : invoices

  return (
    <div>
      <Header
        selectedStatus={selectedStatus}
        setSelectedStatus={setSelectedStatus}
        invoiceCount={filteredInvoices.length}
        setShowInvoiceForm={setShowInvoiceForm}
      />

      {showInvoiceForm && (
        <InvoiceForm
          setShowInvoiceForm={setShowInvoiceForm}
          setInvoiceList={setInvoiceList}
        />
      )}


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
            />
          ))}
        </div>
      )}
    </div>

  )
}

export default Home
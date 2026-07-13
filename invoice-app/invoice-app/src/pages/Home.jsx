
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

  const filteredInvoices = selectedStatus
    ? invoiceList.filter(
      (invoice) =>
        invoice.status.toLowerCase() === selectedStatus
    )
    : invoiceList

  return (

    <div>
      <Header
        selectedStatus={selectedStatus}
        setSelectedStatus={setSelectedStatus}
        invoiceCount={filteredInvoices.length}
        setShowInvoiceForm={setShowInvoiceForm}
      />

      {
        showInvoiceForm && (
          <InvoiceForm
            setShowInvoiceForm={setShowInvoiceForm}
            setInvoiceList={setInvoiceList}
          />
        )
      }


      {selectedInvoice ? (
        <InvoiceDetails
          invoice={selectedInvoice}
          onGoBack={() => setSelectedInvoice(null)}
        />
      ) : filteredInvoices.length === 0 ? (
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

  )
}


export default Home
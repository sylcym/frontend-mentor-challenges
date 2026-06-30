
import { useState } from 'react'
import Header from '../components/Header'
import InvoiceCard from '../components/InvoiceCard'
import EmptyState from '../components/EmptyState'
import invoices from '../data/invoices'
import '../styles/Home.css'

function Home() {
  const [selectedStatus, setSelectedStatus] = useState('')
  const filteredInvoices = selectedStatus
    ? invoices.filter(
      (invoice) =>
        invoice.status.toLowerCase() === selectedStatus
    )
    : invoices

  return (
    <div>
      <Header
        selectedStatus={selectedStatus}
        setSelectedStatus={setSelectedStatus}
        invoiceCount={filteredInvoices.length}
      />

      <div className="invoices-list">
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
    </div>
  )
}

export default Home
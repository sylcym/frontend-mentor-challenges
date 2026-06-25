import Header from '../components/Header'
import InvoiceCard from '../components/InvoiceCard'
import invoices from '../data/invoices'
import '../styles/Home.css'

function Home() {
  return (
    <div>
      <Header />

      <div className="invoices-list">
        {invoices.map((invoice) => (
          <InvoiceCard
            key={invoice.id}
            id={invoice.id + 1}
            client={invoice.client}
            dueDate={invoice.dueDate}
            total={invoice.total}
            status={invoice.status}
          />
        ))}
      </div>
    </div>
  )
}

export default Home
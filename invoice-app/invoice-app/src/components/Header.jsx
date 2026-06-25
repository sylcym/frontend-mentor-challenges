// import InvoiceCard from '../components/InvoiceCard'
import "../styles/Header.css"

function Header() {
  return (
    <>
      <header className="header">
        <div>
          <h1 className="header-title">
            Invoices
          </h1>
          <p className="header-description">
            There are 7 total invoices
          </p>
        </div>

        <button className="add-button">
          New
        </button>
      </header>

    </>
  )
}

export default Header
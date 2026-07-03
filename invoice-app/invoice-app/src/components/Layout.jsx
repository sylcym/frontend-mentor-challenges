import PropTypes from 'prop-types'
import Sidebar from './Sidebar'
import "../styles/Layout.css"

function Layout({ children }) {
  return (
    <div className="layout">
      <Sidebar />

      <main>
        {children}
      </main>
    </div>
  )
}
Layout.propTypes = {
  children: PropTypes.node,
}
export default Layout
import Sidebar from './Sidebar'
import "../styles/Layout.css"
import PropTypes from 'prop-types'

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
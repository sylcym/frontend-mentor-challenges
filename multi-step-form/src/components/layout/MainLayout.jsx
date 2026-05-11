import PropTypes from 'prop-types';
import Sidebar from './Sidebar';

function MainLayout({ children }) {
  return (
    <div className="layout">
      <aside className="sidebar">
        <Sidebar />
      </aside>

      <main className="main">
        {children}
      </main>
    </div>
  )
}

MainLayout.propTypes = {
  children: PropTypes.node
}

export default MainLayout
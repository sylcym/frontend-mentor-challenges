import PropTypes from 'prop-types';

function MainLayout({ children }) {
  return (
    <div className="layout">
      <aside className="sidebar">
        Sidebar
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
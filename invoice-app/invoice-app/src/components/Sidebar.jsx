import '../styles/Sidebar.css'

function Sidebar() {
  return (
    <aside className="aside">
      <div className="sidebar-logo">
        <div className="logo-circle"></div>
      </div>

      <div className="sidebar-avatar">
        <img
          src="https://i.pravatar.cc/40"
          alt="User avatar"
        />
      </div>
    </aside>
  )
}

export default Sidebar
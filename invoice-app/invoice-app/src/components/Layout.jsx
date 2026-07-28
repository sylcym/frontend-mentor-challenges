import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import Sidebar from './Sidebar'
import "../styles/Layout.css"

function Layout({ children }) {
  // const [isDarkMode, setIsDarkMode] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark'
  })

  function toggleTheme() {
    setIsDarkMode((prev) => !prev)
  }

  useEffect(() => {
    document.body.classList.toggle('dark', isDarkMode)

    localStorage.setItem(
      'theme',
      isDarkMode ? 'dark' : 'light'
    )
  }, [isDarkMode])

  return (
    <div className="layout">
      <Sidebar
        isDarkMode={isDarkMode}
        toggleTheme={toggleTheme}
      />

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
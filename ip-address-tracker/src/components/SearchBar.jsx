import { useState } from "react"
import PropTypes from "prop-types"
import "./SearchBar.css"

function SearchBar({ onSearch }) {
  const [searchValue, setSearchValue] = useState("")

  function handleSubmit(event) {
    event.preventDefault()

    if (!searchValue.trim()) {
      return
    }

    onSearch(searchValue.trim())
  }

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <input
        className="search-input"
        type="text"
        placeholder="Search for any IP address or domain"
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
      />

      <button
        className="search-button"
        type="submit"
        aria-label="Search"
      >
        →
      </button>
    </form>
  )
}

SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired,
  // onSearch: PropTypes.func,
}

export default SearchBar
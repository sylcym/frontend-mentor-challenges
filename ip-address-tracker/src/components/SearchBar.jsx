import "./SearchBar.css"

function SearchBar() {
  return (
    <div className="search-bar">
      <input
        className="search-input"
        type="text"
        placeholder="Search for any IP address or domain"
      />

      <button className="search-button">
        →
      </button>
    </div>
  )
}

export default SearchBar
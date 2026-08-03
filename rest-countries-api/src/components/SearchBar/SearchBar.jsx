import "./SearchBar.css";

function SearchBar() {
  return (
    <form className="search-bar">
      <div className="search-bar-wrapper">
        <span className="search-bar-icon">🔍</span>

        <input
          className="search-bar-input"
          type="text"
          placeholder="Search for a country..."
        />
      </div>
    </form>
  );
}

export default SearchBar;
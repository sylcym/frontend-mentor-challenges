import PropTypes from "prop-types";
import "./SearchBar.css";

function SearchBar({ searchTerm, onSearchChange }) {

  return (
    <div className="search-bar">
      <div className="search-bar-wrapper">
        <span className="search-bar-icon">🔍</span>

        <input
          className="search-bar-input"
          type="text"
          placeholder="Search for a country..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </div>
    </div>
  );
}

SearchBar.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  onSearchChange: PropTypes.func.isRequired,
};

export default SearchBar;
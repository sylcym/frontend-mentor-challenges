import PropTypes from "prop-types";
import "./Filter.css"

function Filter({ selectedRegion, onRegionChange }) {
  const handleRegionChange = (event) => {
    onRegionChange(event.target.value);
  };


  return (
    <div
      className="filter-container">
      <select
        className="filter"
        value={selectedRegion}
        onChange={handleRegionChange}>
        <option value="">
          Filter by Region
        </option>

        <option value="Africa">
          Africa
        </option>

        <option value="America">
          America
        </option>

        <option value="Asia">
          Asia
        </option>

        <option value="Europe">
          Europe
        </option>

        <option value="Oceania">
          Oceania
        </option>
      </select>
    </div>
  );
}

Filter.propTypes = {
  selectedRegion: PropTypes.string.isRequired,
  onRegionChange: PropTypes.func.isRequired,
};

export default Filter;
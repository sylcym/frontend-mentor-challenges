import "./Filter.css"

function Filter() {
  return (
    <div className="filter-container">
      <select className="filter">
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

export default Filter;
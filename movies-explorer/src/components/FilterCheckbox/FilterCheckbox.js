function FilterCheckbox({checked}) {
    return (
            <label className="filter-checkbox">
              <input type="checkbox"></input>
              <span className="slider round" onClick={checked}></span>
            </label>
    );
  }
  export default FilterCheckbox;
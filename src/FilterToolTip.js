import "./main.scss";
const FilterToolTip = () => {
  return (
    <div className="filterTool">
      <div className="header">
        <div className="text">Filters</div>
      </div>

      <div className="content">
        <div className="radio">
          <label class="radioContainer">
            Show Responses
            <input type="radio" name="radio" />
            <span class="checkmark"></span>
          </label>
          <label class="radioContainer">
            Show Comments
            <input type="radio" name="radio" />
            <span class="checkmark"></span>
          </label>
        </div>
        <div className="buttons">
          <div className="clear">Clear</div>
          <div className="apply"> Apply Filters</div>
        </div>
      </div>
    </div>
  );
};

export default FilterToolTip;

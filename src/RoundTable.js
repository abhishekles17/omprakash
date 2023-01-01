import Tabs from "./common/Tabs";
import "./main.scss";
import { TabsData, feedData } from "./miscUtils/miscData";
import { useState } from "react";
import Filter from "./assets/images/filter.svg";
import SearchNew from "./assets/images/searchNew.svg";
import FilterToolTip from "./FilterToolTip";
import FeedCard from "./FeedCard";
import RoundFull from "./assets/images/roundFull.png"

const RoundTable = () => {
  const [active, setActive] = useState(1);
  const [filter, setFilter] = useState(false);

  return (
    <div className="tableContainer">
      <Tabs list={TabsData} setActive={setActive} active={active} />
      <div className="feedContainer">
        <div className="searchFilter">
          <div className="searchContainer">
            <img src={SearchNew} className="search" alt="logo" />
            <input
              type="text"
              className="input"
              placeholder="Search by Student Name…"
            />
          </div>

          <img
            src={Filter}
            onClick={() => {
              setFilter((prevState) => {
                return !prevState;
              });
            }}
            className="filter"
            alt="logo"
          />

          {filter && <FilterToolTip />}
        </div>
        <div className="listContainer">
          {feedData.map((item, index) => {
            return <FeedCard details={item} key={index} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default RoundTable;

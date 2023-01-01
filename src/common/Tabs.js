import "./tabs.scss"
const Tabs = ({ list, active, setActive }) => {
  return (
    <div className="tabContainer">
      {list.map((tab, index) => {
        return (
          <div
            className={index > 0 ? "tab m-left-37" : "tab" }
            key={index}

            onClick={() => {
              setActive(index);
            }}
          >
            <div className={active === index ? "text selectedTab" : "text"}>
              {tab}
            </div>
            <div className={active === index ? "activeLine" : "hideLine"}></div>
          </div>
        );
      })}
    </div>
  );
};

export default Tabs;

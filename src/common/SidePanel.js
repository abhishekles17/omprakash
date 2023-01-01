import "./sidepanel.scss";
import Close from "../assets/images/close.svg"
const SidePanel = (props) => {
  const { open, title = "Roundtable", onClose } = props;
  return (
    <div className={open ? "sidePanel-parent-container" : ""}>
      <div
        className={
          open ? "container-wrap open-container-wrap" : "container-wrap"
        }
      >
        <div className="sidePanel-container">
          <div className="header">
            <div className="text">{title}</div>
            <img onClick={onClose} src={Close} className="close" alt="logo" />
          </div>
          {props.children}
        </div>
      </div>
    </div>
  );
};
export default SidePanel;

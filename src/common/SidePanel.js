import "./sidepanel.scss";
import Close from "../assets/images/close.svg"
const SidePanel = (props) => {
  const { open, title = "", onClose, headerIcon, navigateFrom = "bottom", size="100%" } = props;
  return (
    <div className={open ? "sidePanel-parent-container" : ""}>
      <div
        className={
          open ? `${navigateFrom} open-${navigateFrom}` : `${navigateFrom}`
        }
        style={{width:size}}
      >
        <div className="sidePanel-container">
          <div className="header">
            {headerIcon && <img src={headerIcon} className="icon" alt="logo"/>}
            {title && <div className="text m-left-30-mv">{title}</div>}
            <img onClick={onClose} src={Close} className="close" alt="logo" />
          </div>
          {props.children}
        </div>
      </div>
    </div>
  );
};
export default SidePanel;

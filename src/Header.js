import "./main.scss";
import NewLogo from "./assets/images/newLogo.png"
import Search from "./assets/images/search.svg";
import CrossBtn from "./assets/images/cross.svg";
import Profile from "./assets/images/profile.svg";
import Bell from "./assets/images/bell.svg";
import Video from "./assets/images/video.svg";
import Chat from "./assets/images/chat.svg";
const Header = () => {
  return (
    <div className="headerContainer">
      <div className="topBar">
        <div className="leftBar">
          <div className="logoDetails">
            <img src={NewLogo} className="newLogo" alt="logo" />
          </div>
          <div className="searchTab">
            <img src={Search} className="search" alt="logo" />
            <input className="input" type="text" placeholder="Emily |" />
            <img src={CrossBtn} className="cross" alt="logo" />
          </div>
        </div>
        <div className="rightBar">
          <div className="managerButton">Mentee Manger</div>
          <select className="select">
            <option value="" selected>
              Choose here
            </option>
          </select>
          <div className="profileDiv">
            <img src={Profile} className="profile" alt="logo" />
            <div className="profileName">Willy Jackson</div>
            <div className="arrowDown">{">"}</div>
          </div>
        </div>
      </div>

      <div className="downBar">
        <div className="text2020">2020 Strauss Scholars</div>

        <div className="icons">
          <div className="bellContainer">
            <img src={Bell} className="bell" alt="logo" />
            <div className="count">2</div>
          </div>
          <div className="videoContainer">
            <img src={Video} className="video" alt="logo" />
          </div>
          <div className="chatContainer">
            <img src={Chat} className="chat" alt="logo" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

import "./main.scss";
import Eval from "./assets/images/eval.svg";
import Stories from "./assets/images/stories.svg";
import Home from "./assets/images/home.svg";
import Compass from "./assets/images/compass.svg";
import Class from "./assets/images/class.svg";

const LeftNav = () => {
  return (
    <div className="navContainer">
      <div className="homeContainer flexCenterCol cursorPointer">
        <img src={Home} className="paddingNav eval" alt="logo" />
        <div className="navText">Home</div>
      </div>
      <div className="logisticsContainer marginTop29 flexCenterCol cursorPointer">
        <img src={Compass} className="paddingNav eval" alt="logo" />
        <div className="navText">Logistics</div>
      </div>
      <div className="classContainer marginTop29 flexCenterCol cursorPointer">
        <img src={Class} className="paddingNav eval" alt="logo" />
        <div className="navText">Classroom</div>
      </div>
      <div className="shareContainer marginTop29 flexCenterCol cursorPointer">
        <img src={Stories} className="paddingNav eval" alt="logo" />
        <div className="navText">Share Stories</div>
      </div>
      <div className="evalsContainer marginTop29 flexCenterCol cursorPointer">
        <img src={Eval} className="paddingNav eval" alt="logo" />
        <div className="navText">Evals</div>
      </div>
    </div>
  );
};

export default LeftNav;

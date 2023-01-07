import "./main.scss";
import Beyond from "./assets/images/beyond.png";
import BeyondBig from "./assets/images/beyondBig.png";
import Article from "./assets/images/article.png";
import Eye from "./assets/images/eye.svg";
import LeftArrow from "./assets/images/leftArrow.svg";
import RightArrow from "./assets/images/rightArrow.svg";
import Edit from "./assets/images/edit.svg";
import RoundTable from "./assets/images/roundTable.png";
import BottomDesign from "./assets/images/bottomDesign.png";
import LeftNav from "./LeftNav";
import RoundFull from "./assets/images/roundFull.png";

const Landing = ({ setOpen }) => {
  return (
    <div className="landingContainer">
      <div className="bodyContainer">
        <div className="navLeft">
        <LeftNav />
        </div>
        <div className="header">
          <div className="leftItem">
            <img src={Beyond} className="beyond" alt="logo" />
            <select className="select">
              <option value="" selected>
                Unit 1
              </option>
            </select>
          </div>
          <div className="rightItem">
            <select className="select">
              <option value="" selected>
                Slide 1 of 4
              </option>
            </select>
          </div>
        </div>
        <div className="slider">
          <div className="article">
            <div className="header">
              <div className="textHeader">
                Vassar Office of Community Engaged Learning | 2021
              </div>
            </div>
            <div className="body">
              <div className="textHeader">Welcome, Amazon employees!</div>
              <img src={Article} className="articleImg" alt="logo" />
              <div className="text">
                <div>
                  This unit is about getting to know the Edge platform and
                  setting our intentions for how we'll work together online and
                  in person. This unit is about getting to know the Edge
                  platform and setting our intentions for how we'll work
                  together online and in person.
                </div>
                <br></br>
                <div>lease click to the next slide to get started.</div>
                <div>
                  This unit is about getting to know the Edge platform and
                  setting our intentions for how we'll work together online and
                  in person. This unit is about getting to know the Edge
                  platform and setting our intentions for how we'll work
                  together online and in person.
                </div>
                <br></br>
                <div>
                  This unit is about getting to know the Edge platform and
                  setting our intentions for how we'll work together online and
                  in person. This unit is about getting to know the Edge
                  platform and setting our intentions for how we'll work
                  together online and in person.
                </div>
                <br></br>
                <div>Please click to the next slide to get started.</div>
                <div>
                  This unit is about getting to know the Edge platform and
                  setting our intentions for how we'll work together online and
                  in person. This unit is about getting to know the Edge
                  platform and setting our intentions for how we'll work
                  together online and in person
                </div>
                <br></br>
                <br></br>
                <br></br>
                <div>Please click to the next slide to get started.</div>
              </div>
            </div>

            <div className="eyeContainer">
              <img src={Eye} className="eye" alt="logo" />
              <div className="count">2</div>
            </div>
            <div className="editContainer">
              <img src={Edit} className="edit" alt="logo" />
            </div>
            <div className="leftArrowContainer">
              <img src={LeftArrow} className="leftArrow" alt="logo" />
            </div>
            <div className="rightArrowContainer">
              <img src={RightArrow} className="rightArrow" alt="logo" />
            </div>
          </div>
        </div>
        <img
          src={RoundTable}
          onClick={() => {
            setOpen((prevState) => {
              return !prevState;
            });
          }}
          className="roundTable"
          alt="logo"
        />
        <img src={BottomDesign} className="bottomDesign" alt="logo" />
        <img src={BeyondBig} className="beyondBig" alt="logo" />
        <div className="slide_mv">
          <img src={LeftArrow} className="arrow m-right-5" alt="logo" />
          <div className="slide">Slide 1 of 4</div>
          <img src={RightArrow} className="arrow m-left-5" alt="logo" />
        </div>
        <div
          className="roundTable_mv"
          onClick={() => {
            setOpen((prevState) => {
              return !prevState;
            });
          }}
        >
          <img src={RoundFull} className="icon" alt="logo" />
          <div className="text">Roundtable</div>
        </div>
      </div>
    </div>
  );
};

export default Landing;

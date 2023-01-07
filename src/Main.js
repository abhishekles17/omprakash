import "./main.scss";
import Header from "./Header";
import Landing from "./Landing";
import { useState, useRef } from "react";
import SidePanel from "./common/SidePanel";
import RoundTable from "./RoundTable";
import RoundFull from "./assets/images/roundFull.png"
import LeftNav from "./LeftNav";

const Main = () => {
  const [open, setOpen] = useState();
  const [openNav, setOpenNav] = useState(false);
  const divRef = useRef(null);


  const handleNavClose = () => {
    setOpenNav(false);
  };


  // useEffect(() => {
  //   if(window.screen.width <= 767) {
  //     divRef.current.style.height = '100vh';
  //   }
  // },[])

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div ref={divRef} className="container">
      <Header setOpenNav={setOpenNav} />
      <Landing setOpen={setOpen} />
      <SidePanel open={open} navigateFrom={window.screen.width <= 767 ? "bottom" : "right"} size={window.screen.width <= 767 ? "100%" : "520px"} onClose={handleClose} headerIcon={RoundFull} title="Roundtable">
        <RoundTable/>
      </SidePanel>
      <SidePanel
        open={openNav}
        navigateFrom="right"
        size="30%"
        onClose={handleNavClose}
      >
      <LeftNav/>
      </SidePanel>
    </div>
  );
};

export default Main;

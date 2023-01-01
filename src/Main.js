import "./main.scss";
import Header from "./Header";
import Landing from "./Landing";
import { useState, useRef, useEffect } from "react";
import SidePanel from "./common/SidePanel";
import RoundTable from "./RoundTable";

const Main = () => {
  const [open, setOpen] = useState();
  const divRef = useRef(null);


  useEffect(() => {
    if(window.screen.width <= 767) {
      divRef.current.style.height = '100vh';
    }
  },[])
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div ref={divRef} className="container">
      <Header />
      <Landing setOpen={setOpen} />
      <SidePanel open={open} onClose={handleClose}>
        <RoundTable/>
      </SidePanel>
    </div>
  );
};

export default Main;

import "./main.scss";
import Header from "./Header";
import Landing from "./Landing";
import { useState } from "react";
import SidePanel from "./common/SidePanel";
import RoundTable from "./RoundTable";

const Main = () => {
  const [open, setOpen] = useState();
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="container">
      <Header />
      <Landing setOpen={setOpen} />
      <SidePanel open={open} onClose={handleClose}>
        <RoundTable/>
      </SidePanel>
    </div>
  );
};

export default Main;

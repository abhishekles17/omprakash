import "./main.scss";
import Header from "./Header";
import LeftNav from "./LeftNav";
import Landing from "./Landing";

const Main = () => {
  return (
    <div className="container">
      <Header />
      <LeftNav/>
      <Landing/>
    </div>
  );
};

export default Main;

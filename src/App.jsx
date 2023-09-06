import "./App.css";
import FeaturedBar from "./components/FeaturedBar/FeaturedBar";
import Header from "./components/Header/Header";
import Intro from "./components/Intro/Intro";
import Location from "./components/LocationAndTime/Location";
import Project from "./components/Project/Project";
import Tools from "./components/Tools/Tools";
import Extra from "./components/Extra/Extra";
import Addendum from "./components/Addendum/Addendum";
import { lith, flyWing } from "./utils";

function App() {
  return (
    <div className="container">
      <div className="container-content">
        <Header />
        <Intro />
        <div className="fixed-after" style={{}}>
          <Location />
          <Tools />
          <br />
          <FeaturedBar />
          <Project project={lith} />
          <Project project={flyWing} />
          {/* <Project project={bookFlow} /> */}
          <Extra />
          <Addendum />
          <Header />
        </div>
      </div>
    </div>
  );
}

export default App;

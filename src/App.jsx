import { BrowserRouter } from "react-router-dom";

import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";
import Earth from "./components/Earth";
import Inovation from "./components/Inovation";
import Realize from "./components/Realize";
import Ourteam from "./components/Ourteam";
import OurPledge from "./components/OurPledge";
// import Earth from "./components/earth";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary ">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center ">
          <Navbar />
          <Hero />
        </div>
        <Inovation />
        <About />
        {/* <Experience /> */}
        {/* <Tech /> */}
        <Realize />
        <Works />
        <Ourteam />
        <Feedbacks />
        <OurPledge />
        <div className="relative z-0 h-screen">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
    // <Earth/>
  );
};

export default App;

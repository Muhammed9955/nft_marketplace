import header_hero from "./imgs/header_hero.jpg";

import "./App.css";
import Navbar from "./components/Navbar/Navbar.component";
import Home from "./pages/Home/Home.page";
import { useRef } from "react";

function App() {
  // scroll functions
  const homeRef: React.MutableRefObject<any> = useRef(null);
  const buyAnApeRef: React.MutableRefObject<any> = useRef(null);
  const roadMapRef: React.MutableRefObject<any> = useRef(null);
  const teamRef: React.MutableRefObject<any> = useRef(null);

  const scrollToHome = () =>
    homeRef.current.scrollIntoView({ behavior: "smooth" });
  const scrollToBuyAnApeRef = () =>
    buyAnApeRef.current.scrollIntoView({ behavior: "smooth" });
  const scrollToRoadMap = () =>
    roadMapRef.current.scrollIntoView({ behavior: "smooth" });
  const scrollToTeam = () =>
    teamRef.current.scrollIntoView({ behavior: "smooth" });
  return (
    <div className="App">
      <div className="App_container">
        <Navbar
          scrollToHome={scrollToHome}
          scrollToBuyAnApeRef={scrollToBuyAnApeRef}
          scrollToRoadMap={scrollToRoadMap}
          scrollToTeam={scrollToTeam}
          homeRef={homeRef}
        />
        <img src={header_hero} alt="header_hero" className="header_hero" />
        <Home
          buyAnApeRef={buyAnApeRef}
          roadMapRef={roadMapRef}
          teamRef={teamRef}
        />
      </div>
    </div>
  );
}

export default App;

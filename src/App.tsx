import header_hero from "./imgs/header_hero.jpg";

import "./App.css";
import Navbar from "./components/Navbar/Navbar.component";
import Home from "./pages/Home/Home.page";

function App() {
  return (
    <div className="App">
      <div style={{ width: "80%", height: "100%", margin: "auto" }}>
        <Navbar />
        <img src={header_hero} alt="header_hero" className="header_hero" />
        <Home />
      </div>
    </div>
  );
}

export default App;

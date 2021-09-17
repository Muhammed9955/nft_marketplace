import "./Navbar.styles.css";
import logo from "../../imgs/BASC_Logo.png";
import { AiFillYoutube } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaDiscord } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { useState } from "react";

interface Props {
  scrollToHome: any;
  scrollToBuyAnApeRef: any;
  scrollToRoadMap: any;
  scrollToTeam: any;
  homeRef: any;
}

const Navbar: React.FC<Props> = ({
  scrollToHome,
  scrollToBuyAnApeRef,
  scrollToRoadMap,
  scrollToTeam,
  homeRef,
}) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="navbar_container" ref={homeRef}>
      <img
        src={logo}
        alt="nav_logo"
        className="nav_logo"
        onClick={() => scrollToHome()}
      />

      <div className="routes_list ">
        <div className="routes_list ">
          <p className="mr_m route_item" onClick={() => scrollToBuyAnApeRef()}>
            buy an ape
          </p>
          <p className="mr_m route_item" onClick={() => scrollToRoadMap()}>
            roadmap
          </p>
          <p className="mr_m route_item" onClick={() => scrollToTeam()}>
            team
          </p>
        </div>
        <div className="nav_icons">
          <AiFillYoutube className="icon mr_m" />
          <AiOutlineInstagram className="icon mr_m" />
          <FaDiscord className="icon mr_m" />
          <AiOutlineTwitter className="icon mr_m" />
        </div>
      </div>

      {/* nav-mob  */}
      <div className="nav_mob">
        <HiOutlineMenuAlt3
          className="nav_mob__icon"
          onClick={() => setOpen(!open)}
        />
        {open && (
          // <div className={open ? "nav_mob__menu acitve" : "nav_mob__menu"}>
          <div className={"nav_mob__menu"}>
            <p
              className="mr_m route_item"
              onClick={() => scrollToBuyAnApeRef()}
            >
              buy an ape
            </p>
            <p className="mr_m route_item" onClick={() => scrollToRoadMap()}>
              roadmap
            </p>
            <p className="mr_m route_item" onClick={() => scrollToTeam()}>
              team
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
export default Navbar;

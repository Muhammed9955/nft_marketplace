import "./Navbar.styles.css";
import logo from "../../imgs/BASC_Logo.png";
import { AiFillYoutube } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaDiscord } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";

interface Props {}

const Navbar: React.FC<Props> = (props) => {
  return (
    <div className="navbar_container">
      <img src={logo} alt="nav_logo" className="nav_logo" />

      <div className="routes_list">
        <div className="routes_list">
          <p className="mr_m route_item">buy an ape</p>
          <p className="mr_m route_item">roadmap</p>
          <p className="mr_m route_item">team</p>
        </div>
        <AiFillYoutube className="icon mr_m" />
        <AiOutlineInstagram className="icon mr_m" />
        <FaDiscord className="icon mr_m" />
        <AiOutlineTwitter className="icon mr_m" />
      </div>
    </div>
  );
};
export default Navbar;

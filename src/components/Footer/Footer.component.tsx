import logo from "../../imgs/BASC_Logo.png";
import "./footer.styles.css";

import { AiFillYoutube } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaDiscord } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { BsArrowRight } from "react-icons/bs";

interface Props {}

const Footer: React.FC<Props> = ({}) => {
  return (
    <div className="footer">
      <div className="">
        <p className="fotter_text">GET ON THE LIST</p>
        <div className="footer_input_container">
          <input
            type="text"
            className="footer_input"
            placeholder="Email Address"
          />
          <div className="input_icon_container">
            <BsArrowRight className="input_icon" />
          </div>
        </div>
      </div>
      <img src={logo} alt="footer_logo" className="footer_logo" />
      <div className="">
        <div className="">
          <AiFillYoutube className="icon mr_m" />
          <AiOutlineInstagram className="icon mr_m" />
          <FaDiscord className="icon mr_m" />
          <AiOutlineTwitter className="icon mr_m" />
        </div>
        <p style={{ fontSize: ".8rem", color: "yellow" }}>
          © 2021 Yuga Labs LLC
        </p>
      </div>
      </div>
  );
};
export default Footer;

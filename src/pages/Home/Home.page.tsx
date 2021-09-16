import HomeRow from "../../components/HomeRow/HomeRow.component";
import "./Home.styles.css";
import mysteryAPE from "../../imgs/mystery-ape.gif";
import toilet from "../../imgs/toilet.png";

import Pharagraph from "../../components/Paragraph/Paragraph.component";
import ImgsContainer from "../../components/ImgsContainer/ImgsContainer.component";
import { cardsArr, imgs, imgsArr2, p1, p2, p3, p4, p5, p6, p7 } from "./data";
import BuyAnAPE from "../../components/BuyAnAPE/BuyAnAPE.component";
import Card from "../../components/Card/Card.component";
import Roadmap from "../../components/Roadmap/Roadmap.component";
import MainButton from "../../components/MainButton/MainButton.component";
import Footer from "../../components/Footer/Footer.component";

interface Props {}

const Home: React.FC<Props> = (props) => {
  const title1 = (
    <h1>
      WELCOME TO THE <br />
      BORED APE YACHT CLUB
    </h1>
  );
  const title2 = (
    <div className="">
      <h1
        style={{ fontWeight: "normal", color: "yellow", fontStyle: "italic" }}
      >
        FAIR DISTRIBUTION <br />{" "}
      </h1>
      <p style={{ color: "white", fontSize: "1.2rem", marginTop: "-1.5rem" }}>
        (BONDING CURVES ARE A PONZI)
      </p>{" "}
    </div>
  );
  const title3 = <h1 className="p_title">THE SPECS</h1>;
  const title4 = <h1 className="p_title">WELCOME TO THE CLUB</h1>;
  const title5 = <h1 className="p_title">THE BATHROOM</h1>;
  const title6 = <h1 className="p_title">ROADMAP ACTIVATIONS</h1>;
  const title7 = <h1 className="p_title">COMMUNITY TOOLS</h1>;
  const title8 = <h1 className="p_title">THE TEAM</h1>;

  const homeRow_2_Right = (
    <div className="homeRow_2_Right">
      Note: Thirty apes are being withheld from the sale. These will be used for
      giveaways, puzzle rewards—and for the creators' BAYC memberships.
    </div>
  );
  const btns = (
    <div className="btns">
      <MainButton title="NFTEXP.IO" />
      <MainButton title="RARITY.TOOLS" />
    </div>
  );
  const p8 = (
    <div className="">
      <p>
        BAYC was created by four friends who set out to make some dope apes,
        test our skills, and try to build something (ridiculous).
      </p>
      <p>
        <span style={{ color: "yellow" }}>GARGAMEL.</span> STARCRAFT OBSESSED.
        EATS SMURFS.
      </p>
      <p>
        <span style={{ color: "yellow" }}> GORDON GONER.</span> REFORMED
        LEVERAGE ADDICT
      </p>
      <p>
        <span style={{ color: "yellow" }}> EMPEROR TOMATO KETCHUP.</span> SPENT
        ALL THEIR MONEY ON FIRST PRESSES AND PET-NAT.
      </p>
      <p>
        <span style={{ color: "yellow" }}> NO SASS.</span> HERE FOR THE APES.
        NOT FOR THE SASS.
      </p>
    </div>
  );
  return (
    <div className="home_container">
      <HomeRow
        leftItem={<Pharagraph title={title1} paragraph={p1} />}
        rightItem={<ImgsContainer imgs={imgs} />}
      />
      <HomeRow
        leftItem={<Pharagraph title={title2} paragraph={p2} />}
        rightItem={homeRow_2_Right}
      />
      <BuyAnAPE />
      <hr style={{ opacity: ".4" }} />
      <HomeRow
        leftItem={<Pharagraph title={title3} paragraph={p3} />}
        rightItem={<img src={mysteryAPE} alt="mysteryAPE" className="gif" />}
      />
      <hr style={{ opacity: ".4" }} />
      <HomeRow leftItem={<Pharagraph title={title4} paragraph={p4} />} />
      <div className="cards_container">
        {cardsArr.map((i) => (
          <Card img={i.img} text={i.text} />
        ))}
      </div>
      <hr style={{ opacity: ".4" }} />
      <HomeRow
        leftItem={<Pharagraph title={title5} paragraph={p5} />}
        rightItem={<img src={toilet} alt="toilet" className="toiletImg" />}
        smL={9}
        smR={2}
      />
      <hr style={{ opacity: ".4" }} />
      <HomeRow
        leftItem={<Pharagraph title={title6} paragraph={p6} />}
        smL={9}
        smR={2}
      />
      <Roadmap />
      <hr style={{ opacity: ".4" }} />
      <HomeRow
        leftItem={<Pharagraph title={title7} paragraph={p7} />}
        rightItem={btns}
        smL={8}
        smR={4}
      />
      <hr style={{ opacity: ".4" }} />
      <HomeRow
        leftItem={<Pharagraph title={title8} customComp={p8} />}
        rightItem={<ImgsContainer imgs={imgsArr2} />}
      />
      <h4>
        VERIFIED SMART CONTRACT ADDRESS:
        <span
          style={{ color: "yellow", marginLeft: "5px", textAlign: "center" }}
        >
          0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D
        </span>
      </h4>
      <hr />
      <Footer />
      <br />
    </div>
  );
};
export default Home;
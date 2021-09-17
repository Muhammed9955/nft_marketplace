import "./BuyAnAPE.styles.css";
interface Props {
  buyAnApeRef: any;
}

const BuyAnAPE: React.FC<Props> = ({ buyAnApeRef }) => {
  return (
    <>
      <div className="BuyAnAPE_container" ref={buyAnApeRef}>
        <h2 className="BuyAnAPE_title">BUY AN APE</h2>
        <p className="BuyAnAPE_p">
          The initial sale has sold out. To get your Bored Ape, check out the
          collection on OpenSea.
        </p>
        <button className="btn">BUY AN APE ON OPENSEA</button>
      </div>
    </>
  );
};
export default BuyAnAPE;

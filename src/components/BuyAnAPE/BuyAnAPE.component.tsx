import "./BuyAnAPE.styles.css";
interface Props {
  buyAnApeRef: any;
}

const BuyAnAPE: React.FC<Props> = ({ buyAnApeRef }) => {
  return (
    <>
      <div className="BuyAnAPE_container" ref={buyAnApeRef}>
        <h2 className="BuyAnAPE_title">BUY AN APE</h2>
        <p className="BuyAnAPE_p">MINT YOUR APE FOR 1 SOL.</p>
        <button className="btn">TRADE A SOL APE ON OPENSEA</button>
      </div>
    </>
  );
};
export default BuyAnAPE;

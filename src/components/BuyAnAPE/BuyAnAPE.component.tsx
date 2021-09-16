import "./BuyAnAPE.styles.css";
interface Props {}

const BuyAnAPE: React.FC<Props> = ({}) => {
  return (
    <>
      <div className="BuyAnAPE_container">
        <h2>BUY AN APE</h2>
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

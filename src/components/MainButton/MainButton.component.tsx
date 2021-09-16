import "./mainButton.styles.css";
interface Props {
  title: string;
}

const HomeRow: React.FC<Props> = ({ title }) => {
  return <button className="mainBtn"> {title} </button>;
};
export default HomeRow;

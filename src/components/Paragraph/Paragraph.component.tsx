import "./Paragraph.styles.css";
interface Props {
  title: any;
  paragraph: String[];
}

const Pharagraph: React.FC<Props> = ({ title, paragraph }) => {
  return (
    <div style={{ margin: "0", width: "auto" }}>
      {/* <h1 className="title">{title} </h1> */}
      {title}
      {paragraph.map((i) => (
        <p style={{ textAlign: "justify", fontSize: "1.2rem" }}>{i}</p>
      ))}
    </div>
  );
};
export default Pharagraph;

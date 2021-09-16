import "./Roadmap.styles.css";
import { Grid } from "@material-ui/core";
import { roadMapData } from "../../pages/Home/data";
import RoadmapItem from "./RoadmapItem.component";
import shirt from "../../imgs/shirt.png";
interface Props {}

const Roadmap: React.FC<Props> = ({}) => {
  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={8}>
          {roadMapData.map((i) => (
            <RoadmapItem text={i.text} percentage={i.percentage} />
          ))}
        </Grid>
        <Grid item xs={12} sm={4}>
          <div className="roadMap_img_container">
            <img src={shirt} alt="" className="roadMap_img" />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};
export default Roadmap;

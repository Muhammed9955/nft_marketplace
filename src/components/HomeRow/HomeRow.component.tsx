import { Grid } from "@material-ui/core";

interface Props {
  leftItem?: any;
  rightItem?: any;
  smR?: any;
  smL?: any;
}

const HomeRow: React.FC<Props> = ({
  leftItem,
  rightItem,
  smL = 8,
  smR = 4,
}) => {
  return (
    <div className="">
      <Grid container spacing={3}>
        <Grid item xs={12} sm={smL}>
          {leftItem}
        </Grid>
        <Grid item xs={12} sm={smR}>
          {rightItem}
        </Grid>
      </Grid>
    </div>
  );
};
export default HomeRow;

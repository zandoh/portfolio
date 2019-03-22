import { AppTheme } from "../../rootStyles";

const styles = (theme: AppTheme) => ({
  detailContainer: {
    backgroundColor: theme.palette.contrastMain,
    padding: "1rem",
    borderTopLeftRadius: "25px",
    borderTopRightRadius: "25px"
  },
  iconX: {
    float: "right",
    stroke: theme.palette.main
  }
});

export type DetailStyles = {
  detailContainer: any;
  iconX: any;
};
export default styles;

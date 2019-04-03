import { AppTheme } from "../../rootStyles";

const styles = (theme: AppTheme) => ({
  detailContainer: {
    backgroundColor: theme.palette.contrastMain,
    padding: "1rem",
    borderTopLeftRadius: "25px",
    borderTopRightRadius: "25px",
    fontFamily: theme.typeography.fontStack.roboto,
    minHeight: "100vh"
  },
  iconX: {
    float: "right",
    stroke: theme.palette.main,
    "&:hover": {
      cursor: "pointer"
    }
  },
  iconLoading: {
    display: "block",
    margin: "0 auto",
    height: "100px",
    width: "100px"
  }
});

export type DetailStyles = {
  detailContainer: any;
  iconX: any;
  iconLoading: any;
};
export default styles;

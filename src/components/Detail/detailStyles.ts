import { AppTheme } from "../../rootStyles";

const styles = (theme: AppTheme) => ({
  detailContainer: {
    backgroundColor: theme.palette.contrastMain,
    padding: "1rem",
    borderTopLeftRadius: "25px",
    borderTopRightRadius: "25px"
  }
});

export type DetailStyles = {
  detailContainer: any;
};
export default styles;

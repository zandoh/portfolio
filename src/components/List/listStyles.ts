import { AppTheme } from "../../rootStyles";

const styles = (theme: AppTheme) => ({
  typistContainer: {
    display: "flex",
    fontSize: "20px",
    fontFamily: theme.typeography.fontStack.roboto
  },
  typist: {
    marginLeft: "4px",
    color: "blue"
  },
  projectContainer: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "stretch"
  },
  project: {
    width: "45%",
    backgroundColor: theme.palette.contrastMain,
    padding: "16px",
    margin: "16px 16px 0 0",
    boxSizing: "border-box",
    minHeight: "300px",
    fontFamily: theme.typeography.fontStack.roboto
  },
  title: {
    fontFamily: theme.typeography.fontStack.roboto
  }
});

export type ListStyles = {
  typistContainer: any;
  typist: any;
  projectContainer: any;
  project: any;
  title: any;
};
export default styles;

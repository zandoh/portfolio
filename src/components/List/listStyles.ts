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
    fontFamily: theme.typeography.fontStack.roboto,
    color: theme.palette.main,
    textDecoration: "none",
    "animation-duration": "1s",
    "animation-fill-mode": "both",
    "&:hover": {
      animationName: "pulse"
    }
  },
  projectTitle: {
    fontSize: "36px",
    fontFamily: theme.typeography.fontStack.roboto,
    fontWeight: "bold",
    padding: "0",
    margin: "125px 0 0 0"
  },
  title: {
    fontFamily: theme.typeography.fontStack.roboto
  },
  "@keyframes pulse": {
    from: {
      "-webkit-transform": "scale3d(1, 1, 1)",
      transform: "scale3d(1, 1, 1)"
    },
    "50%": {
      "-webkit-transform": "scale3d(1.05, 1.05, 1.05)",
      transform: "scale3d(1.05, 1.05, 1.05)"
    },
    to: {
      "-webkit-transform": "scale3d(1, 1, 1)",
      transform: "scale3d(1, 1, 1)"
    }
  }
});

export type ListStyles = {
  typistContainer: any;
  typist: any;
  projectContainer: any;
  project: any;
  projectTitle: any;
  title: any;
};
export default styles;

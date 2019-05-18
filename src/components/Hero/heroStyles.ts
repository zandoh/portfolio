import { AppTheme } from "../../rootTheme";

const styles = (theme: AppTheme) => ({
  mainSection: {
    height: "100%",
    left: 0,
    position: "relative",
    top: 0,
    width: "100%",
    display: "table",
    zIndex: 1
  },
  video: {
    position: "fixed",
    zIndex: -1,
    "@media (min-aspect-ratio: 16:9)": {
      width: "100%",
      height: "auto"
    },
    "@media (max-aspect-ratio: 16:9)": {
      width: "auto",
      height: "100%"
    },
    [`${theme.mediaQuery.m}`]: {
      left: "-50%",
      top: "-25%"
    }
  },
  heroContainer: {
    display: "flex",
    paddingTop: "200px",
    justifyContent: "center",
    width: "100vw",
    fontFamily: `${theme.typeography.fontStack.roboto}`,
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.8)"
  },
  parallax: {
    minHeight: "100%",
    minWidth: "100%",
    position: "fixed",
    zIndex: -1
  },
  copyContainer: {
    position: "fixed",
    top: "50%",
    left: "50%",
    zIndex: 1,
    transform: "translate(-50%,-50%)",
    width: "500px",
    [`${theme.mediaQuery.s}`]: {
      width: "70%"
    }
  },
  tagLine: {
    fontSize: "4.875em",
    fontWeight: "500",
    color: "white",
    padding: 0,
    margin: 0
  },
  description: {
    fontSize: "1.750em",
    lineHeight: "42px",
    color: "white",
    padding: 0,
    margin: 0
  },
  contrastText: {
    color: "red"
  },
  arrow: {
    display: "block",
    color: "white",
    textAlign: "center",
    margin: "50px auto 0 auto",
    "&:hover": {
      cursor: "pointer"
    }
  }
});
export type HeroClasses = {
  mainSection: any;
  video: any;
  heroContainer: any;
  parallax: any;
  copyContainer: any;
  tagLine: any;
  description: any;
  contrastText: any;
  arrow: any;
};
export default styles;

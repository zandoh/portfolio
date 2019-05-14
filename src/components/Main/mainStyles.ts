import { AppTheme } from "../../rootStyles";

const styles = (theme: AppTheme) => ({
  video: {
    position: "fixed",
    zIndex: -1,
    // right: 0,
    // bottom: 0,
    // width: "100vw",
    "@media (min-aspect-ratio: 16:9)": {
      width: "100%",
      height: "auto"
    },
    "@media (max-aspect-ratio: 16:9)": {
      width: "auto",
      height: "100%"
    },
    [`${theme.mediaQuery.m}`]: {
      display: "none"
    }
  },
  mainContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100vw",
    fontFamily: `${theme.typeography.fontStack.roboto}`
  }
});
export type MainClasses = {
  video: any;
  mainContainer: any;
};
export default styles;

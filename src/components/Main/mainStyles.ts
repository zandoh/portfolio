import { AppTheme } from "../../rootStyles";

const styles = (theme: AppTheme) => ({
  "@global": {
    body: {
      margin: 0,
      maxWidth: "100vw",
      overflow: "hidden",
      backgroundColor: `${theme.palette.bodyMain}`,
      backgroundPosition: "right top",
      backgroundRepeat: "repeat-y",
      backgroundSize: "100% auto",
      backgroundPositionY: "21.25rem",
      [`${theme.mixins.l}`]: {
        overflow: "auto"
      }
    }
  },
  main: {
    color: theme.palette.fontMain,
    maxWidth: "1200px",
    minHeight: "100vh",
    padding: "175px 16px 0 16px",
    margin: "0 auto",
    flex: "1 1 auto",
    overflow: "auto",
    boxSizing: "border-box",
    [`${theme.mixins.l}`]: {
      overflow: "unset",
      minHeight: "unset"
    }
  }
});

export type MainClasses = { main: any };
export default styles;

import { AppTheme } from "../../rootTheme";

const styles = (theme: AppTheme) => ({
  "@global": {
    html: {
      height: "100%",
      background: "#000"
    },
    body: {
      height: "100%",
      margin: 0,
      padding: 0
    },
    [`:root`]: {
      fontSize: "16px",
      [`${theme.mediaQuery.s}`]: {
        fontSize: "13px"
      },
      [`${theme.mediaQuery.xs}`]: {
        fontSize: "10px"
      }
    }
  },
  app: {
    display: "flex",
    flexDirection: "column",
    width: "100vw",
    height: "100vh",
    [`${theme.mediaQuery.l}`]: {
      flexDirection: "column"
    }
  },
  section: {
    position: "relative",
    zIndex: 1,
    minHeight: "100vh",
    "& > *": {
      height: "100%",
      overflow: "hidden"
    }
  }
});

export type AppClasses = {
  app: any;
  section: any;
};
export default styles;

import { AppTheme } from "../../rootStyles";

const styles = (theme: AppTheme) => ({
  app: {
    display: "flex",
    flexDirection: "row",
    width: "100vw",
    height: "100vh",
    [`${theme.mixins.l}`]: {
      flexDirection: "column"
    }
  }
});

export type AppClasses = { app: any };
export default styles;

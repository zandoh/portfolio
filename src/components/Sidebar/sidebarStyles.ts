import { AppTheme } from "../../rootStyles";

const styles = (theme: AppTheme) => ({
  sidebar: {
    width: "250px",
    maxHeight: "100vh",
    padding: "1rem",
    flex: "0 0 auto",
    display: "flex",
    flexFlow: "row wrap",
    alignItems: "center",
    paddingTop: "50px",
    justifyContent: "center",
    color: theme.palette.dark,
    [`${theme.mixins.l}`]: {
      width: "100vw",
      height: "auto"
    }
  },
  img: {
    filter: "grayscale(100%)",
    height: "150px",
    width: "auto",
    borderRadius: "100px"
  },
  title: {
    margin: "0",
    fontSize: "25px",
    fontWeight: "bold",
    fontFamily: theme.typeography.fontStack.roboto
  },
  iconContainer: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%"
  },
  summary: {
    fontFamily: theme.typeography.fontStack.roboto,
    fontWeight: "normal"
  }
});
export type SidebarClasses = {
  sidebar: any;
  img: any;
  title: any;
  iconContainer: any;
  summary: any;
};
export default styles;

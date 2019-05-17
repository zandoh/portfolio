import { AppTheme } from "../../rootTheme";

const styles = (theme: AppTheme) => ({
  projectsContainer: {
    background: "white",
    padding: "150px 100px 25px"
  },
  title: {
    margin: "0px 0px 12px 0px",
    fontSize: "42px",
    fontFamily: `${theme.typeography.fontStack.roboto}`,
    fontWeight: "700",
    color: "rgba(1,1,1,1)",
    letterSpacing: "2px",
    textTransform: "lowercase"
  },
  description: {
    width: "30%",
    margin: "0px 0px",
    fontFamily: `${theme.typeography.fontStack.roboto}`,
    fontSize: "16px",
    fontWeight: "500",
    lineHeight: "28px",
    color: "rgba(71,71,71,0.9)"
  },
  listImageWrapper: {
    display: "flex",
    padding: "70px 0 0"
  },
  listContainer: {
    flex: "1 1 50%",
    margin: "0 auto"
  },
  imageContainer: {
    flex: "1 1 50%"
  },
  listLink: {
    textDecoration: "none",
    fontWeight: "700",
    fontSize: "26px",
    lineHeight: "32px",
    wordBreak: "break-word",
    padding: 0,
    "& > h2": {
      color: "black",
      transition: "color .2s ease",
      fontFamily: `${theme.typeography.fontStack.roboto}`,
      textTransform: "lowercase",
      margin: "0",
      padding: "0",
      fontSize: "100%",
      outline: "none",
      verticalAlign: "baseline",
      background: "transparent",
      "&:hover": {
        color: "grey"
      }
    }
  },
  listArticle: {
    display: "flex",
    justifyContent: "center",
    padding: "25px 0",
    maxWidth: "50%"
  }
});
export type ProjectsClasses = {
  projectsContainer: any;
  title: any;
  description: any;
  listImageWrapper: any;
  listContainer: any;
  imageContainer: any;
  listLink: any;
  listArticle: any;
};
export default styles;

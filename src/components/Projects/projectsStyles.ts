import { AppTheme } from "../../rootTheme";

const styles = (theme: AppTheme) => ({
  projectsContainer: {
    background: `${theme.palette.background}`,
    padding: "150px 100px 25px",
    [`${theme.mediaQuery.s}`]: {
      padding: "150px 50px 25px"
    }
  },
  title: {
    margin: "0px 0px 12px 0px",
    fontSize: "42px",
    fontFamily: `${theme.typeography.fontStack.roboto}`,
    fontDisplay: "auto",
    fontWeight: "700",
    color: `${theme.palette.textInvert}`,
    letterSpacing: "2px",
    textTransform: "lowercase"
  },
  description: {
    width: "30%",
    margin: "0px 0px",
    fontFamily: `${theme.typeography.fontStack.roboto}`,
    fontDisplay: "auto",
    fontSize: "16px",
    fontWeight: "500",
    lineHeight: "28px",
    color: `${theme.palette.textInvertLight}`,
    [`${theme.mediaQuery.l}`]: {
      width: "50%"
    },
    [`${theme.mediaQuery.s}`]: {
      width: "100%"
    }
  },
  listImageWrapper: {
    display: "flex",
    padding: "70px 0 0"
  },
  listContainer: {
    flex: "1 1 50%",
    margin: "0 auto",
    paddingRight: "75px",
    [`${theme.mediaQuery.l}`]: {
      flex: "1 1 100%"
    },
    [`${theme.mediaQuery.s}`]: {
      paddingRight: "0"
    }
  },
  imageContainer: {
    flex: "1 1 50%",
    marginTop: "-200px"
  },
  listLink: {
    textDecoration: "none",
    fontWeight: "700",
    fontSize: "26px",
    lineHeight: "32px",
    wordBreak: "break-word",
    padding: 0,
    "& > h2": {
      color: `${theme.palette.textInvert}`,
      transition: "color .2s ease",
      fontFamily: `${theme.typeography.fontStack.roboto}`,
      fontDisplay: "auto",
      textTransform: "lowercase",
      margin: "0",
      padding: "0",
      fontSize: "100%",
      outline: "none",
      verticalAlign: "baseline",
      background: "transparent",
      "&:hover": {
        color: `${theme.palette.textInvertHover}`
      }
    }
  },
  listArticle: {
    display: "flex",
    justifyContent: "flex-end",
    padding: "25px 0",
    width: "100%",
    [`${theme.mediaQuery.l}`]: {
      justifyContent: "flex-start"
    }
  },
  projectImage: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    maxWidth: "510px",
    maxHeight: "720px",
    overflow: "hidden"
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
  projectImage: any;
};
export default styles;

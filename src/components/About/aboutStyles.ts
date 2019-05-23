import { AppTheme } from "../../rootTheme";

const styles = (theme: AppTheme) => ({
  aboutSection: {
    display: "flex",
    height: "50%",
    "& > *": {
      height: "auto",
      flex: "1 1 50%"
    },
    [`${theme.mediaQuery.l}`]: {
      flexDirection: "column-reverse"
    }
  },
  descriptionContainer: {
    background: `${theme.palette.backgroundInvert}`,
    padding: "150px 100px 25px",
    color: `${theme.palette.textInvert}`,
    [`${theme.mediaQuery.s}`]: {
      padding: "150px 50px 25px"
    }
  },
  avatarContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: `black`,
    "& > svg": {
      height: "500px",
      width: "500px",
      [`${theme.mediaQuery.l}`]: {
        height: "280px",
        width: "280px"
      }
    }
  },
  title: {
    margin: "0px 0px 12px 0px",
    fontSize: "42px",
    fontFamily: `${theme.typeography.fontStack.roboto}`,
    fontDisplay: "auto",
    fontWeight: "700",
    letterSpacing: "2px",
    textTransform: "lowercase"
  },
  description: {
    margin: "0px 0px 18px 0px",
    fontFamily: `${theme.typeography.fontStack.roboto}`,
    fontSize: "24px",
    fontWeight: "500",
    lineHeight: "36px"
  },
  iconContainer: {
    marginTop: "200px"
  },
  svg: {
    marginRight: "50px",
    transition: "color .2s ease",
    fill: `${theme.palette.textInvert}`,
    height: "50",
    width: "50",
    "&:hover": {
      fill: `${theme.palette.textInvertHover}`
    }
  }
});
export type AboutClasses = {
  aboutSection: any;
  descriptionContainer: any;
  avatarContainer: any;
  title: any;
  description: any;
  iconContainer: any;
  svg: any;
};
export default styles;

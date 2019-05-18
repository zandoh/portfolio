import { AppTheme } from "../../rootTheme";

const styles = (theme: AppTheme) => ({
  aboutSection: {
    display: "flex",
    height: "50%",
    "& > *": {
      height: "100%",
      flex: "1 1 50%"
    }
  },
  descriptionContainer: {
    background: "yellow"
  },
  avatarContainer: {
    background: "black"
  }
});
export type AboutClasses = {
  aboutSection: any;
  descriptionContainer: any;
  avatarContainer: any;
};
export default styles;

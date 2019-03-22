import { AppTheme } from "../../rootStyles";

const styles = (theme: AppTheme) => ({
  commitContainer: {
    display: "flex",
    height: "100px"
  },
  img: {
    width: "50px",
    height: "50px"
  },
  messageContainer: {
    display: "flex",
    flexDirection: "column"
  }
});

export type CommitStyles = {
  img: any;
  messageContainer: any;
  commitContainer: any;
};
export default styles;

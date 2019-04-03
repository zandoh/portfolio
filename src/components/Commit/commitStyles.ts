import { AppTheme } from "../../rootStyles";

const styles = (theme: AppTheme) => ({
  commitContainer: {
    display: "flex",
    height: "100px"
  },
  img: {
    minWidth: "50px",
    height: "50px",
    borderRadius: "25px"
  },
  messageContainer: {
    display: "flex",
    flexDirection: "column",
    marginLeft: "16px"
  }
});

export type CommitStyles = {
  img: any;
  messageContainer: any;
  commitContainer: any;
};
export default styles;

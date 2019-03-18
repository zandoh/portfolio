import { AppTheme } from "../../rootStyles";

const styles = (theme: AppTheme) => ({
  typistContainer: {
    display: "flex",
    fontSize: "20px"
  },
  typist: {
    marginLeft: "4px",
    color: "blue"
  },
  projectContainer: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "stretch"
  },
  project: {
    width: "45%",
    backgroundColor: "green",
    padding: "16px",
    margin: "16px",
    boxSizing: "border-box"
  }
});

export type ListStyles = {
  typistContainer: any;
  typist: any;
  projectContainer: any;
  project: any;
};
export default styles;

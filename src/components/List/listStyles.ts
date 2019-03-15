import { AppTheme } from "../../rootStyles";

const styles = (theme: AppTheme) => ({
  typistContainer: {
    display: "flex",
    fontSize: "20px"
  },
  typist: {
    marginLeft: "4px",
    color: "blue"
  }
});

export type ListStyles = { typistContainer: any; typist: any };
export default styles;

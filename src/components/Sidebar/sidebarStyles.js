const styles = theme => ({
  sidebar: {
    display: "flex",
    flexFlow: "row wrap",
    alignItems: "center",
    paddingTop: "50px"
  },
  img: {
    filter: "grayscale(100%)",
    height: "150px",
    width: "auto",
    borderRadius: "100px"
  },
  title: {
    marginTop: "45px",
    fontSize: "25px"
  },
  iconContainer: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%"
  }
});

export default styles;

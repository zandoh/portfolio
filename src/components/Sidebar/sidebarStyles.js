const styles = theme => ({
  sidebar: {
    width: "225px",
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

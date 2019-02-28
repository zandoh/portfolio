const styles = theme => ({
  main: {
    color: theme.palette.light,
    background: theme.palette.dark,
    maxWidth: "1200px",
    minHeight: "100vh",
    padding: "1rem",
    flex: "1 1 auto",
    overflow: "auto",
    [`${theme.mixins.l}`]: {
      overflow: "unset",
      minHeight: "unset"
    }
  },
  typistContainer: {
    display: "inline-flex",
    fontSize: "20px"
  },
  typist: {
    marginLeft: "4px",
    color: "blue"
  }
});

export default styles;

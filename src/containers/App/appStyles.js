const styles = theme => ({
  app: {
    display: "flex",
    flexDirection: "row",
    width: "100vw",
    height: "100vh",
    [`${theme.mixins.l}`]: {
      flexDirection: "column"
    }
  }
});

export default styles;

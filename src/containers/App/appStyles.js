const styles = theme => ({
  "@global": {
    body: {
      margin: 0,
      maxWidth: "100vw",
      overflow: "hidden",
      background: "red",
      [`${theme.mixins.l}`]: {
        overflow: "auto"
      }
    }
  },
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

const styles = theme => ({
  body: {
    margin: 0,
    overflow: "hidden",
    [`${theme.mixins.l}`]: {
      overflow: "auto"
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
  },
  sidebar: {
    background: theme.dark.light,
    width: "225px",
    minHeight: "100vh",
    padding: "1rem",
    flex: "0 0 auto",
    [`${theme.mixins.l}`]: {
      width: "100vw"
    }
  },
  main: {
    background: theme.dark.dark,
    maxWidth: "1200px",
    minHeight: "100vh",
    padding: "1rem",
    flex: "1 1 auto",
    overflow: "auto",
    [`${theme.mixins.l}`]: {
      overflow: "unset",
      minHeight: "unset"
    }
  }
});

export default styles;

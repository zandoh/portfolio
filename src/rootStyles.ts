const theme = {
  typeography: {
    fontStack: {
      roboto: `"Roboto", "Helvetica", "Arial", "sans-serif"`
    }
  },
  palette: {
    light: "",
    main: "",
    dark: "",
    fontLight: "",
    fontMain: "",
    fontDark: "",
    bodyMain: "",
    bodySvg: ""
  },
  mixins: {
    xl: "@media all and (max-width: 1199px)",
    l: "@media all and (max-width: 991px)",
    m: "@media all (max-width: 768px)",
    s: "@media all and (max-width: 575px)",
    xs: "@media all and (max-width: 400px)"
  }
};

export type AppTheme = typeof theme;
export type AppPalette = typeof theme.palette;
export default theme;

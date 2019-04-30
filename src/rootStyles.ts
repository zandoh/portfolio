import { ThemePaletteDark } from "./themeDark";
import { ThemePaletteLight } from "./themeLight";

const theme = {
  typeography: {
    fontStack: {
      roboto: `"Roboto", "Helvetica", "Arial", "sans-serif"`
    }
  },
  mixins: {
    xl: "@media all and (max-width: 1199px)",
    l: "@media all and (max-width: 991px)",
    m: "@media all (max-width: 768px)",
    s: "@media all and (max-width: 575px)",
    xs: "@media all and (max-width: 400px)"
  }
};

export type AppTheme = {
  typeography: typeof theme.typeography;
  palette: ThemePaletteDark | ThemePaletteLight;
  mixins: typeof theme.mixins;
};
export default theme;

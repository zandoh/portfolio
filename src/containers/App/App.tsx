import React, { Component } from "react";
import Main from "../../components/Main/Main";
import injectSheet, { ThemeProvider } from "react-jss";
import styles, { AppClasses } from "./appStyles";
import darkTheme, { ThemePaletteDark } from "../../themeDark";
import lightTheme, { ThemePaletteLight } from "../../themeLight";
import { AppTheme } from "../../rootTheme";

interface AppProps {
  theme: AppTheme;
  classes: AppClasses;
}

interface AppState {
  theme: AppTheme;
  palette: ThemePaletteDark | ThemePaletteLight;
  checked: boolean;
  themePref: string;
}

class App extends Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
      theme: this.props.theme,
      palette: darkTheme,
      checked: false,
      themePref: "dark"
    };
  }

  componentDidMount() {
    this.setState({
      themePref: window.__getTheme(),
      checked: window.__getTheme() === "light" ? true : false,
      palette: window.__getTheme() === "light" ? lightTheme : darkTheme
    });
  }

  changeTheme = (checked: boolean) => {
    const themePref = checked ? "light" : "dark";
    const palette = themePref === "light" ? lightTheme : darkTheme;
    this.setState({
      checked,
      themePref,
      palette
    });
    window.__setTheme(themePref);
  };

  render() {
    const { classes } = this.props;
    const theme = {
      ...this.state.theme,
      palette: this.state.palette
    };
    return (
      <ThemeProvider theme={theme}>
        <div className={classes.app}>
          <Main changeTheme={this.changeTheme} checked={this.state.checked} />
          <section style={{ background: "blue" }} className={classes.section}>
            <p>
              Cookie cotton candy powder. Unerdwear.com sweet cake. Powder
              jujubes marshmallow marzipan. Jelly jelly-o sweet apple pie
              brownie apple pie. Bonbon sweet roll carrot cake tart gummi bears
              drag&eacute;e sweet. Marshmallow candy powder. Applicake danish
              apple pie marzipan cheesecake icing macaroon sweet biscuit. Sesame
              snaps jelly-o pie cheesecake tootsie roll chocolate cake
              souffl&eacute; cotton candy. Sweet roll brownie applicake. Sweet
              roll apple pie sesame snaps biscuit bear claw sweet roll chocolate
              bar. Tart sweet roll unerdwear.com pie cake brownie carrot cake.
              Tootsie roll lollipop marshmallow.
            </p>

            <p>
              Jelly-o lollipop pie bear claw powder macaroon lollipop lemon
              drops. Topping jujubes jujubes sesame snaps fruitcake biscuit
              chocolate jelly beans. Cookie dessert gingerbread. Pudding sweet
              applicake. Wafer sweet roll marshmallow toffee jelly halvah.
              Drag&eacute;e lemon drops oat cake tart halvah jujubes jelly
              biscuit. Pie wafer wafer jelly-o jelly gummies sugar plum pudding.
              Topping oat cake bear claw danish cookie brownie. Jelly beans
              tootsie roll gingerbread pastry cookie liquorice applicake. Gummi
              bears biscuit icing toffee chocolate cake. Powder cheesecake
              drag&eacute;e brownie applicake lollipop. Jelly beans gingerbread
              unerdwear.com chocolate bar cake. Chocolate cake caramels dessert
              sweet topping icing gingerbread sesame snaps marzipan.
            </p>

            <p>
              Muffin chocolate cake pudding sweet roll donut marshmallow tootsie
              roll gingerbread candy canes. Marshmallow cookie topping cookie
              tiramisu. Unerdwear.com donut brownie unerdwear.com brownie
              pudding sesame snaps. Souffl&eacute; danish candy sweet sweet
              candy. Gummi bears dessert jelly macaroon tootsie roll gummi bears
              lemon drops sweet. Applicake sugar plum gummies chupa chups
              halvah. Gummies souffl&eacute; icing lollipop. Ice cream chocolate
              caramels pudding. Marzipan cupcake candy jelly beans fruitcake
              tiramisu wafer danish bonbon. Halvah biscuit chocolate halvah.
              Cookie danish cookie lemon drops candy chocolate cake. Jelly beans
              pastry dessert gummies cake sweet danish.
            </p>

            <p>
              Macaroon candy sweet fruitcake jelly beans. Pudding applicake
              gummies sweet roll. Drag&eacute;e bear claw tiramisu oat cake
              chocolate bar wafer. Pastry donut chocolate cake danish sesame
              snaps tiramisu jujubes apple pie wafer. Sesame snaps tootsie roll
              drag&eacute;e croissant gummi bears jujubes dessert. Icing jujubes
              sugar plum fruitcake brownie cookie souffl&eacute;. Candy oat cake
              bonbon sesame snaps. Donut biscuit icing liquorice. Applicake
              lollipop liquorice pudding. Dessert muffin chupa chups. Jelly-o
              bear claw caramels souffl&eacute; bonbon toffee gingerbread.
              Toffee cake lollipop chocolate bar. Jelly-o tiramisu cake carrot
              cake carrot cake tiramisu sesame snaps. Macaroon cake marzipan
              macaroon danish croissant halvah unerdwear.com.
            </p>

            <p>
              Tart gummies cotton candy marshmallow chocolate gummi bears
              dessert. Sesame snaps powder liquorice donut. Croissant chocolate
              ice cream jelly-o cupcake sweet roll jelly-o chocolate bar
              liquorice. Brownie biscuit croissant ice cream. Candy chocolate
              sweet roll gummi bears pastry cupcake pie lollipop pie. Brownie
              lemon drops powder muffin. Gummi bears apple pie apple pie
              applicake powder. Wafer gummi bears chocolate brownie halvah.
              Gingerbread sesame snaps unerdwear.com cookie sweet roll.
              Gingerbread gummies lemon drops pie sesame snaps jujubes applicake
              cupcake. Drag&eacute;e danish souffl&eacute; candy canes icing
              tart. Lollipop tootsie roll croissant biscuit pastry jelly-o
              tootsie roll pastry. Pastry cake applicake icing cake danish
              lollipop. Croissant souffl&eacute; marshmallow gummi bears dessert
              souffl&eacute; marshmallow cookie candy.
            </p>

            <p>
              Sweet macaroon cheesecake halvah toffee marzipan sweet tootsie
              roll. Chocolate lemon drops powder chupa chups cake. Jujubes
              cotton candy liquorice brownie pudding pudding. Pie sesame snaps
              topping macaroon lemon drops. Chocolate bar gingerbread caramels
              bear claw cookie icing macaroon gummi bears drag&eacute;e. Cupcake
              cheesecake gummies cotton candy sweet roll. Pudding marzipan oat
              cake. Muffin chupa chups lemon drops. Souffl&eacute; caramels
              cookie. Chocolate cake fruitcake pudding powder dessert fruitcake
              pie wafer. Sugar plum pudding sweet lemon drops jelly-o pie. Candy
              canes sweet roll wafer croissant. Gummi bears tart toffee.
              Chocolate cake lollipop jujubes halvah.
            </p>

            <p>
              Pudding candy chocolate cake donut gingerbread toffee cotton candy
              jujubes. Gummi bears carrot cake tart macaroon cheesecake sugar
              plum chocolate cake gummi bears. Biscuit fruitcake pastry apple
              pie carrot cake bonbon jelly beans. Fruitcake sugar plum
              drag&eacute;e. Oat cake lollipop toffee lollipop sugar plum powder
              caramels. Macaroon chocolate pudding ice cream gummies pie donut
              jelly-o. Candy canes macaroon powder pastry. Pudding candy canes
              bonbon pie topping cupcake sweet tootsie roll. Cake marshmallow
              sugar plum chupa chups macaroon carrot cake marzipan lollipop
              topping. Gummi bears unerdwear.com muffin cupcake jelly beans tart
              souffl&eacute;. Danish wafer cheesecake fruitcake marshmallow
              sweet carrot cake cookie brownie. Icing muffin lollipop jelly.
            </p>
          </section>
        </div>
      </ThemeProvider>
    );
  }
}

export default injectSheet(styles)(App);

import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import { Home, Login } from "../screens";

const RootStack = createStackNavigator(
  {
    Login: { screen: Login },
    Main: { screen: Home }
  },
  {
    mode: "modal",
    headerMode: "none"
  }
);

const AppContainer = createAppContainer(RootStack);

const HOME_SCREEN = "Main";
const LOGIN_SCREEN = "Login";

export { HOME_SCREEN, LOGIN_SCREEN };
export default AppContainer;

import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import { ComponentScreen } from "./src/screens/ComponentScreen";
import { Ejercicio1 } from "./src/screens/Ejercicio1";
const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentScreen, Ejercicio1
  },
  {
    initialRouteName: "Ejercicio1",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);

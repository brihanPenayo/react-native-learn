import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import { ComponentScreen } from "./src/screens/ComponentScreen";
import { Ejercicio1 } from "./src/screens/Ejercicio1";
import { ListScreen } from "./src/screens/ListScreen";
import { Ejercicio2 } from "./src/screens/Ejercicio2";
const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentScreen, Ejercicio1, ListScreen, Ejercicio2
  },
  {
    initialRouteName: "Ejercicio2",
    defaultNavigationOptions: {
      title: "ReactNative App",
    },
  }
);

export default createAppContainer(navigator);

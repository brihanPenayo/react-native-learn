import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import { ComponentScreen } from "./src/screens/ComponentScreen";
import { Ejercicio1 } from "./src/screens/Ejercicio1";
import { ListScreen } from "./src/screens/ListScreen";
import { Ejercicio2 } from "./src/screens/Ejercicio2";
import { ImageScreen } from "./src/screens/ImageScreen";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentScreen,
    List: ListScreen,
    Ejercicio1: Ejercicio1,
    Ejercicio2: Ejercicio2,
    ImageScreen: ImageScreen
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "ReactNative App",
    },
  }
);

export default createAppContainer(navigator);

import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import SearchScreen from "./src/screens/SearchScreen";
import ResultsShowScreen from "./src/screens/ResultsShowScreen";
import HomeScreen from "./src/screens/HomeScreen";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Search: SearchScreen,
    ResultsShow: ResultsShowScreen,
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "Restaurants",
    },
  }
);

export default createAppContainer(navigator);

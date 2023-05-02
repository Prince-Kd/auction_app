import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../../features/auth/screens/login";
import Home from "../../features/home/screens/home";
import { useBottomNavStore } from "../../hooks/useBottomNavStore";
import Favorite from "../../features/favorite/screens/favorite";

const Stack = createNativeStackNavigator();

export default function MainStackNavigator() {
  const activeIndex = useBottomNavStore((state) => state.activeIndex);
  const routes = [<Home />, <Favorite />];
  return routes[activeIndex];
}

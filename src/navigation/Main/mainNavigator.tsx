import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../../features/auth/screens/login";
import Home from "../../features/home/screens/home";
import { useBottomNavStore } from "../../hooks/useBottomNavStore";
import Favorite from "../../features/favorite/screens/favorite";
import Profile from "../../features/profile/screens/profile";
import HomeStack from "./homeStack";
import CreateAuction from "../../features/auction/screens/createAuction";

const Stack = createNativeStackNavigator();

export default function MainStackNavigator() {
  const activeIndex = useBottomNavStore((state) => state.activeIndex);
  const routes = [<HomeStack />, <Favorite />, <CreateAuction />, <Favorite />, <Profile />];
  return routes[activeIndex];
}

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../../features/auth/screens/login";
import Home from "../../features/home/screens/home";
import { useBottomNavStore } from "../../hooks/useBottomNavStore";
import Favorite from "../../features/favorite/screens/favorite";
import Profile from "../../features/profile/screens/profile";
import HomeStack from "./homeStack";
import CreateAuction from "../../features/auction/screens/createAuction";
import Notifications from "../../features/notifications/screens/notifications";
import ProfileStack from "./profileStack";

const Stack = createNativeStackNavigator();

export default function MainStackNavigator() {
  const activeIndex = useBottomNavStore((state) => state.activeIndex);
  const routes = [
    <HomeStack />,
    <Favorite />,
    <CreateAuction />,
    <Notifications />,
    <ProfileStack />,
  ];
  return routes[activeIndex];
}

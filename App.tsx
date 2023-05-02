import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { useAuthStore } from "./src/features/auth/store/auth";
import MainStackNavigator from "./src/navigation/Auth/authNavigator";
import AuthStackNavigator from "./src/navigation/Auth/authNavigator";
import Home from "./src/features/home/screens/home";

export default function App() {
  const token = useAuthStore((state) => state.token);
  return (
    <NavigationContainer>
      {!token ? <Home /> : <AuthStackNavigator />}
    </NavigationContainer>
  );
}

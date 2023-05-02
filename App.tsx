import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { useAuthStore } from "./src/features/auth/store/auth";
import AuthStackNavigator from "./src/navigation/Auth/authNavigator";
import MainStackNavigator from "./src/navigation/Main/mainNavigator";

export default function App() {
  const token = useAuthStore((state) => state.token);
  return (
    <NavigationContainer>
      {!token ? <MainStackNavigator /> : <AuthStackNavigator />}
    </NavigationContainer>
  );
}

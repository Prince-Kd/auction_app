import { StatusBar } from "expo-status-bar";
import { useState, useEffect, useCallback } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useAuthStore } from "./src/features/auth/store/auth";
import AuthStackNavigator from "./src/navigation/Auth/authNavigator";
import MainStackNavigator from "./src/navigation/Main/mainNavigator";
import * as SplashScreen from "expo-splash-screen";
import { View } from "react-native";
import { useHomeStore } from "./src/features/home/store/homeStore";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);
  const { token, getToken } = useAuthStore((state) => state);
  const {fetchUser } = useHomeStore(state => state);

  useEffect(() => {
    async function prepare() {
      try {
        // Load token from local storage
        await getToken();
        await fetchUser();
        // Artificially delay for two seconds to simulate a slow loading
        // experience. Please remove this if you copy and paste the code!
        //  await new Promise((resolve) => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      // This tells the splash screen to hide immediately! If we call this after
      // `setAppIsReady`, then we may see a blank screen while the app is
      // loading its initial state and rendering its first pixels. So instead,
      // we hide the splash screen once we know the root view has already
      // performed layout.
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  

  return (
    <View onLayout={onLayoutRootView} style={{ flex: 1 }}>
      <NavigationContainer>
        {token ? <MainStackNavigator /> : <AuthStackNavigator />}
      </NavigationContainer>
    </View>
  );
}

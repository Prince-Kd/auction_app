import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Profile from "../../features/profile/screens/profile";

const Stack = createNativeStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Profile" component={Profile} />
      {/* <Stack.Screen name="Product Details" component={ProductDetails} /> */}
    </Stack.Navigator>
  );
}

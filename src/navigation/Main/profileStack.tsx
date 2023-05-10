import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Profile from "../../features/profile/screens/profile";
// import Account from "../../features/profile/screens/profile";
import AccountDetails from "../../features/profile/screens/accoutDetails";

const Stack = createNativeStackNavigator();

export default function ProfileStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Profile" component={Profile} />
      {/* <Stack.Screen name="Account" component={Account} /> */}
      <Stack.Screen name="Account Details" component={AccountDetails} />
    </Stack.Navigator>
  );
}

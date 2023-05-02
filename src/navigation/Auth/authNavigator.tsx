import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../../features/auth/screens/login";
import Signup from "../../features/auth/screens/signup";
import ForgotPassword from "../../features/auth/screens/forgotPassword";
import VerifyOtp from "../../features/auth/screens/verifyOtp";
import ProductDetails from "../../product_details/productDetails";

const Stack = createNativeStackNavigator();

export default function AuthStackNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="Forgot password" component={ForgotPassword} />
      <Stack.Screen name="Verify" component={VerifyOtp} />
      <Stack.Screen name="Details" component={ProductDetails} />
    </Stack.Navigator>
  );
}

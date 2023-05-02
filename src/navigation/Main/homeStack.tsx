import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../../features/home/screens/home";
import ProductDetails from "../../features/products/product_details/productDetails";

const Stack = createNativeStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Product Details" component={ProductDetails} />
    </Stack.Navigator>
  );
}

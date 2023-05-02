import { View, Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function ProductDetails() {
  <View
    style={{
      flexDirection: "row",
      justifyContent: "space-between",
      paddingHorizontal: 20,
    }}
  >
    <MaterialIcons name="notifications-none" size={24} color="black" />
    <Text style={{ fontSize: 18, fontWeight: "500" }}>Details</Text>
    <MaterialIcons name="ios-share" size={24} color="black" />
  </View>;
}

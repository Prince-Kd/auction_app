import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function ProductDetails({ navigation }: any) {
  return (
    <SafeAreaView>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: 20,
          paddingTop: 10,
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <MaterialIcons name="arrow-back-ios" size={24} color="black" />
          </TouchableOpacity>
          <Text style={{ fontSize: 18, fontWeight: "500" }}>
            Product Details
          </Text>
        </View>
        <TouchableOpacity>
          <MaterialIcons name="ios-share" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

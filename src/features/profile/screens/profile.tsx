import { View, StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import AppBar from "../../../components/appBar";
import { StatusBar } from "expo-status-bar";
import FloatingBottomTab from "../../../components/floatingBottomTab";
import { Feather } from "@expo/vector-icons";

export default function Account({ navigation }: any) {
  return (
    <SafeAreaView style={{ position: "relative", flex: 1 }}>
      <View style={styles.container}>
        <AppBar title="My Account" />
        <View style={{ paddingHorizontal: 20, paddingTop: 40 }}>
          <View style={styles.listTile}>
            <View style={{ flexDirection: "row", gap: 10 }}>
              <Feather key="user" name="user" size={24} color="black" />
              <Text style={{ fontSize: 18 }}>Account</Text>
            </View>
            <Feather name="chevron-right" size={24} color="black" />
          </View>
          <View style={styles.listTile}>
            <View style={{ flexDirection: "row", gap: 10 }}>
              <Feather key="map-pin" name="map-pin" size={24} color="black" />
              <Text style={{ fontSize: 18 }}>Address</Text>
            </View>
            <Feather name="chevron-right" size={24} color="black" />
          </View>
          <View style={styles.listTile}>
            <View style={{ flexDirection: "row", gap: 10 }}>
              <Feather key="shopping-bag" name="shopping-bag" size={24} color="black" />
              <Text style={{ fontSize: 18 }}>Orders</Text>
            </View>
            <Feather name="chevron-right" size={24} color="black" />
          </View>
          <View style={styles.listTile}>
            <View style={{ flexDirection: "row", gap: 10 }}>
              <Feather key="tag" name="tag" size={24} color="black" />
              <Text style={{ fontSize: 18 }}>My Offers</Text>
            </View>
            <Feather name="chevron-right" size={24} color="black" />
          </View>
          <View style={styles.listTile}>
            <View style={{ flexDirection: "row", gap: 10 }}>
              <Feather key="user" name="user" size={24} color="black" />
              <Text style={{ fontSize: 18 }}>My Auction Lots</Text>
            </View>
            <Feather name="chevron-right" size={24} color="black" />
          </View>
          <View style={styles.listTile}>
            <View style={{ flexDirection: "row", gap: 10 }}>
              <Feather key="credit-card" name="credit-card" size={24} color="black" />
              <Text style={{ fontSize: 18 }}>Payment Info</Text>
            </View>
            <Feather name="chevron-right" size={24} color="black" />
          </View>
          
        </View>

        <FloatingBottomTab />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    flex: 1,
  },

  listTile: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 20,
  },
});

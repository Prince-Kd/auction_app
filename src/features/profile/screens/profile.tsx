import { View, StyleSheet, Text, ScrollView, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import AppBar from "../../../components/appBar";
import { StatusBar } from "expo-status-bar";
import FloatingBottomTab from "../../../components/floatingBottomTab";
import { Feather } from "@expo/vector-icons";
import { Divider } from "react-native-paper";
import { useAuthStore } from "../../auth/store/auth";
import { useBottomNavStore } from "../../../hooks/useBottomNavStore";

export default function Account({ navigation }: any) {
  const { logout } = useAuthStore((state) => state);
  const { updateActive } = useBottomNavStore(state => state);

  return (
    <SafeAreaView style={{ position: "relative", flex: 1 }}>
      <ScrollView>
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
                <Feather
                  key="shopping-bag"
                  name="shopping-bag"
                  size={24}
                  color="black"
                />
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
                <Feather
                  key="credit-card"
                  name="credit-card"
                  size={24}
                  color="black"
                />
                <Text style={{ fontSize: 18 }}>Payment Info</Text>
              </View>
              <Feather name="chevron-right" size={24} color="black" />
            </View>
            <Divider />
            <TouchableOpacity style={styles.listTile} onPress={() => logout(updateActive)}>
              <View style={{ flexDirection: "row", gap: 10 }}>
                <Feather key="logout" name="log-out" size={24} color="red" />
                <Text style={{ fontSize: 18, color: "red" }}>logout</Text>
              </View>
              <Feather name="chevron-right" size={24} color="red" />
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ height: 95 }}></View>
      </ScrollView>
      <FloatingBottomTab />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    flex: 1,
    paddingBottom: 95,
  },

  listTile: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 20,
  },
});

import { View, ScrollView, StyleSheet, Text } from "react-native";
import AppBar from "../../../components/appBar";
import FloatingBottomTab from "../../../components/floatingBottomTab";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialIcons } from "@expo/vector-icons";
import { notification_list } from "../../../../database/notifications";

export default function Notifications() {
  return (
    <SafeAreaView style={{ position: "relative", flex: 1 }}>
      <View style={styles.container}>
        <AppBar title="Notifications" />

        <ScrollView style={{ marginTop: 10, paddingHorizontal: 20 }}>
          {notification_list.map((_dd, i) => (
            <View
              key={i}
              style={{
                height: 80,
                width: "100%",
                flexDirection: "row",
                alignItems: "center",
                borderBottomWidth: 0.2,
                borderBottomColor: "#eeeee",
                columnGap: 10,
                paddingRight: 35,
              }}
            >
              {/* icon */}
              <View
                style={{
                  height: 40,
                  width: 40,
                  borderRadius: 100,
                  backgroundColor: "black",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <MaterialIcons
                  name="notifications-active"
                  size={24}
                  color="white"
                />
              </View>

              {/* text */}
              <View>
                <Text style={{ fontWeight: "bold", fontSize: 16 }}>
                  {_dd.title}
                </Text>
                <Text style={{ fontSize: 12 }}>{_dd.description}</Text>
                <Text style={{ fontSize: 10, color: "gray", marginTop: 2 }}>
                  {_dd.time}
                </Text>
              </View>
            </View>
          ))}
          <View style={{ height: 95 }}></View>
        </ScrollView>
      </View>
      <FloatingBottomTab />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    flex: 1,
  },
});

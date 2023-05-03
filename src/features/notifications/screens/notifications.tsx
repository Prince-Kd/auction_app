import { View, StyleSheet } from "react-native";
import AppBar from "../../../components/appBar";
import FloatingBottomTab from "../../../components/floatingBottomTab";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Notifications() {
  return (
    <SafeAreaView style={{ position: "relative", flex: 1 }}>
      <View style={styles.container}>
        <AppBar title="Notifications" />

        <FloatingBottomTab />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    flex: 1,
  },
});

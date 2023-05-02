import { View, StyleSheet } from "react-native";
import AppBar from "../../../components/appBar";
import { StatusBar } from "expo-status-bar";
import FloatingBottomTab from "../../../components/floatingBottomTab";

export default function Profile() {
  return (
    <View style={styles.container}>
      <AppBar title="Profile" />
      <FloatingBottomTab />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    flex: 1,
  },
});

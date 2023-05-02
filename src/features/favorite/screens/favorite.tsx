import { View, StyleSheet } from "react-native";
import AppBar from "../../../components/appBar";
import { StatusBar } from "expo-status-bar";
import FloatingBottomTab from "../../../components/floatingBottomTab";

export default function Favorite() {
  return (
    <View style={styles.container}>
      <AppBar title="Favorite" />
      <FloatingBottomTab />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    flex: 1,
  },
});

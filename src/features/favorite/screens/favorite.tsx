import { View, StyleSheet } from "react-native";
import AppBar from "../../../components/appBar";
import { StatusBar } from "expo-status-bar";
import FloatingBottomTab from "../../../components/floatingBottomTab";
import { SafeAreaView } from "react-native-safe-area-context";


export default function Favorite() {
    return (
      <SafeAreaView style={{ position: "relative", flex: 1 }}>
        <View style={styles.container}>
          <AppBar title="Favorite" />
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

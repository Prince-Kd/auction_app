import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import AppBar from "../../../components/appBar";
import { TextInput } from "react-native-paper";
import FloatingBottomTab from "../../../components/floatingBottomTab";
import BidIcon from "../../../components/bidIcon";


export default function CreateAuction() {
  return (
    <SafeAreaView style={{ flex: 1, position: "relative" }}>
      <ScrollView style={{ paddingTop: 20, flex: 1 }}>
        <AppBar title="Create Auction" />
        <View style={{ paddingHorizontal: 20, paddingTop: 30 }}>
          <Text style={{ fontSize: 16, fontWeight: "500" }}>
            Choose a category
          </Text>
          <TextInput
            placeholder="Looking for something?"
            mode="outlined"
            outlineStyle={{ borderRadius: 25, borderColor: "transparent" }}
            style={{
              backgroundColor: "#eeeeee",
              marginBottom: 20,
              height: 50,
            }}
            right={<TextInput.Icon icon={"magnify"} />}
          />
        </View>
      </ScrollView>
      <FloatingBottomTab />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

});
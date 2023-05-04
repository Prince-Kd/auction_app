import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import AppBar from "../../../components/appBar";
import { TextInput } from "react-native-paper";
import FloatingBottomTab from "../../../components/floatingBottomTab";
import BidIcon from "../../../components/bidIcon";
import useAuctionStore from "../store/auctionStore";


export default function CreateAuction() {
  const { category, searchCategory } = useAuctionStore(state => state);
  return (
    <SafeAreaView style={{ flex: 1, position: "relative" }}>
      <ScrollView style={{ paddingTop: 20, flex: 1 }}>
        <AppBar title="Create Auction" />
        <View style={{ paddingHorizontal: 20, paddingTop: 30 }}>
          <Text style={{ fontSize: 16, fontWeight: "500" }}>
            Choose a category
          </Text>
          <TextInput
            placeholder="Search a category"
            value={category}
            mode="outlined"
            outlineStyle={{ borderRadius: 25, borderColor: "transparent" }}
            style={{
              backgroundColor: "#eeeeee",
              marginBottom: 20,
              height: 50,
            }}
            onChangeText={() => {
              searchCategory(category!);
            }}
            right={<TextInput.Icon icon={"magnify"} />}
          />
          <TextInput
            label="Product name *"
            mode="outlined"
            outlineStyle={{ borderRadius: 10, borderColor: "black" }}
            style={{
              backgroundColor: "#eeeeee",
              marginBottom: 20,
              height: 50,
            }}
            // left={<TextInput.Icon icon={"account-outline"} size={24} />}
          />
          <TextInput
            label="Product name *"
            mode="outlined"
            outlineStyle={{ borderRadius: 10, borderColor: "black" }}
            style={{
              backgroundColor: "#eeeeee",
              marginBottom: 20,
              height: 50,
            }}
            // left={<TextInput.Icon icon={"account-outline"} size={24} />}
          />
        </View>
        <View style={{ height: 95 }}></View>
      </ScrollView>
      <FloatingBottomTab />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

});
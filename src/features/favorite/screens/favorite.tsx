import {
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  Text,
  Dimensions,
} from "react-native";
import AppBar from "../../../components/appBar";
import { TextInput } from "react-native-paper";
import FloatingBottomTab from "../../../components/floatingBottomTab";
import { SafeAreaView } from "react-native-safe-area-context";
import { trending_auctions } from "../../../../database/trending_auctions";
import { FontAwesome } from "@expo/vector-icons";

export default function Favorite() {
  const screenWidth = Dimensions.get("window").width;
  return (
    <SafeAreaView style={{ position: "relative", flex: 1, backgroundColor: "transparent" }}>
      <View style={styles.container}>
        <AppBar title="Favorite" />

        <ScrollView style={{ paddingBottom: 95 }}>
          {/* search bar */}
          <TextInput
            placeholder="Looking for something?"
            mode="outlined"
            outlineStyle={{ borderRadius: 15, borderColor: "transparent" }}
            style={{
              backgroundColor: "#eeeeee",
              marginHorizontal: 20,
              marginBottom: 20,
              height: 50,
            }}
            right={<TextInput.Icon icon={"magnify"} />}
          />

          {/* list of products */}
          <View
            style={{
              marginTop: 10,
              paddingHorizontal: 20,
              flexDirection: "row",
              flexWrap: "wrap",
              columnGap: 60,
              rowGap: 30,
            }}
          >
            {trending_auctions.map((item) => (
              <TouchableOpacity
                style={{
                  width: (screenWidth - 100) / 2,
                  position: "relative",
                  borderRadius: 20,
                }}
                key={item._id}
              >
                <Image
                  source={{ uri: item.image }}
                  style={{
                    height: 150,
                    width: (screenWidth - 100) / 2,
                    borderRadius: 20,
                    backgroundColor: "black",
                  }}
                />
                <View
                  style={{
                    position: "absolute",
                    right: 10,
                    top: 10,
                    backgroundColor: "rgba(255, 255, 255, 0.17)",
                    width: 30,
                    height: 30,
                    borderRadius: 100,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <FontAwesome name="heart" size={14} color="red" />
                </View>
                <Text
                  style={{
                    fontSize: 16,
                    marginTop: 5,
                    fontWeight: "bold",
                  }}
                >
                  {item.name}
                </Text>
                <Text
                  style={{
                    fontSize: 10,
                    marginTop: 10,
                    fontWeight: "bold",
                    color: "gray",
                  }}
                >
                  CURRENT BID
                </Text>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: "bold",
                  }}
                >
                  $9,550
                </Text>
              </TouchableOpacity>
            ))}
          </View>
          <View style={{height: 95}}></View>
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
    // paddingBottom: 95,
  },
});

import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  FlatList,
  Dimensions,
  Image,
  TouchableOpacity,
} from "react-native";
import { TextInput } from "react-native-paper";
import { category_icons } from "../../../../database/category_icons";
import { upcoming_auctions } from "../../../../database/upcoming_auctions";
import FloatingBottomTab from "../../../components/floatingBottomTab";
import TrendingAuctions from "../../../components/trendingAuctions";

export default function Home({ navigation }: any) {
  const screenWidth = Dimensions.get("window").width;

  return (
    <View style={styles.container}>
      {/* salutation */}
      <View
        style={{
          paddingHorizontal: 20,
          marginBottom: 30,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View>
          <Text style={{ fontSize: 15, fontWeight: "500" }}>Hello,</Text>
          <Text style={{ fontSize: 20, fontWeight: "600" }}>
            Mawuli Prince 👋
          </Text>
        </View>
        <View>
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80",
            }}
            style={{ height: 30, width: 30, borderRadius: 8 }}
          />
        </View>
      </View>

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

        {/* Category Icons section */}
        <FlatList
          style={{
            paddingHorizontal: 20,
            flexGrow: 0,
            marginBottom: 20,
            flexShrink: 0,
          }}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ alignItems: "center", paddingRight: 40 }}
          data={category_icons}
          horizontal={true}
          ItemSeparatorComponent={({ highlighted }) => (
            <View style={{ marginHorizontal: 10 }}></View>
          )}
          renderItem={({ item }) => (
            <View style={{ alignItems: "center" }}>
              <TouchableOpacity
                style={{
                  height: 60,
                  width: 60,
                  borderRadius: 15,
                  backgroundColor: "black",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {item.icon}
              </TouchableOpacity>
              <Text style={{ fontSize: 12, color: "gray" }}>{item.name}</Text>
            </View>
          )}
          keyExtractor={(item, index) => item._id}
        />

        {/* Upcoming Aunctions sections */}
        <Text
          style={{
            paddingLeft: 20,
            marginBottom: 20,
            fontSize: 16,
            fontWeight: "500",
          }}
        >
          Upcoming Auctions
        </Text>
        <FlatList
          style={{
            paddingHorizontal: 20,
            flexGrow: 0,
            marginBottom: 20,
            flexShrink: 0,
          }}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ alignItems: "center", paddingRight: 40 }}
          data={upcoming_auctions}
          horizontal={true}
          ItemSeparatorComponent={({ highlighted }) => (
            <View style={{ marginHorizontal: 10 }}></View>
          )}
          renderItem={({ item }) => (
            <View style={{ position: "relative" }}>
              <Image
                source={{ uri: item.image }}
                style={{
                  height: 160,
                  width: screenWidth - 40,
                  borderRadius: 20,
                }}
              />
              <View style={{ position: "absolute", bottom: 10, left: 10 }}>
                <Text style={{ fontSize: 14, color: "white" }}>
                  {item.name}
                </Text>
                <Text
                  style={{ fontSize: 14, color: "white", fontWeight: "bold" }}
                >
                  {item.date}
                </Text>
              </View>
            </View>
          )}
          keyExtractor={(item) => item._id}
        />

        {/* Trending aution section */}
        <TrendingAuctions navigation={navigation} />
        <View style={{ height: 95 }}></View>
      </ScrollView>
      <FloatingBottomTab />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    position: "relative",
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#ffffff",
    paddingTop: 50,
    // paddingBottom: 95,
  },
});

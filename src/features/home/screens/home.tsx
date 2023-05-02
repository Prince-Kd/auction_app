import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  FlatList,
  Dimensions,
} from "react-native";
import { TextInput } from "react-native-paper";
import { Feather } from "@expo/vector-icons";

export default function Home() {
  const screenWidth = Dimensions.get("window").width;
  return (
    <View style={styles.container}>
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
        <View
          style={{
            height: 30,
            width: 30,
            borderRadius: 10,
            backgroundColor: "black",
          }}
        ></View>
      </View>
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
      <FlatList
        style={{
          paddingHorizontal: 20,
          flexGrow: 0,
          marginBottom: 20,
          flexShrink: 0,
        }}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ alignItems: "center", paddingRight: 40 }}
        data={[1, 2, 3, 4, 5, 6]}
        horizontal={true}
        ItemSeparatorComponent={({ highlighted }) => (
          <View style={{ marginHorizontal: 10 }}></View>
        )}
        renderItem={({ item }) => (
          <View
            style={{
              height: 60,
              width: 60,
              borderRadius: 15,
              backgroundColor: "black",
            }}
          ></View>
        )}
        keyExtractor={(item, index) => item.toString()}
      />
      <Text
        style={{
          paddingLeft: 20,
          marginBottom: 20,
          fontSize: 16,
          fontWeight: "500",
        }}
      >
        Upcoming Aunctions
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
        data={[1, 2]}
        horizontal={true}
        ItemSeparatorComponent={({ highlighted }) => (
          <View style={{ marginHorizontal: 10 }}></View>
        )}
        renderItem={({ item }) => (
          <View
            style={{
              height: 160,
              width: screenWidth - 40,
              borderRadius: 20,
              backgroundColor: "black",
            }}
          ></View>
        )}
        keyExtractor={(item, index) => item.toString()}
      />
      <Text
        style={{
          paddingLeft: 20,
          marginBottom: 20,
          fontSize: 16,
          fontWeight: "500",
        }}
      >
        Trending Aunctions
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#ffffff",
    paddingTop: 50,
  },
});

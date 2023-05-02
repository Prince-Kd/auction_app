import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import { trending_auctions } from "../../database/trending_auctions";

export default function TrendingAuctions() {
  return (
    <View>
      <Text
        style={{
          paddingLeft: 20,
          marginBottom: 20,
          fontSize: 16,
          fontWeight: "500",
        }}
      >
        Trending Auctions
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
        data={trending_auctions}
        horizontal={true}
        ItemSeparatorComponent={({ highlighted }) => (
          <View style={{ marginHorizontal: 10 }}></View>
        )}
        renderItem={({ item }) => (
          <TouchableOpacity style={{ width: 130, alignItems: "center" }}>
            <Image
              source={{ uri: item.image }}
              style={{
                height: 140,
                width: 130,
                borderRadius: 20,
                backgroundColor: "black",
              }}
            />
            <Text
              style={{
                fontSize: 14,
                marginTop: 5,
              }}
            >
              {item.name}
            </Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item._id}
      />
    </View>
  );
}

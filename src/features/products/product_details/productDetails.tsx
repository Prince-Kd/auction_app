import {
  View,
  Text,
  // SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import { MaterialIcons, Feather, FontAwesome } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";


export default function ProductDetails({ navigation }: any) {
  return (
    
      <SafeAreaView >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingHorizontal: 20,
            paddingTop: 20,
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
            <TouchableOpacity onPress={() => navigation.navigate("Home")}>
              <MaterialIcons name="arrow-back-ios" size={24} color="black" />
            </TouchableOpacity>
            <Text style={{ fontSize: 18, fontWeight: "500" }}>
              Product Details
            </Text>
          </View>
          <TouchableOpacity>
            <MaterialIcons name="ios-share" size={24} color="black" />
          </TouchableOpacity>
        </View>

        <ScrollView>
          <View
            style={{
              marginHorizontal: 20,
              marginTop: 20,
            }}
          >
            {/* product image */}
            <View style={{ position: "relative" }}>
              <Image
                source={{
                  uri: "https://cdn.shopify.com/s/files/1/0577/4098/4515/products/il_fullxfull.1583999205_lwhf_533x.jpg?v=1623596812",
                }}
                style={{ height: 300, borderRadius: 30 }}
              />

              <View
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.17)",
                  paddingHorizontal: 10,
                  paddingVertical: 3,
                  borderRadius: 20,
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 3,
                  position: "absolute",
                  left: 20,
                  top: 15,
                }}
              >
                <Feather name="clock" size={12} color="white" />
                <Text style={{ color: "white" }}>3d 6h 48m 03s</Text>
              </View>
              <View
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.17)",
                  paddingHorizontal: 10,
                  paddingVertical: 3,
                  borderRadius: 20,
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 3,
                  position: "absolute",
                  right: 20,
                  top: 15,
                }}
              >
                <Text style={{ color: "white" }}>340</Text>
                <FontAwesome name="heart" size={12} color="red" />
              </View>
            </View>

            {/* product code */}
            <Text
              style={{
                color: "gray",
                marginTop: 15,
                fontWeight: "500",
                fontSize: 12,
              }}
            >
              NO: 123456789
            </Text>

            {/* product name */}
            <Text
              style={{
                marginTop: 10,
                fontWeight: "bold",
                fontSize: 18,
              }}
            >
              Emerald Majesty Ring 24K Gold with Floral Details
            </Text>

            {/* sold by */}
            <View
              style={{
                flexDirection: "row",
                gap: 5,
                marginTop: 10,
                alignItems: "center",
              }}
            >
              <Image
                source={{
                  uri: "https://engineering.unl.edu/images/staff/Kayla-Person.jpg",
                }}
                style={{ width: 20, height: 20, borderRadius: 100 }}
              />
              <Text
                style={{
                  color: "gray",
                  fontWeight: "500",
                  fontSize: 12,
                }}
              >
                Sold by
              </Text>
              <Text
                style={{
                  color: "blue",
                  fontWeight: "500",
                  fontSize: 12,
                }}
              >
                Harrison Sinclair
              </Text>
            </View>

            {/* description */}
            <Text
              style={{
                marginTop: 10,
                fontWeight: "bold",
                fontSize: 14,
              }}
            >
              Description
            </Text>
            <Text
              style={{
                marginTop: 5,
                color: "gray",
                fontSize: 12,
              }}
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </Text>

            {/* current bid */}
            <Text
              style={{
                marginTop: 10,
                fontWeight: "bold",
                fontSize: 14,
              }}
            >
              Current Bid
            </Text>
            <View
              style={{
                marginTop: 5,
                backgroundColor: "#eeeeee",
                borderRadius: 10,
                padding: 10,
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  gap: 5,
                  alignItems: "center",
                }}
              >
                <Image
                  source={{
                    uri: "https://engineering.unl.edu/images/staff/Kayla-Person.jpg",
                  }}
                  style={{ width: 30, height: 30, borderRadius: 100 }}
                />
                <Text
                  style={{
                    fontSize: 12,
                  }}
                >
                  Bid placed by
                </Text>
                <Text
                  style={{
                    color: "blue",
                    fontWeight: "500",
                    fontSize: 12,
                  }}
                >
                  Jack Monroe
                </Text>
              </View>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "bold",
                }}
              >
                $ 14, 500
              </Text>
            </View>

            {/* place bid button */}
            <View
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <TouchableOpacity
                style={{
                  marginTop: 20,
                  backgroundColor: "black",
                  width: 150,
                  height: 50,
                  borderRadius: 25,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Text style={{ color: "white", fontWeight: "bold" }}>
                  Place Bid
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
  
  );
}

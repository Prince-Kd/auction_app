import {
  View,
  Text,
  KeyboardAvoidingView,
  TouchableOpacity,
  ScrollView,
  Platform,
  Image,
} from "react-native";
import { MaterialIcons, Feather, FontAwesome } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import Modal from "react-native-modal";
import { Ionicons } from "@expo/vector-icons";
import { TextInput } from "react-native-paper";

export default function ProductDetails({ navigation }: any) {
  const [showModal, setShowModal] = useState(false);
  return (
    <SafeAreaView style={{ flex: 1 }}>
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
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
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
              onPress={() => setShowModal(true)}
            >
              <Text style={{ color: "white", fontWeight: "bold" }}>
                Place Bid
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ height: 95 }}></View>
      </ScrollView>
      {/* modal */}
      <KeyboardAvoidingView
        // style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        // enabled={false}
        keyboardVerticalOffset={Platform.OS === "ios" ? 64 : 0}
      >
        <Modal
          isVisible={showModal}
          onBackdropPress={() => setShowModal(false)}
          swipeDirection="down"
          style={{ justifyContent: "flex-end", margin: 0 }}
        >
          <View
            style={{
              backgroundColor: "white",
              paddingTop: 16,
              paddingHorizontal: 20,
              paddingBottom: 5,
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
            }}
          >
            <View
              style={{
                height: 4,
                borderRadius: 2,
                backgroundColor: "#eeeeee",
                width: 80,
                marginBottom: 20,
                alignSelf: "center",
              }}
            ></View>
            <View
              style={{
                backgroundColor: "#eeeeee",
                borderRadius: 20,
                padding: 15,
                flexDirection: "row",
                justifyContent: "space-between",
                gap: 10,
                marginBottom: 15,
              }}
            >
              <View
                style={{
                  height: 60,
                  width: 60,
                  borderRadius: 15,
                  backgroundColor: "black",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              ></View>
              <View style={{ alignItems: "flex-start" }}>
                <Text style={{ fontSize: 12, color: "gray" }}>CURRENT BID</Text>
                <Text style={{ fontSize: 16, fontWeight: "500" }}>
                  14,500 $
                </Text>
                <Text style={{ fontSize: 12 }}>Bidding Fee: 10%</Text>
              </View>
              <View
                style={{
                  backgroundColor: "#e1e2e3",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 5,
                  borderRadius: 20,
                  alignSelf: "flex-start",
                  padding: 3,
                  paddingHorizontal: 10,
                }}
              >
                <Ionicons name="time" size={15} color="black" />
                <Text style={{ fontWeight: "500", fontSize: 13 }}>
                  3d 6h 48m 03s
                </Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                gap: 20,
              }}
            >
              <View
                style={{
                  borderRadius: 10,
                  paddingVertical: 10,
                  backgroundColor: "black",
                  flex: 1,
                }}
              >
                <Text
                  style={{
                    color: "white",
                    textAlign: "center",
                    fontWeight: "500",
                    fontSize: 12,
                  }}
                >
                  14,600 $
                </Text>
              </View>
              <View
                style={{
                  borderRadius: 10,
                  paddingVertical: 8,
                  backgroundColor: "black",
                  flex: 1,
                }}
              >
                <Text
                  style={{
                    color: "white",
                    textAlign: "center",
                    fontWeight: "500",
                    fontSize: 12,
                  }}
                >
                  14,600 $
                </Text>
              </View>
              <View
                style={{
                  borderRadius: 10,
                  paddingVertical: 8,
                  backgroundColor: "black",
                  flex: 1,
                }}
              >
                <Text
                  style={{
                    color: "white",
                    textAlign: "center",
                    fontWeight: "500",
                    fontSize: 12,
                  }}
                >
                  14,600 $
                </Text>
              </View>
            </View>
            <View style={{ flexDirection: "row", height: 50, marginTop: 20 }}>
              <View style={{ flex: 1 }}></View>
              <TextInput style={{ flex: 1, backgroundColor: "" }} />
              <View style={{ flex: 1 }}></View>
            </View>

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
                onPress={() => setShowModal(true)}
              >
                <Text style={{ color: "white", fontWeight: "bold" }}>
                  Place Bid
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

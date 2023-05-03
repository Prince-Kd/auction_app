import { View, StyleSheet, Pressable } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useBottomNavStore } from "../hooks/useBottomNavStore";
import BidIcon from "./bidIcon";

export default function FloatingBottomTab() {
  const activeIndex = useBottomNavStore((state) => state.activeIndex);
  const updateIndex = useBottomNavStore((state) => state.updateActive);

  return (
    <View style={styles.container}>
      <Feather
        key="home"
        onPress={() => {
          updateIndex(0);
        }}
        name="home"
        size={24}
        color={activeIndex === 0 ? "white" : "gray"}
      />
      <Feather
        onPress={() => {
          updateIndex(1);
        }}
        key="heart"
        name="heart"
        size={24}
        color={activeIndex === 1 ? "white" : "gray"}
      />
      <Pressable
        // style={{ height: 24, width: 24, flexDirection: "row", justifyContent: "center" }}
        onPress={() => {
          updateIndex(2);
        }}
      >
        {/* <Bid /> */}
        <BidIcon color={activeIndex === 2 ? "white" : "gray"} />
      </Pressable>

      <Feather
        onPress={() => {
          updateIndex(3);
        }}
        key="bell"
        name="bell"
        size={24}
        color={activeIndex === 3 ? "white" : "gray"}
      />
      <Feather
        onPress={() => {
          updateIndex(4);
        }}
        key="user"
        name="user"
        size={24}
        color={activeIndex === 4 ? "white" : "gray"}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    position: "absolute",
    bottom: 5,
    left: 25,
    right: 25,
    backgroundColor: "black",
    borderRadius: 40,
    height: 80,
    paddingHorizontal: 30,
    alignItems: "center",
    justifyContent: "space-between",
  },
});

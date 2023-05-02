import { View, Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

interface AppBarProps {
  title: string;
}

export default function AppBar({ title }: AppBarProps) {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 20,
      }}
    >
      <Text style={{ fontSize: 18, fontWeight: "500" }}>{title}</Text>
      <MaterialIcons name="notifications-none" size={24} color="black" />
    </View>
  );
}

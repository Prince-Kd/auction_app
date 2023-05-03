import { View, Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

interface AppBarProps {
  title: string;
  goBack?: boolean;
  navigation?: any;
}

export default function AppBar({ title, goBack, navigation }: AppBarProps) {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 20,
      }}
    >
      <View style={{ flexDirection: "row", gap: 10 }}>
        {goBack ? (
          <MaterialIcons
            onPress={() => navigation.goBack()}
            name="chevron-left"
            size={24}
            color="black"
          />
        ) : (
          <></>
        )}
        <Text style={{ fontSize: 20, fontWeight: "500" }}>{title}</Text>
      </View>
    </View>
  );
}

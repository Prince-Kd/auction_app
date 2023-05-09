import {
  View,
  Text,
  KeyboardAvoidingView,
  TouchableOpacity,
  ScrollView,
  Platform,
  Image,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import Modal from "react-native-modal";
import { Ionicons } from "@expo/vector-icons";
import { TextInput } from "react-native-paper";

export default function AccountDetails({ navigation }: any) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={{
          paddingHorizontal: 20,
          paddingTop: 20,
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
          <TouchableOpacity onPress={() => navigation.navigate("Account")}>
            <MaterialIcons name="arrow-back-ios" size={24} color="black" />
          </TouchableOpacity>
          <Text style={{ fontSize: 18, fontWeight: "500" }}>Account</Text>
        </View>
      </View>

      <ScrollView>
        <Text>Hi</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

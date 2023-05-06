import { useState } from "react";
import { View, Image, Text } from "react-native";
import Modal from "react-native-modal";
import { Asset } from "expo-asset";
const errorGif = Asset.fromModule(require("../../../assets/error.gif"));
const successGif = Asset.fromModule(require("../../../assets/success.gif"));

enum responseType {
  success,
  error,
  info,
}

interface responseInterface {
  msg: string;
  type: responseType;
}

export default function ResponseModal(args: responseInterface) {
  const [showModal, setShowModal] = useState(false);

  return (
    <Modal
      isVisible={showModal}
      onBackdropPress={() => setShowModal(false)}
      // swipeDirection="down"
      // style={{ justifyContent: "flex-end", margin: 0 }}
    >
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        {args.type === responseType.error ? (
          <Image
            style={{ height: 80, width: 80 }}
            source={{ uri: errorGif.uri }}
          />
        ) : args.type === responseType.success ? (
          <Image
            style={{ height: 80, width: 80 }}
            source={{ uri: successGif.uri }}
          />
        ) : (
          <Image
            style={{ height: 80, width: 80 }}
            source={{ uri: successGif.uri }}
          />
        )}
        <Text>{args.msg}</Text>
      </View>
    </Modal>
  );
}

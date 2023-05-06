import * as SecureStore from "expo-secure-store";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { userInterface } from "../models/models";

const storeToken = async (value: string) => {
  await SecureStore.setItemAsync("token", value);
};

const deleteToken = async () => {
  await SecureStore.deleteItemAsync("token");
};

const getToken = async () => {
  let result: string | null = await SecureStore.getItemAsync("token");
  console.log("Token: ", result);
  return result;
};

const storeUser = async (data: any) => {
  try {
    await AsyncStorage.setItem("user", JSON.stringify(data));
  } catch (e) {
    // saving error
    console.log("Error storing user: ", e);
  }
};

const getUser = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem("user");
    console.log(JSON.parse(jsonValue ?? ""));
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    // error reading value
    console.log("Error reading user");
  }
};

export { storeToken, getToken, storeUser, getUser, deleteToken };

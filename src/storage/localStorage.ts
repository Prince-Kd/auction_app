import * as SecureStore from "expo-secure-store";

const storeToken = async (value: string) => {
  await SecureStore.setItemAsync("token", value);
};

const getToken = async () => {
  let result: string | null = await SecureStore.getItemAsync("token");
  console.log("Token: ", result);
  return result;
};

export { storeToken, getToken };

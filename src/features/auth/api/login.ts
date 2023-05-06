import axios, { AxiosError, AxiosResponse } from "axios";
import { loginInterface } from "../helpers/authInterface";
import { API_URL } from "../../../api/api_url";
import { storeUser } from "../../../storage/localStorage";
import { Alert } from "react-native";

export async function login(args: loginInterface): Promise<string | null> {
  
  try {
    const response = await axios.post(`${API_URL}/auth/signin`, args, {
      headers: { "Content-Type": "application/json" },
    });

    console.log("response: ", response);

    const data = await response.data;
    storeUser(data.payload);
  
    return data.token;
  } catch (error) {
    console.error(error);

    if ((error as unknown as AxiosError).response as unknown as AxiosResponse) {
      let resError: AxiosResponse = (error as unknown as AxiosError)
        .response as AxiosResponse;
      let res = resError.data.message;
      Alert.alert("Login", res, [{ text: "Okay", style: "cancel" }]);
      // throw new Error("error occurred");
      return null;
    } else {
      Alert.alert("Login", "An error occurred. Try again", [
        { text: "Okay", style: "cancel" },
      ]);
      // throw new Error(error as unknown as string);
      return null;
    }
  }
}

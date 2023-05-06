import axios, { AxiosError } from "axios";
import { loginInterface, signupInterface } from "../helpers/authInterface";
import { API_URL } from "../../../api/api_url";
import { Alert } from "react-native";


export async function signup(args: signupInterface, navigation : any): Promise<any> {
  
  try {
    const response = await axios.post(`${API_URL}/auth/signup`, args, {
      headers: { "Content-Type": "application/json" },
    });

    console.log("response: ", response);
    // const data = await response.data;
    // return data.token;
    navigation.navigate("Verify");
  } catch (error) {
    console.error(error);

    if ((error as unknown as AxiosError).response) {
      let resError: any = (error as unknown as AxiosError).response;
      let res = resError.data.message;
      Alert.alert("Signup", res, [{ text: "Okay", style: "cancel" }]);
      throw new Error("error occurred");
    } else {
      Alert.alert("Signup", "An error occurred, Try again.", [
        { text: "Okay", style: "cancel" },
      ]);
      throw new Error(error as unknown as string);
    }
  }
}

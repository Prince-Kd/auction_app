import axios, { AxiosError } from "axios";
import { loginInterface, signupInterface } from "../helpers/authInterface";
import { API_URL } from "../../../api/api_url";

export async function signup(args: signupInterface): Promise<any> {
  try {
    const response = await axios.post(`${API_URL}/auth/signup`, args, {
      headers: { "Content-Type": "application/json" },
    });

    console.log("response: ", response);

    const data = await response.data;
    return data.token;
  } catch (error) {
    console.error(error);

    if ((error as unknown as AxiosError).response) {
      let resError: any = (error as unknown as AxiosError).response;
      let res = resError.message;
      alert(res);
      throw new Error("error occurred");
    } else {
      throw new Error(error as unknown as string);
    }
  }
}

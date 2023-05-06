import axios, { AxiosError } from "axios";
import { loginInterface } from "../helpers/authInterface";
import { API_URL } from "../../../api/api_url";
import { storeUser } from "../../../storage/localStorage";

export async function login(args: loginInterface): Promise<string> {
  try {
    const response = await axios.post(`${API_URL}/auth/signin`, args, {
      headers: { "Content-Type": "application/json" },
    });

    console.log("response: ", response);

    const data = await response.data;
    storeUser(data.paylaod)
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

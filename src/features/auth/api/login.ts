import axios, { AxiosError } from "axios";
import { loginInterface } from "../helpers/authInterface";

export async function login(args: loginInterface): Promise<string> {
  try {
    const response = await axios.post("https://api.example.com/login", args, {
      headers: { "Content-Type": "application/json" },
    });

    const data = await response.data;
    return data.token;
  } catch (error) {
    console.error(error);
    if ((error as unknown as AxiosError).response) {
      throw new Error('error occurred');
    } else {
      throw new Error(error as unknown as string);
    }
  }
}

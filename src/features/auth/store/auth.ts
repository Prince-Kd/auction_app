import { create } from "zustand";
import { loginInterface, signupInterface } from "../helpers/authInterface";
import {
  deleteToken,
  getToken,
  storeToken,
} from "../../../storage/localStorage";
import { login } from "../api/login";
import { Alert } from "react-native";
import { useHomeStore } from "../../home/store/homeStore";
import { signup } from "../api/signup";

interface AuthStore {
  token: string | null;
  getToken: () => Promise<any>;
  logout: () => void;
  login: (args: loginInterface) => Promise<any>;
  signup: (args: signupInterface, navigation: any) => Promise<any>;
}

const useAuthStore = create<AuthStore>()((set) => ({
  token: null,
  getToken: async () => {
    let authToken = await getToken();
    set({ token: authToken });
  },
  logout: async () => {
    Alert.alert("Logout", "Do you want to logout?", [
      {
        text: "No",
        style: "cancel",
      },
      {
        text: "Yes",
        style: "destructive",
        onPress: async () => {
          await deleteToken();
          set({ token: null });
        },
      },
    ]);
  },
  login: async ({ uid, password }: loginInterface) => {
    const {fetchUser} = useHomeStore((state) => state);
    uid = uid.trim();
    const token = await login({ uid, password });
    if (token) {
      await fetchUser();
      set({ token: token });
      storeToken(token);
    }
  },
  signup: async (args: signupInterface, navigation) => {

    args.email = args.email.trim();
    await signup(args, navigation);
  },
}));

export { useAuthStore };

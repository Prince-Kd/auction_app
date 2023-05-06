import { create } from "zustand";
import { loginInterface, signupInterface } from "../helpers/authInterface";
import {
  clearUser,
  deleteToken,
  getToken,
  getUser,
  storeToken,
} from "../../../storage/localStorage";
import { login } from "../api/login";
import { Alert } from "react-native";
import { signup } from "../api/signup";

interface storedUserInterface {
  username: string;
  email: string;
  user_status: string;
}

interface AuthStore {
  token: string | null;
  user: storedUserInterface | null;
  fetchUser: () => Promise<any>;
  getToken: () => Promise<any>;
  logout: (resetActive: (value: number) => void) => void;
  login: (args: loginInterface) => Promise<any>;
  signup: (args: signupInterface, navigation: any) => Promise<any>;
}

const useAuthStore = create<AuthStore>()((set) => ({
  token: null,
  user: null,
  getToken: async () => {
    let authToken = await getToken();
    set({ token: authToken });
  },
  logout: async (resetActive) => {
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
          await clearUser();
          resetActive(0);
          set({ token: null, user: null });
        },
      },
    ]);
  },
  login: async ({ uid, password }: loginInterface) => {
    // const {fetchUser} = useHomeStore((state) => state);
    uid = uid.trim();
    const token = await login({ uid, password });
    if (token) {
      // await fetchUser();
      let user = await getUser();
      set({ token: token, user: user });
      storeToken(token);
    }
  },
  signup: async (args: signupInterface, navigation) => {
    args.email = args.email.trim();
    await signup(args, navigation);
  },
  fetchUser: async () => {
    let user = await getUser();
    set({ user: user });
  },
}));

export { useAuthStore };

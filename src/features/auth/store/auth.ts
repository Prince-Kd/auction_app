import { create } from "zustand";
import { loginInterface, signupInterface } from "../helpers/authInterface";
import { getToken, storeToken } from "../../../storage/localStorage";
import { login } from "../api/login";

interface AuthStore {
  token: string | null;
  getToken: () => Promise<string | null>;
  login: (args: loginInterface) => Promise<any>;
  signup: (args: signupInterface) => Promise<any>;
}

const useAuthStore = create<AuthStore>()((set) => ({
  token: null,
  getToken: getToken,
  login: async ({ uid, password }: loginInterface) => {
    const token = await login({ uid, password });
    set({ token: token });
    storeToken(token);
    
  },
  signup: async (args: signupInterface) => {},
}));

export { useAuthStore };

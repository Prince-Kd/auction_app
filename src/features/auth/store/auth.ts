import { create } from 'zustand';
import { loginInterface, signupInterface } from '../helpers/authInterface';

interface AuthStore{
  token: string | null;
    login: (args: loginInterface) => Promise<any>;
    signup: (args: signupInterface) => Promise<any>;
};

const useAuthStore = create<AuthStore>()(set => ({
  token: null,
    login: async ({email, password }: loginInterface) => {
      
    },
    signup: async (args: signupInterface) => {
        
    }
}))

export {useAuthStore}